// ==UserScript==
// @name        (KTN) bitbang.social
// @description (KTN) bitbang.social
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bitbang.social
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/bitbang.social.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/bitbang.social.user.js
// @match       *://bitbang.social/*
// ==/UserScript==

// Remove header image to fix TangerineUI
GM_addStyle(`
    div.tabs-bar__wrapper::before {
        display: none;
    }
`);
