// ==UserScript==
// @name         Rankia Traversing
// @version      0.1
// @author       serms81
// @description  Cambia de entornos fácilmente
// @match        https://*.rankia.com/*
// @match        https://*.rankia.com.ar/*
// @match        https://*.rankia.mx/*
// @match        https://*.rankia.cl/*
// @match        https://*.rankia.co/*
// @match        https://*.rankia.pe/*
// @match        https://*.rankia.us/*
// @match        http://localhost:3001/*
// @match        http://localhost:3000/*
// @match        http://localhost.*:3000/*
// @match        http://localhost.*:3001/*
// @match        http://rnk.com:3000/*
// @match        http://rnk.ar/*
// @match        http://rnk.cl/*
// @match        http://rnk.co/*
// @match        http://rnk.mx/*
// @match        http://rnk.pe/*
// @match        http://rnk.us/*
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
    wwwar: 'https://www.rankia.com.ar',
    edgear: 'https://edge.rankia.com.ar',
    local3000ar: 'http://rnk.ar:3000',
    local3001ar: 'http://rnk.ar:3001',
    wwwcl: 'https://www.rankia.cl',
    edgecl: 'https://edge.rankia.cl',
    local3000cl: 'http://rnk.cl:3000',
    local3001cl: 'http://rnk.cl:3001',
    wwwco: 'https://www.rankia.co',
    edgeco: 'https://edge.rankia.co',
    local3000co: 'http://rnk.co:3000',
    local3001co: 'http://rnk.co:3001',
    wwwmx: 'https://www.rankia.mx',
    edgemx: 'https://edge.rankia.mx',
    local3000mx: 'http://rnk.mx:3000',
    local3001mx: 'http://rnk.mx:3001',
    wwwpe: 'https://www.rankia.pe',
    edgepe: 'https://edge.rankia.pe',
    local3000pe: 'http://rnk.pe:3000',
    local3001pe: 'http://rnk.pe:3001',
    wwwus: 'https://www.rankia.us',
    edgeus: 'https://edge.rankia.us',
    local3000us: 'http://rnk.us:3000',
    local3001us: 'http://rnk.us:3001',
  }

  GM_addStyle(`.gogogo a[target="_blank"]::after { content: ''; display: inline-block; width: 1.5em; height: 1.5em; background-repeat: no-repeat; filter: invert(); vertical-align: top; background-position: center center; background-size: 1.5em; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTM4LjI4OCAxMC4yOTdsMS40MTQgMS40MTUtMTQuOTkgMTQuOTktMS40MTQtMS40MTR6Ii8+PHBhdGggZD0iTTQwIDIwaC0ydi04aC04di0yaDEweiIvPjxwYXRoIGQ9Ik0zNSAzOEgxNWMtMS43IDAtMy0xLjMtMy0zVjE1YzAtMS43IDEuMy0zIDMtM2gxMXYySDE1Yy0uNiAwLTEgLjQtMSAxdjIwYzAgLjYuNCAxIDEgMWgyMGMuNiAwIDEtLjQgMS0xVjI0aDJ2MTFjMCAxLjctMS4zIDMtMyAzeiIvPjwvc3ZnPg==);}`)

  GM_addStyle('@media print { .core-Layout > :not(.core-Layout_MainWrapper) { display: none } }')
  GM_addStyle('@media print { .core-Layout_Main > :not(.core-Layout_MainContent) { display: none } }')

  GM_addStyle('.gogogo {position: fixed; bottom: 0; right: 0; z-index: 999999; background: green; padding: .6em 1em .6em .6em; border-top-left-radius: 1em; color: white; font-weight: bold; transform: translate(calc(100% - 1.7em), calc(100% - 1.7em)); opacity: 0.2;}')
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

  const isWwwAr = ~location.href.indexOf(domains.wwwar)
  const isWwwCom = ~location.href.indexOf(domains.www) && !~location.href.indexOf(domains.wwwar)
  const isEdgeCom = ~location.href.indexOf(domains.edge) && !~location.href.indexOf(domains.edgear)
  const isWwwCOlumbia = ~location.href.indexOf(domains.wwwco) && !~location.href.indexOf(domains.www)
  const isEdgeCOlumbia = ~location.href.indexOf(domains.edgeco) && !~location.href.indexOf(domains.edge)

  if (isWwwAr) {
    go.appendChild(createAnchor('Local', domains.local3000ar, domains.wwwar))
    go.appendChild(createAnchor('Edge', domains.edgear, domains.wwwar))
    go.appendChild(createAnchor('Local', domains.local3000ar, domains.wwwar, true))
    go.appendChild(createAnchor('Edge', domains.edgear, domains.wwwar, true))
  }
  else if (~location.href.indexOf(domains.edgear)) {
    go.appendChild(createAnchor('WWW', domains.wwwar, domains.edgear))
    go.appendChild(createAnchor('Local', domains.local3000ar, domains.edgear))
    go.appendChild(createAnchor('WWW', domains.wwwar, domains.edgear, true))
    go.appendChild(createAnchor('Local', domains.local3000ar, domains.edgear, true))
  }
  else if (~location.href.indexOf(domains.local3000ar)) {
    go.appendChild(createAnchor('WWW', domains.wwwar, domains.local3000ar))
    go.appendChild(createAnchor('Edge', domains.edgear, domains.local3000ar))
    go.appendChild(createAnchor('WWW', domains.wwwar, domains.local3000ar, true))
    go.appendChild(createAnchor('Edge', domains.edgear, domains.local3000ar, true))
  }

  if (isWwwCom) {
    go.appendChild(createAnchor('Local', domains.local3000, domains.www))
    go.appendChild(createAnchor('Edge', domains.edge, domains.www))
    go.appendChild(createAnchor('Local', domains.local3000, domains.www, true))
    go.appendChild(createAnchor('Edge', domains.edge, domains.www, true))
  }
  else if (isEdgeCom) {
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

  if (~location.href.indexOf(domains.wwwcl)) {
    go.appendChild(createAnchor('Local', domains.local3000cl, domains.wwwcl))
    go.appendChild(createAnchor('Edge', domains.edgecl, domains.wwwcl))
    go.appendChild(createAnchor('Local', domains.local3000cl, domains.wwwcl, true))
    go.appendChild(createAnchor('Edge', domains.edgecl, domains.wwwcl, true))
  }
  else if (~location.href.indexOf(domains.edgecl)) {
    go.appendChild(createAnchor('WWW', domains.wwwcl, domains.edgecl))
    go.appendChild(createAnchor('Local', domains.local3000cl, domains.edgecl))
    go.appendChild(createAnchor('WWW', domains.wwwcl, domains.edgecl, true))
    go.appendChild(createAnchor('Local', domains.local3000cl, domains.edgecl, true))
  }
  else if (~location.href.indexOf(domains.local3000cl)) {
    go.appendChild(createAnchor('WWW', domains.wwwcl, domains.local3000cl))
    go.appendChild(createAnchor('Edge', domains.edgecl, domains.local3000cl))
    go.appendChild(createAnchor('WWW', domains.wwwcl, domains.local3000cl, true))
    go.appendChild(createAnchor('Edge', domains.edgecl, domains.local3000cl, true))
  }

  if (isWwwCOlumbia) {
    go.appendChild(createAnchor('Local', domains.local3000co, domains.wwwco))
    go.appendChild(createAnchor('Edge', domains.edgeco, domains.wwwco))
    go.appendChild(createAnchor('Local', domains.local3000co, domains.wwwco, true))
    go.appendChild(createAnchor('Edge', domains.edgeco, domains.wwwco, true))
  }
  else if (isEdgeCOlumbia) {
    go.appendChild(createAnchor('WWW', domains.wwwco, domains.edgeco))
    go.appendChild(createAnchor('Local', domains.local3000co, domains.edgeco))
    go.appendChild(createAnchor('WWW', domains.wwwco, domains.edgeco, true))
    go.appendChild(createAnchor('Local', domains.local3000co, domains.edgeco, true))
  }
  else if (~location.href.indexOf(domains.local3000co)) {
    go.appendChild(createAnchor('WWW', domains.wwwco, domains.local3000co))
    go.appendChild(createAnchor('Edge', domains.edgeco, domains.local3000co))
    go.appendChild(createAnchor('WWW', domains.wwwco, domains.local3000co, true))
    go.appendChild(createAnchor('Edge', domains.edgeco, domains.local3000co, true))
  }

  if (~location.href.indexOf(domains.wwwmx)) {
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.wwwmx))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.wwwmx))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.wwwmx, true))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.wwwmx, true))
  }
  else if (~location.href.indexOf(domains.edgemx)) {
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.edgemx))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.edgemx))
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.edgemx, true))
    go.appendChild(createAnchor('Local', domains.local3000mx, domains.edgemx, true))
  }
  else if (~location.href.indexOf(domains.local3000mx)) {
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.local3000mx))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.local3000mx))
    go.appendChild(createAnchor('WWW', domains.wwwmx, domains.local3000mx, true))
    go.appendChild(createAnchor('Edge', domains.edgemx, domains.local3000mx, true))
  }

  if (~location.href.indexOf(domains.wwwpe)) {
    go.appendChild(createAnchor('Local', domains.local3000pe, domains.wwwpe))
    go.appendChild(createAnchor('Edge', domains.edgepe, domains.wwwpe))
    go.appendChild(createAnchor('Local', domains.local3000pe, domains.wwwpe, true))
    go.appendChild(createAnchor('Edge', domains.edgepe, domains.wwwpe, true))
  }
  else if (~location.href.indexOf(domains.edgepe)) {
    go.appendChild(createAnchor('WWW', domains.wwwpe, domains.edgepe))
    go.appendChild(createAnchor('Local', domains.local3000pe, domains.edgepe))
    go.appendChild(createAnchor('WWW', domains.wwwpe, domains.edgepe, true))
    go.appendChild(createAnchor('Local', domains.local3000pe, domains.edgepe, true))
  }
  else if (~location.href.indexOf(domains.local3000pe)) {
    go.appendChild(createAnchor('WWW', domains.wwwpe, domains.local3000pe))
    go.appendChild(createAnchor('Edge', domains.edgepe, domains.local3000pe))
    go.appendChild(createAnchor('WWW', domains.wwwpe, domains.local3000pe, true))
    go.appendChild(createAnchor('Edge', domains.edgepe, domains.local3000pe, true))
  }

  if (~location.href.indexOf(domains.wwwus)) {
    go.appendChild(createAnchor('Local', domains.local3000us, domains.wwwus))
    go.appendChild(createAnchor('Edge', domains.edgeus, domains.wwwus))
    go.appendChild(createAnchor('Local', domains.local3000us, domains.wwwus, true))
    go.appendChild(createAnchor('Edge', domains.edgeus, domains.wwwus, true))
  }
  else if (~location.href.indexOf(domains.edgeus)) {
    go.appendChild(createAnchor('WWW', domains.wwwus, domains.edgeus))
    go.appendChild(createAnchor('Local', domains.local3000us, domains.edgeus))
    go.appendChild(createAnchor('WWW', domains.wwwus, domains.edgeus, true))
    go.appendChild(createAnchor('Local', domains.local3000us, domains.edgeus, true))
  }
  else if (~location.href.indexOf(domains.local3000us)) {
    go.appendChild(createAnchor('WWW', domains.wwwus, domains.local3000us))
    go.appendChild(createAnchor('Edge', domains.edgeus, domains.local3000us))
    go.appendChild(createAnchor('WWW', domains.wwwus, domains.local3000us, true))
    go.appendChild(createAnchor('Edge', domains.edgeus, domains.local3000us, true))
  }

  let logout = document.createElement('a')
  logout.classList.add('goanchor')
  logout.textContent = 'Logout'
  logout.href = '/logout'
  logout.target = '_blank'
  go.appendChild(logout)

  document.body.appendChild(go)
})()
