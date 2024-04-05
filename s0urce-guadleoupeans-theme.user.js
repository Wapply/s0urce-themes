// ==UserScript==
// @name         s0urce-guadleoupeans-theme
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Official Guadloupeans Empire Theme
// @author       Wapply & AlphaBay03
// @match        https://s0urce.io/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @downloadURL https://raw.githubusercontent.com/Wapply/s0urce-themes/new/main/s0urce-guadleoupeans-theme.user.js
// @updateURL   https://raw.githubusercontent.com/Wapply/s0urce-themes/new/main/s0urce-guadleoupeans-theme.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Add custom CSS to modify background image and element styles
    GM_addStyle(`
        /* Define custom CSS variables */
        :root {
            --color-terminal: #da251c;
            --color-midgreen: #fcfff8;
        }

        /* Modify background image */
        body {
            background-image: url(https://i.imgur.com/LreQ4Ab.png) !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }

        /* Modify styles for elements with class .green.svelte-ec9kqa */
        .green.svelte-ec9kqa {
            background: linear-gradient(200deg, #da251c 0%, #f8c400 100%) !important;
            border: 1px solid #f8c400 !important;
        }

        /* Modify border color for elements with class .window-selected.svelte-1hjm43z */
        .window-selected.svelte-1hjm43z {
            border-color: #f8c400 !important;
        }

        /* Modify border style for elements with class .window.svelte-1hjm43z */
        .window.svelte-1hjm43z {
            border: 2px solid #f8c400 !important;
        }

        /* Modify height of specific div */
        div[ondragover="return true"][draggable="true"][style="position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;"] {
            height: 86px !important;
        }
    `);

    // Function to check if an element matches the specified structure for the hack message window
    function matchesHackMessageStructure(element) {
        const titleElement = element.querySelector('div.window-title.svelte-1hjm43z img[alt="Hacked"]');
        return titleElement !== null;
    }

    // Function to remove the entire window containing the specified structure
    function removeHackMessageWindow() {
        const elements = document.querySelectorAll('div.window.svelte-1hjm43z.window-selected');

        // Loop through each matching element for the hack message window and remove it if it matches the structure
        elements.forEach(element => {
            if (matchesHackMessageStructure(element)) {
                element.remove(); // Remove the entire window
            }
        });
    }

    // Update Spotify playlist iframe src using JavaScript
    setInterval(() => {
        const iframe = document.querySelector('.window-content.svelte-1hjm43z iframe');
        if (iframe && iframe.src !== "https://open.spotify.com/embed/playlist/4nngjhtJEKEnZSdP8yW8PZ?utm_source=generator&theme=0") {
            iframe.src = "https://open.spotify.com/embed/playlist/4nngjhtJEKEnZSdP8yW8PZ?utm_source=generator&theme=0";
        }
    }, 1000); // Check every 1 second

    // Check for the presence of the hack message window and remove it periodically
    setInterval(() => {
        removeHackMessageWindow();
    }, 200); // Checks every 200 milliseconds
})();
