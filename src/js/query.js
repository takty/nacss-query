/**
 *
 * Query
 *
 * @author Takuto Yanagida
 * @version 2021-11-25
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	// @include _utility.js

	(function () {
		// @include _inner.js
		NS['BROWSER'] = getBrowser();
		NS['DEVICE'] = getDevice();

		onResize(() => {
			[NS['BP_WIDTH'], NS['BP_HEIGHT']] = getBreakPointSize();
		}, true);
	})();

})(window['NACSS']);
