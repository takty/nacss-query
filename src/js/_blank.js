/**
 * Polyfill of pseudo class 'blank'
 *
 * @author Takuto Yanagida
 * @version 2023-02-01
 */

function apply(root = document.body, opts = {}) {
	opts = Object.assign({
		styleKey: ':ncBlank',
	}, opts);

	onLoad(() => {
		apply(root);
		const mo = new MutationObserver(ms => {
			for (const m of ms) {
				if ('childList' === m.type) apply(m.target);
			}
		});
		mo.observe(root, { childList: true });
	});

	function apply(elm) {
		const ts1 = elm.querySelectorAll(getSelector(opts.styleKey));
		for (const c of ts1) {
			if (!c.children.length) {
				while (c.firstChild) c.removeChild(c.firstChild);
			}
			setClass(c, opts.styleKey, false)
		}
	}
}
