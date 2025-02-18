// ==UserScript==
// @name        (KTN) Bluesky Quick Block (fork)
// @description (KTN) Bluesky Quick Block (fork) based on gh/Tanza3D/bluesky-quick-block
// @author      ktnjared (original by Tanza3D)
// @version     20250217
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bsky.app
// @homepageURL https://github.com/ktnjared/userscripts/
// @downloadURL https://github.com/ktnjared/userscripts/raw/refs/heads/main/bsky.app_quick_block.user.js
// @updateURL   https://github.com/ktnjared/userscripts/raw/refs/heads/main/bsky.app_quick_block.user.js
// @match       *://bsky.app/*
// ==/UserScript==

(function () {
    'use strict';
    // Put language codes here if there are multiple locales under the same language code. (Currently only for "zh")
    const HAS_REGION = ["zh"];
    // The message matching the language setting on Bluesky is used. If it's not one of these, English is used as a fallback.
    const TL = {
        en: "Are you sure you want to block {handle} ({did})? You will have to refresh the page to reflect this change.",
        de: "Bist du sicher, dass du {handle} ({did}) blockieren willst? Du musst die Seite aktualisieren, um diese Änderung zu berücksichtigen.",
        es: "¿Estás cierto de que quieres bloquear a {handle} ({did})? Tendrás que actualizar la página para reflejar este cambio.",
        ja: "本当に{handle}（{did}）をブロックしますか？ 反映させるにはページを再読み込みする必要があります。",
        "zh-CN": "您确定要阻止 {handle}（{did}）吗？您将需要刷新页面以反映此更改。",
        "zh-TW": "您確定要封鎖 {handle}（{did}）嗎？您將需要刷新頁面以反映此更改。",
        "zh-HK": "你確定要阻止 {handle}（{did}）嗎？您需要重新加載頁面才能使其生效。",
    };
    const TLButton = {
        en: "Block user",
        de: "Benutzer blockieren",
        es: "Bloquear a usuario",
        ja: "ユーザーをブロックする",
        "zh-CN": "封锁用户",
        "zh-TW": "塊使用者",
        "zh-HK": "封锁用户",
    };

    function getLocale() {
        const langCheck = (lang) => {
            const tokens = lang.split("-");
            if (!(tokens[0] in HAS_REGION)) {
                if (TL.hasOwnProperty(tokens[0])) {
                    return tokens[0];
                }
            } else {
                if (TL.hasOwnProperty(lang)) {
                    return lang;
                }
            }
            return "";
        }

        const browserLangList = navigator.languages;
        for (let lang of browserLangList) {
            const check = langCheck(lang);
            if (check !== "") {
                return check;
            }
        }
        const blueskyLang = document.getElementsByTagName("HTML")[0].lang;
        const check = langCheck(blueskyLang);
        if (check !== "") {
            return check;
        }
        return "en";
    }

    (function() {
        'use strict';

        function addButtonToDropdown(menu) {
            if (!menu.classList.contains('new-dropdown-button')) {
                menu.classList.add("new-dropdown-button");
                menu.addEventListener('click', () => {
                    var account = JSON.parse(localStorage.getItem('BSKY_STORAGE')).session.currentAccount;
                    setTimeout(() => {
                        var list = document.querySelector('[role="menu"][data-state="open"]').querySelector(".css-175oi2r");
                        var buttonToClone = list.querySelector('[data-testid="postDropdownMuteWordsBtn"');
                        var button = buttonToClone.cloneNode(true)
                        list.appendChild(button);
                        let locale = getLocale();
                        button.querySelector(".css-146c3p1").innerText = TLButton[locale];
                        list.insertBefore(button, buttonToClone);

                        var postItem = menu.closest('[data-testid^="feedItem-by-"]');
                        if(postItem == null) postItem = menu.closest('[data-testid^="postThreadItem-by-"]');

                        console.log(postItem);

                        var handle = "";

                        var tmp = postItem.querySelectorAll('a');
                        console.log(tmp);
                        for(var i of tmp) {
                            if(i.querySelector("span") == null) continue;
                            console.log(i.querySelector("span").innerText)
                            if(i.querySelector("span").innerText.trim().startsWith("@") && i.href.includes("/profile")) handle = i.querySelector("span").innerText.trim();
                        }

                        var pfp = postItem.querySelector('[data-testid="userAvatarImage"]').querySelector("img").src;
                        var did = pfp.split("/");
                        for(var v of did) {
                            if(v.startsWith("did:")) {
                                did = v.split("@")[0];
                            }
                        }

                        button.style.background = "#ff000040";

                        button.addEventListener("click", async () => {
                            let locale = getLocale();
                            if (window.confirm(TL[locale].replace("{handle}", handle).replace("{did}", did))) {
                                await fetch(account.pdsUrl+"xrpc/com.atproto.repo.createRecord", {
                                    method: "POST",
                                    headers: {
                                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
                                        "Accept": "*/*",
                                        "Content-Type": "application/json",
                                        "Authorization": "Bearer " + account.accessJwt,
                                        "Origin": "https://bsky.app",
                                    },
                                    body: JSON.stringify({
                                        collection: "app.bsky.graph.block",
                                        repo: account.did,
                                        record: {
                                            subject: did,
                                            createdAt: new Date().toISOString(),
                                            $type: "app.bsky.graph.block"
                                        }
                                    })
                                });
                            }
                        });
                    }, 30)
                });


            }
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const dropdowns = document.querySelectorAll('[data-testid="postDropdownBtn"]');
                for (var dropdown of dropdowns) {
                    addButtonToDropdown(dropdown);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    })();

})();
