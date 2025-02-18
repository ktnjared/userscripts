// ==UserScript==
// @name        (KTN) <all_urls>
// @description (KTN) <all_urls>
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://github.com/ktnjared/userscripts/raw/refs/heads/main/favicons/org.gnome.Epiphany.svg
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/all_urls.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/all_urls.user.js
// @match       <all_urls>
// ==/UserScript==

// Hide Google Ads
GM_addStyle(`
    ._ap_apex_ad {
        display: none !important;
    }
`);
