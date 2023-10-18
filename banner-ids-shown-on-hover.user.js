// ==UserScript==
// @name         Banners Ids shown on hover
// @description  Banners Ids shown on hover
// @version      1
// @downloadURL  https://github.com/alekseielkin/tappermonkey-scripts/blob/main/banner-ids-shown-on-hover.user.js
// @author       Sergio Micó
// @match        https://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle('[data-google-query-id] { position: relative; background: lightgray; outline: 2px dashed darkgray }')
  GM_addStyle('[data-google-query-id]::after { content: attr(id); position: absolute; top: 2px; left: 2px; z-index: 1; color: hsl(120,50%,50%) }')
  GM_addStyle('[data-google-query-id]:hover::after { inset: 0 0 0 0; display: flex; justify-content: center; align-items: center; background-color: hsla(120,50%,25%,.9); color: hsl(120,100%,75%) }')

})();
