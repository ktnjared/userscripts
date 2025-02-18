// ==UserScript==
// @name        (KTN) pixiv.net
// @description (KTN) pixiv.net
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/pixiv.net.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/pixiv.net.user.js
// @match       *://*.pixiv.net/*
// @match       *://pixiv.net/*
// ==/UserScript==

// Hide Premium Trial banner on Search pages
GM_addStyle(`
    section:has(a[aria-label="pixiv Premium Free Trial"]) {
        display: none;
    }
`);

// Hide Premium Trial in header
GM_addStyle(`
    div.sc-4nj1pr-4.cugra:has(a[href="/premium/lead/lp/?g=anchor&i=site_header_omni_bar&p=free_campaign"]) {
        display: none;
    }
`)
