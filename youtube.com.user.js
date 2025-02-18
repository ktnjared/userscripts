// ==UserScript==
// @name        (KTN) youtube.com
// @description (KTN) youtube.com
// @author      ktnjared
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/youtube.com.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/youtube.com.user.js
// @match       *://*.youtube.com/*
// @match       *://*.youtube/*
// @match       *://youtu.be/*
// @match       *://youtube.com/*
// ==/UserScript==

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ Sidebar                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// ═══ TOP ═════════════════════════════════════════════════════════════════
// Hide Shorts
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title~="Shorts"]) {
        display:none;
    }
`);

// Hide YouTube Music
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href*="music.youtube"]) {
        display:none;
    }
`);

// ═══ YOU ═════════════════════════════════════════════════════════════════
// Hide History
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/history"]) {
        display:none;
    }
`);

// Hide Your movies & TV
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your movies & TV"]) {
        display:none;
    }
`);

// Hide Downloads
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/downloads"]) {
        display:none;
    }
`);

// Hide Your Clips
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/clips"]) {
        display:none;
    }
`);

// Hide Liked Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/playlist?list=LL"]) {
        display:none;
    }
`);

// Hide Your Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your videos"]) {
        display:none;
    }
`);

// ═══ SUBSCRIPTIONS ═══════════════════════════════════════════════════════
// Hide Channels with new videos (eg. blue dot). Only display Live channels
GM_addStyle(`
    ytd-guide-entry-renderer[line-end-style="dot"] {
        display:none;
    }
`);

// Hide "All channels"
GM_addStyle(`
    ytd-guide-entry-renderer:has(youtube.com##a[href="/feed/channels"]) {
        display:none;
    }
`);

// Hide "Show more"
GM_addStyle(`
    ytd-guide-entry-renderer:has(youtube.com##a[title="Show more"]) {
        display:none;
    }
`);

// ═══ EXPLORE ═════════════════════════════════════════════════════════════
// This hides the entire section
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(3) {
        display:none;
    }
`);

// ═══ MORE FROM YOUTUBE ═══════════════════════════════════════════════════
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(4) {
        display:none;
    }
`);

// ═══ BOTTOM ══════════════════════════════════════════════════════════════
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(5) {
        display:none;
    }
`);

// ═══ FOOTER ══════════════════════════════════════════════════════════════
GM_addStyle(`
    *[id*="footer"]:has(*[id="copyright"]) {
        display:none;
    }
`);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ CHANNEL & VIDEO PAGES                                                 ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Hide Ask button
GM_addStyle(`
    yt-button-view-model:has(path[d="M480-80q0-83-31.5-156T363-363q-54-54-127-85.5T80-480q83 0 156-31.5T363-597q54-54 85.5-127T480-880q0 83 31.5 156T597-597q54 54 127 85.5T880-480q-83 0-156 31.5T597-363q-54 54-85.5 127T480-80Z"]) {
        display:none !important;
    }
`);

// Hide Clip button
GM_addStyle(`
    button[aria-label="Clip"] {
        display:none;
    }
`);

// Hide Download button
GM_addStyle(`
    button[aria-label="Download"] {
        display:none;
    }
`);

// Hide Join button
GM_addStyle(`
    button[aria-label="Join this channel"] {
        display:none;
    }
`);

// Hide "More actions"/elipsis button
GM_addStyle(`
    button[aria-label="More actions"] {
        display:none;
    }
`);

// Hide Super Thanks button
GM_addStyle(`
    button[aria-label="Thanks"] {
        display:none;
    }
`);

// Hide dislike button
GM_addStyle(`
    .style-scope.ytd-menu-renderer.force-icon-button.style-text {
        display: none;
    }
`);

// Hide Recommended Videos on Playlists
GM_addStyle(`
    ytd-item-section-renderer.style-scope.ytd-section-list-renderer:has(*[title-style="ITEM_SECTION_HEADER_TITLE_STYLE_PLAYLIST_RECOMMENDATIONS"]) {
        display: none;
    }
`)
