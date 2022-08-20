// ==UserScript==
// @name         图怪兽
// @version      0.1
// @description  try to take over the world!
// @author       Cimen
// @run-at       document-start
// @match        https://ue.818ps.com/v4
// @match        https://editorh5.818ps.com
// @grant        GM_addStyle
// ==/UserScript==
(function () {
    'use strict'
    let sty = `
    	.topRightCommandArea{
    		float:left !important;
    	}
    `
    GM_addStyle(sty)
})();
