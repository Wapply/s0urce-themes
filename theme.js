// ==UserScript==
// @name         s0urce-tor_browser-theme
// @namespace    http://tampermonkey.net/
// @version      1.0.8
// @description  Modify s0urce.io to have a Tor Browser style.
// @author       Wapply
// @match        https://s0urce.io/*
// @grant        GM_addStyle
// @downloadURL https://raw.githubusercontent.com/Wapply/s0urce-tor_browser-theme/new/main/theme.js
// @updateURL   https://raw.githubusercontent.com/Wapply/s0urce-tor_browser-theme/new/main/theme.js
// ==/UserScript==

`
        /* Define custom CSS variables */
        :root {
            --color-terminal: #c567f0;
            --color-midgreen: #9d54be;
        }

        /* Modify background image */
        body {
            background-image: url(https://i.imgur.com/aUfqkbN.png) !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }

        /* Modify styles for elements with class .green.svelte-ec9kqa */
        .green.svelte-ec9kqa {
            background: linear-gradient(200deg, #541a70 0%, #693780 100%) !important;
            border: 1px solid #693680 !important;
        }

        /* Modify border color for elements with class .window-selected.svelte-1hjm43z */
        .window-selected.svelte-1hjm43z {
            border-color: #693780 !important;
        }

        /* Modify border style for elements with class .window.svelte-1hjm43z */
        .window.svelte-1hjm43z {
            border: 2px solid #693680 !important;
        }

        /* Modify height of specific div */
        div[ondragover="return true"][draggable="true"][style="position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;"] {
            height: 86px !important;
        }

        /* Update Spotify playlist iframe src */
        iframe[src="https://open.spotify.com/embed/playlist/4nngjhtJEKEnZSdP8yW8PZ?utm_source=generator&theme=0"] {
            src: "https://open.spotify.com/embed/playlist/YOUR_NEW_PLAYLIST_ID?utm_source=generator&theme=0" !important;
        }
    `);
})();
