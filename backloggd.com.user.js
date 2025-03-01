// ==UserScript==
// @name        (KTN) backloggd.com
// @description (KTN) backloggd.com
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=backloggd.com
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/backloggd.com.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/backloggd.com.user.js
// @match       *://*.backloggd.com/*
// @match       *://backloggd.com/*
// ==/UserScript==

// invert colors to generate "light mode"
GM_addStyle(`
    "html {filter: invert(100%);}"
`);

// un-invert images to ensure they show normal colors
GM_addStyle(`
    "img,svg,video {filter: invert(100%);}"
`);

// increase comment text size
GM_addStyle(`
    ".comment .comment-body, .review-card .card-text {font-size: 1.2em;}"
`);
