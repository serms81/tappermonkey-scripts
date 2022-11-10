// ==UserScript==
// @name         Rankia Traversing
// @version      0.1
// @author       serms81
// @description  Cambia de entornos fácilmente
// @match        https://*.rankia.com/*
// @match        https://*.rankia.mx/*
// @match        http://localhost:3001/*
// @match        http://localhost:3000/*
// @match        http://localhost.*:3000/*
// @match        http://localhost.*:3001/*
// @grant        GM_addStyle
// @icon         https://www.rankia.com/favicon.ico
// ==/UserScript==

(function() {
  'use strict'

  const domains = {
    www: 'https://www.rankia.com',
    edge: 'https://edge.rankia.com',
    local3000: 'http://localhost:3000',
    local3001: 'http://localhost:3001',
    wwwmx: 'https://www.rankia.mx',
    edgemx: 'https://edge.rankia.mx',
    local3000mx: 'http://localhost.mx:3000',
    local3001mx: 'http://localhost.mx:3001'
  }

  GM_addStyle(`.gogogo a[target="_blank"]::after { content: ''; display: inline-block; width: 1.5em; height: 1.5em; background-repeat: no-repeat; filter: invert(); vertical-align: top; background-position: center center; background-size: 1.5em; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTM4LjI4OCAxMC4yOTdsMS40MTQgMS40MTUtMTQuOTkgMTQuOTktMS40MTQtMS40MTR6Ii8+PHBhdGggZD0iTTQwIDIwaC0ydi04aC04di0yaDEweiIvPjxwYXRoIGQ9Ik0zNSAzOEgxNWMtMS43IDAtMy0xLjMtMy0zVjE1YzAtMS43IDEuMy0zIDMtM2gxMXYySDE1Yy0uNiAwLTEgLjQtMSAxdjIwYzAgLjYuNCAxIDEgMWgyMGMuNiAwIDEtLjQgMS0xVjI0aDJ2MTFjMCAxLjctMS4zIDMtMyAzeiIvPjwvc3ZnPg==);}`)

  GM_addStyle('@media print { .core-Layout > :not(.core-Layout_MainWrapper) { display: none } }')
  GM_addStyle('@media print { .core-Layout_Main > :not(.core-Layout_MainContent) { display: none } }')

  GM_addStyle('.gogogo {position: fixed; bottom: 0; right: 0; z-index: 999999; background: green; padding: .4em .8em .4em .4em; border-top-left-radius: 1em; color: white; font-weight: bold; transform: translate(calc(100% - 1.2em), calc(100% - 1.2em)); opacity: 0.2;}')
  GM_addStyle('.gogogo::before { content: "+"; display: inline-block; margin-top: -.4em; margin-right: 1em; vertical-align: top;}')
  GM_addStyle('.gogogo:hover {transform: translate(0, 0); opacity: 1}')
  GM_addStyle('.gogogo a {color: inherit; margin-right: 1em;}')
  let go = document.createElement('div')
  go.classList.add('gogogo')

  function createAnchor (label, domain, counterDomain, blank) {
    let anchor = document.createElement('a')
    anchor.classList.add('goanchor')
    anchor.textContent = label
    anchor.href = location.href.replace(counterDomain, domain)
    anchor.target = !!blank ? '_blank' : '_self'
    return anchor
  }

  let anchor = document.createElement('a')
  anchor.classList.add('goanchor')
  anchor.textContent = 'This'
  anchor.href = location.href
  anchor.target = '_blank'
  go.appendChild(anchor)

  if (~location.href.indexOf(domains.www)) {
    go.appendChild(createAnchor('Local', domains.local3000, domains.www))
    go.appendChild(createAnchor('Edge', domains.edge, domains.www))
    go.appendChild(createAnchor('Local', domains.local3000, domains.www, true))
    go.appendChild(createAnchor('Edge', domains.edge, domains.www, true))
  }
  else if (~location.href.indexOf(domains.edge)) {
    go.appendChild(createAnchor('WWW', domains.www, domains.edge))
    go.appendChild(createAnchor('Local', domains.local3000, domains.edge))
    go.appendChild(createAnchor('WWW', domains.www, domains.edge, true))
    go.appendChild(createAnchor('Local', domains.local3000, domains.edge, true))
  }
  else if (~location.href.indexOf(domains.local3000)) {
    go.appendChild(createAnchor('WWW', domains.www, domains.local3000))
    go.appendChild(createAnchor('Edge', domains.edge, domains.local3000))
    go.appendChild(createAnchor('WWW', domains.www, domains.local3000, true))
    go.appendChild(createAnchor('Edge', domains.edge, domains.local3000, true))
  }

  if (~location.href.indexOf(domains.wwwmx)) {
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.wwwmx))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.wwwmx))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.wwwmx, true))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.wwwmx, true))
  }
  else if (~location.href.indexOf(domains.edgemxmx)) {
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.edgemx))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.edgemx))
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.edgemx, true))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.edgemx, true))
  }
  else if (~location.href.indexOf(domains.local3000mxmx)) {
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.local3000mx))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.local3000mx))
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.local3000mx, true))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.local3000mx, true))
  }

  let logout = document.createElement('a')
  logout.classList.add('goanchor')
  logout.textContent = 'Logout'
  logout.href = '/logout'
  logout.target = '_blank'
  go.appendChild(logout)

  document.body.appendChild(go)
})()
