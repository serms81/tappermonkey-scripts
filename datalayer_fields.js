// ==UserScript==
// @name         Show datalayer fields
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  shows the DataLayer's fields
// @author       Aleksei Elkin
// @author       Sergio Micó
// @match        https://*.rankia.com/*
// @match        https://*.rankia.com.ar/*
// @match        https://*.rankia.mx/*
// @match        https://*.rankia.cl/*
// @match        https://*.rankia.co/*
// @match        https://*.rankia.pe/*
// @match        https://*.rankia.us/*
// @match        http://localhost:3001/*
// @match        http://localhost:3000/*
// @match        http://localhost.*:3001/*
// @match        http://localhost.*:3000/*
// @grant        GM_addStyle
// @icon         https://www.rankia.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.dl-info-blk {background: teal; color: white; padding: .5em; font-family: monospace; font-size: 12px; line-height: 1.2; transition: transform .5s ease-in-out; border-collapse:unset;border-spacing:unset;}')
    GM_addStyle('.dl-info-blk {position: fixed; left: 0; bottom: 0; transform: translate(calc(-100% + 2em), calc(100% - 2em)); z-index: 99999; border-top-right-radius: .5em}')
    GM_addStyle('.dl-info-blk:hover {transform: translate(0)}')
    GM_addStyle('.dl-info-blk td {padding: .5em .3em;}')

    const dl = document.createElement('table')
    dl.classList.add('dl-info-blk')
    document.body.appendChild(dl)
    document.addEventListener('turbo:load', () => {
      const fields = dataLayer?.find(item => item[0]?.['tipo_de_contenido'])
      const getDlField = fieldName => fields[0]?.[fieldName]
      const createTR = text => {
          const tr = document.createElement('tr')
          tr.innerHTML = text
          return tr
      }
      if (fields) {
        dl.innerHTML = ''
        const items = 'blog etiqueta perfil'.split(' ')
        const isUrlId = getDlField('url_id') != 'no_especificado'
        const pageId = isUrlId ? `${getDlField('tipo_de_contenido')}#${getDlField('url_id')}` : getDlField('tipo_de_contenido')
        items.forEach(item => dl.appendChild(createTR(`<td>${item}:</td><td>${getDlField(item)}</td>`)))
        dl.appendChild(createTR(`<td>pageID:</td><td>${pageId}</td>`))
      } else {
        dl.innerHTML = 'Unable to load DataLayer info'
      }
    })
})();
