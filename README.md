# s0urce-guadleoupeans-theme

## Description

This Tampermonkey script enhances the appearance and user experience of the s0urce.io website with an official theme inspired by the Guadloupeans Empire. It features a custom background image, specific element stylings, and auto-remove functionality for specific message windows. Additionally, it dynamically updates the Spotify playlist displayed within a designated iframe and introduces a red progress bar for hack progress.

## Features

- **Custom Background Image**: Applies a custom background image to the website, providing a unique visual experience.
  
- **Element Styling**:
  - Modifies the background and border styles for elements with the class `.green.svelte-ec9kqa`.
  - Changes the border color for elements with the class `.window-selected.svelte-1hjm43z`.
  - Adjusts the border style for elements with the class `.window.svelte-1hjm43z`.
  - Sets a specific height for a div with inline styles matching `position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;`.

- **Dynamic Spotify Playlist Update**: Checks every second for the presence of the `iframe` with the class `window-content svelte-1hjm43z`. If it exists and does not match the specified Spotify playlist URL, it updates its `src` attribute accordingly.

- **Auto-Remove Functionality**: Introduces a toggle button to enable or disable the auto-remove functionality for specific message windows. This feature ensures a cleaner interface by removing unwanted elements automatically.

- **Red Progress Bar with Multiple Breakpoints**: Dynamically detects the progress percentage from hack messages and displays it with a red progress bar. The progress bar adjusts to various percentage values (25%, 50%, 75%, 100%) based on the detected percentage in the message.

## Installation

1. Install the Tampermonkey extension for your browser if you haven't already.
2. Click on the Tampermonkey icon in your browser toolbar.
3. Choose "Create a new script".
4. Delete any default code in the editor and paste the provided script.
5. Save the script by pressing `Ctrl + S` (or `Cmd + S` on Mac).
6. Navigate to the s0urce.io website, and the modifications should be applied.

## Meta

- **Version**: 1.0.0
- **Authors**: [Wapply](https://github.com/Wapply) & [AlphaBay03](https://github.com/AlphaBay03)


# s0urce-tor_browser-theme

## Description

This Tampermonkey script modifies the appearance and behavior of the s0urce.io website to resemble the style of the Tor Browser. It applies a custom background image, updates various element styles, and dynamically changes the Spotify playlist displayed in a specific iframe.

## Features

- **Custom Background Image**: Sets a custom background image for the entire website.
- **Element Styling**:
  - Modifies the background and border styles for elements with the class `.green.svelte-ec9kqa`.
  - Changes the border color for elements with the class `.window-selected.svelte-1hjm43z`.
  - Adjusts the border style for elements with the class `.window.svelte-1hjm43z`.
  - Sets a specific height for a div with inline styles matching `position: relative; width: 154.8px; height: 86px; font-size: 16px; float: left;`.
- **Dynamic Spotify Playlist Update**: Checks every second if the `iframe` with the class `window-content svelte-1hjm43z` exists and updates its `src` attribute to a specified Spotify playlist URL if it does not match.

## Installation

1. Install the Tampermonkey extension for your browser if you haven't already.
2. Click on the Tampermonkey icon in your browser toolbar.
3. Choose "Create a new script".
4. Delete any default code in the editor and paste the provided script.
5. Save the script by pressing `Ctrl + S` (or `Cmd + S` on Mac).
6. Navigate to the s0urce.io website, and the modifications should be applied.

## Meta

- **Version**: 1.0.9
- **Author**: [Wapply](https://github.com/Wapply)
