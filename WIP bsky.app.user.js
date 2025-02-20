// ==UserScript==
// @name        (KTN) bsky.app WIP
// @description (KTN) bsky.app WIP
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bsky.app
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/bsky.app.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/bsky.app.user.js
// @match       *://*.bsky.app/*
// @match       *://bsky.app/*
// ==/UserScript==

// Hide trending
GM_addStyle(`
    div.css-175oi2r:has(*[aria-label~="trending"]) {
        display: none;
    }
`);
