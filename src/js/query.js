/**
 *
 * Query
 *
 * @author Takuto Yanagida
 * @version 2021-12-07
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	// @include _utility.js

	{
		// @include _inner.js
		NS['BROWSER'] = getBrowser();
		NS['DEVICE'] = getDevice();

		onResize(() => {
			[NS['BP_WIDTH'], NS['BP_HEIGHT']] = getBreakPointSize();
		}, true);
	}

})(window['NACSS']);
