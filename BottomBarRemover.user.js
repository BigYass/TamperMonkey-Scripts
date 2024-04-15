// ==UserScript==
// @name         BottomBarRemover
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Remove "you are responsable" bottom bar
// @author       BigYass
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==



(function() {
  'use strict';

  console.log("[BBR] Starting...");

  let interval_id = null
  let interval_left = 10

  const removeBar = () => {
    if (interval_left-- <= 0) {
      clearInterval(interval_id)
      return
    }

    const bottom_bars = document.querySelectorAll("ytd-permission-role-bottom-bar-renderer")

    let removed = 0

    bottom_bars.forEach((bar) => {
      bar.remove()
      removed++
    });

    if (removed === 0) {
      console.log("[BBR] No bottom bar found... Trying again (" + interval_left + " left)")
    } else {
      console.log("[BBR] " + removed + " bars removed!")
      clearInterval(interval_id)
    }
  };

  interval_id = setInterval(removeBar, 1000)
})();