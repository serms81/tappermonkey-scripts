// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  calc horas de managedo!
// @author       You
// @match        https://managedo.rankia.com/mis-imputaciones
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rankia.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  setTimeout(() => {
    const horasBlocks = document.querySelectorAll('[data-mappedto="horas"] span')

    let result = 0;

    horasBlocks.forEach( item => {result += parseFloat(item.innerText)})

    console.log('### test:', document.body)

    GM_addStyle('.summsumm {position: fixed; bottom: 0; left: 0; z-index: 999999; background: green; padding: .8em 1.3em; border-top-right-radius: 1em; color: white;}')

    const summ = document.createElement('div')
    summ.textContent = result
    summ.classList.add('summsumm')
    document.body.appendChild(summ)
  }, 1000)

})();
