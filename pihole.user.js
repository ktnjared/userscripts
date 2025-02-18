// ==UserScript==
// @name        (KTN) pihole
// @description (KTN) pihole
// @author      ktnjared
// @version     yyyymmdd
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pi-hole.net
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/pihole.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/pihole.user.js
// @match       *://pihole.*/*
// @match       *://pihole/*
// ==/UserScript==

// Increase width
GM_addStyle(`
    @-moz-document domain('pihole') {
    .layout-boxed .wrapper {
        max-width: 97%;
    }
`)
