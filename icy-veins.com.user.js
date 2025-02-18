// ==UserScript==
// @name        (KTN) icy-veins.com
// @description (KTN) icy-veins.com
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=icy-veins.com
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/icy-veins.com.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/icy-veins.com.user.js
// @match       *://*.icy-veins.com/*
// @match       *://icy-veins.com/*
// ==/UserScript==

// invert colors to generate "light mode"
GM_addStyle(`
    "html {filter: invert(100%) !important;}"
`);

// un-invert images to ensure they show normal colors
GM_addStyle(`
    "img,svg,video {filter: invert(100%) !important;}"
`);
