// ==UserScript==
// @name         Oldreader img width
// @version      0.6.3
// @description  The oldreader attached image width fix (like pcgamer)
// @namespace    https://github.com/EsDeKa
// @match        https://theoldreader.com/posts/all
// @run-at       document-start
// @author       Esdeka
// @updateURL    https://raw.githubusercontent.com/EsDeKa/Oldreader-img-width-user-js/master/oldreaderimgwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/EsDeKa/Oldreader-img-width-user-js/master/oldreaderimgwidth.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var styleEl = document.createElement('style'),
        styleSheet;

	// Append style element to head
	document.head.appendChild(styleEl);

	// Grab style sheet
	styleSheet = styleEl.sheet;
	styleSheet.insertRule("div.enclosure > img { max-width: 30% }", 0);
})();
