// ==UserScript==
// @name        (KTN) cultdeadcow.com
// @description (KTN) cultdeadcow.com
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=cultdeadcow.com
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/cultdeadcow.com.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/cultdeadcow.com.user.js
// @match       *://*.cultdeadcow.com/*
// @match       *://cultdeadcow.com/*
// ==/UserScript==

// Set body to black color, weight 600, HTML 2.0 gray
GM_addStyle(`
    body {
        background-color: #c0c0c0; //silver
        color: #000000; //black
        font-weight: 600;
    }
`);

// Set hyperlinks to HTML 2.0 values
GM_addStyle(`
    a:link {
        color: #0000ff; //blue
    }

    a:visited {
        color: #800080; //purple
    }

    a:active {
        color: #ff0000; //red
    }
`);
