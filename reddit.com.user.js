// ==UserScript==
// @name        (KTN) reddit.com
// @description (KTN) reddit.com
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/reddit.com.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/reddit.com.user.js
// @match       *://*.reddit.com/*
// @match       *://reddit.com/*
// ==/UserScript==

// Display full-szied images
(function() {
    const style = document.createElement('style');
    style.textContent = 'figure > div, figure > div > img, figure > a > div, figure > a > div > img {height: 100%;}';
    document.head.appendChild(style);
})();
