// ==UserScript==
// @name         Oldreader img width
// @namespace    http://tampermonkey.net/
// @version      0.5.5
// @updateURL    https://raw.githubusercontent.com/EsDeKa/Oldreader-img-width-user-js/master/oldreaderimgwidth.js
// @downloadURL  https://raw.githubusercontent.com/EsDeKa/Oldreader-img-width-user-js/master/oldreaderimgwidth.js
// @description  try to take over the world!
// @author       Esdeka
// @match        https://theoldreader.com/posts/all
// @grant        none
// @run-at       document-start
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
