// ==UserScript==
// @name         s0urce-montserrat-theme
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  Official Montserrat Empire Theme
// @author       Wapply & AlphaBay03
// @match        https://s0urce.io/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @downloadURL https://raw.githubusercontent.com/Wapply/s0urce-themes/new/main/s0urce-montserrat-theme.user.js
// @updateURL   https://raw.githubusercontent.com/Wapply/s0urce-themes/new/main/s0urce-montserrat-theme.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to add or update CSS
    function addOrUpdateStyle(css) {
        const styleElement = document.getElementById('customStyles');
        if (styleElement) {
            styleElement.textContent = css;
        } else {
            const newStyleElement = document.createElement('style');
            newStyleElement.id = 'customStyles';
            newStyleElement.textContent = css;
            document.head.appendChild(newStyleElement);
        }
    }

    // Add custom CSS
    addOrUpdateStyle(`
        /* Define custom CSS variables */
        :root {
            --color-terminal: #027fb8;
            --color-midgreen: #fcfff8;
            --color-progress-red: #027fb8;
            --color-green: #027fb8;
        }

        /* Modify background image */
        body {
            background-image: url(https://i.imgur.com/cnwWp7P.png) !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }

        /* Modify styles for elements with class .green.svelte-ec9kqa */
        .green.svelte-ec9kqa {
            background: linear-gradient(200deg, #2d2d2d 0%, #027fb8 100%) !important;
            border: 1px solid #027fb8 !important;
        }

        /* Modify border color for elements with class .window-selected.svelte-1hjm43z */
        .window-selected.svelte-1hjm43z {
            border-color: #027fb8 !important;
        }

        /* Modify border style for elements with class .window.svelte-1hjm43z */
        .window.svelte-1hjm43z {
            border: 2px solid #027fb8 !important;
        }

        /* Modify height of specific div */
        div[ondragover="return true"][draggable="true"][style="position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;"] {
            height: 86px !important;
        }

        /* Toggle button styles */
        #toggleBtn {
            position: fixed;
            top: 9px;
            right: 275px;
            z-index: 9999;
            background-color: var(--color-terminal);
            color: #fff;
            border: none;
            padding: 7.5px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        /* Progress bar styles */
        #progressBar {
            position: fixed;
            top: 9px;
            left: 60%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 550px;
            background-color: #e0e0e0;
            border-radius: 5px;
            margin: 10px 0;
            height: 10px;
            overflow: hidden;
        }

        #progressBar .progress {
            height: 100%;
            background-color: var(--color-progress-red);
            width: 0%;
            transition: width 0.5s ease-in-out;
        }
    `);

// Function to click the specified button
function clickButton() {
    const button = document.querySelector('body > div:nth-child(1) > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > div:nth-child(4) > form > a > button');
    if (button) {
        button.click();
        console.log('Clicked the button:', button);
    }
}

// Check for the presence of the specified button and click it
setInterval(clickButton, 200); // Checks every 200 milliseconds

    let progressBar = null;
    let hasReached100 = false; // Flag to track if progress has reached 100%

    // Check for progress and display it with a progress bar
    setInterval(() => {
        const elements = document.querySelectorAll('.message');

        elements.forEach(element => {
            const progressText = element.textContent.match(/Progress: (\d+\.?\d*%|100%)/);
            const hackMessage = element.textContent.includes("You've been hacked by");

            if ((progressText && progressText[1]) || hackMessage) {
                let progressValue = progressText ? parseFloat(progressText[1]) : 100; // Default to 100% if it's a hack message
                progressValue = progressValue > 100 ? 100 : progressValue; // Cap at 100%

                console.log(`Detected progress value: ${progressValue}%`);

                if (progressBar) {
                    progressBar.querySelector('.progress').style.width = `${progressValue}%`;

                    // Check if progress has reached 100%
                    if (progressValue >= 100 && !hasReached100) {
                        hasReached100 = true;
                        progressBar.style.display = 'none'; // Hide the progress bar
                        console.log('Progress bar reached 100%. Waiting for new progress...');
                    }

                    // Re-show the progress bar if a new progress update is detected
                    if (progressValue < 100 && hasReached100) {
                        progressBar.style.display = 'block'; // Re-show the progress bar
                        console.log('Re-showing progress bar after 100%');
                        hasReached100 = false; // Reset the flag
                    }
                } else {
                    progressBar = document.createElement('div');
                    progressBar.id = 'progressBar';
                    progressBar.innerHTML = `<div class="progress" style="width: ${progressValue}%;"></div>`;
                    document.body.appendChild(progressBar);
                    console.log(`Added new progress bar with value: ${progressValue}%`);
                }
            } else {
                console.log('No progress text found.');
            }
        });
    }, 1000); // Check every 1 second

    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggleBtn';
    toggleBtn.textContent = 'Auto-Remove: ON';

    // Append toggle button to the body
    document.body.appendChild(toggleBtn);

    let isAutoRemoveEnabled = true; // Default is true

    // Toggle auto-remove functionality
    toggleBtn.addEventListener('click', () => {
        isAutoRemoveEnabled = !isAutoRemoveEnabled;
        toggleBtn.textContent = `Auto-Remove: ${isAutoRemoveEnabled ? 'ON' : 'OFF'}`;
    });

    // Function to check if an element matches the specified structure for the hack message window
    function matchesHackMessageStructure(element) {
        const titleElement = element.querySelector('div.window-title.svelte-1hjm43z img[alt="Hacked"]');
        return titleElement !== null;
    }

    // Function to remove the entire window containing the specified structure
    function removeHackMessageWindow() {
        if (!isAutoRemoveEnabled) return; // Exit if auto-remove is disabled

        const elements = document.querySelectorAll('div.window.svelte-1hjm43z.window-selected');

        // Loop through each matching element for the hack message window and remove it if it matches the structure
        elements.forEach(element => {
            if (matchesHackMessageStructure(element)) {
                element.remove(); // Remove the entire window

                // Remove the corresponding "Hacked" taskbar item
                const taskbarItems = document.querySelectorAll('.taskbar-item.svelte-1azjldn');
                taskbarItems.forEach(item => {
                    if (item.textContent.includes('Hacked')) {
                        item.remove(); // Remove the "Hacked" taskbar item
                        return; // Exit loop once removed
                    }
                });

                // Auto-click the next "Hacked" taskbar item
                const nextTaskbarItem = document.querySelector('.taskbar-item.svelte-1azjldn');
                if (nextTaskbarItem) {
                    nextTaskbarItem.click(); // Click the next "Hacked" taskbar item
                }
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