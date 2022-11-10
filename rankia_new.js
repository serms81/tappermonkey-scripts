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
    creatLinksLocalMasEdge(domains.local3000ar, domains.edgear, domains.wwwar)
  }
  else if (~location.href.indexOf(domains.edgear)) {
    creatLinksWwwMasLocal(domains.wwwar, domains.local3000ar, domains.edgear)
  }
  else if (~location.href.indexOf(domains.local3000ar)) {
    creatLinksWwwMasEdge(domains.wwwar, domains.edgear, domains.local3000ar)
  }

  if (isWwwCom) {
    creatLinksLocalMasEdge(domains.local3000, domains.edge, domains.www)
  }
  else if (isEdgeCom) {
    creatLinksWwwMasLocal(domains.www, domains.local3000, domains.edge)
  }
  else if (~location.href.indexOf(domains.local3000)) {
    creatLinksWwwMasEdge(domains.www, domains.edge, domains.local3000)
  }

  if (~location.href.indexOf(domains.wwwcl)) {
    creatLinksLocalMasEdge(domains.local3000cl, domains.edgecl, domains.wwwcl)
  }
  else if (~location.href.indexOf(domains.edgecl)) {
    creatLinksWwwMasLocal(domains.wwwcl, domains.local3000cl, domains.edgecl)
  }
  else if (~location.href.indexOf(domains.local3000cl)) {
    creatLinksWwwMasEdge(domains.wwwcl, domains.edgecl, domains.local3000cl)
  }

  if (isWwwCOlumbia) {
    creatLinksLocalMasEdge(domains.local3000co, domains.edgeco, domains.wwwco)
  }
  else if (isEdgeCOlumbia) {
    creatLinksWwwMasLocal(domains.wwwco, domains.local3000co, domains.edgeco)
  }
  else if (~location.href.indexOf(domains.local3000co)) {
    creatLinksWwwMasEdge(domains.wwwco, domains.edgeco, domains.local3000co)
  }

  if (~location.href.indexOf(domains.wwwmx)) {
    creatLinksLocalMasEdge(domains.local3000mx, domains.edgemx, domains.wwwmx)
  }
  else if (~location.href.indexOf(domains.edgemx)) {
    creatLinksWwwMasLocal(domains.wwwmx, domains.local3000mx, domains.edgemx)
  }
  else if (~location.href.indexOf(domains.local3000mx)) {
    creatLinksWwwMasEdge(domains.wwwmx, domains.edgemx, domains.local3000mx)
  }

  if (~location.href.indexOf(domains.wwwpe)) {
    creatLinksLocalMasEdge(domains.local3000pe, domains.edgepe, domains.wwwpe)
  }
  else if (~location.href.indexOf(domains.edgepe)) {
    creatLinksWwwMasLocal(domains.wwwpe, domains.local3000pe, domains.edgepe)
  }
  else if (~location.href.indexOf(domains.local3000pe)) {
    creatLinksWwwMasEdge(domains.wwwpe, domains.edgepe, domains.local3000pe)
  }

  if (~location.href.indexOf(domains.wwwus)) {
    creatLinksLocalMasEdge(domains.local3000us, domains.edgeus, domains.wwwus)
  }
  else if (~location.href.indexOf(domains.edgeus)) {
    creatLinksWwwMasLocal(domains.wwwus, domains.local3000us, domains.edgeus)
  }
  else if (~location.href.indexOf(domains.local3000us)) {
    creatLinksWwwMasEdge(domains.wwwus, domains.edgeus, domains.local3000us)
  }

  function creatLinksLocalMasEdge(local, edge, currUrl) {
    go.appendChild(createAnchor('Local', local, currUrl))
    go.appendChild(createAnchor('Edge', edge, currUrl))
    go.appendChild(createAnchor('Local', local, currUrl, true))
    go.appendChild(createAnchor('Edge', edge, currUrl, true))
  }

  function creatLinksWwwMasEdge(www, edge, currUrl) {
    go.appendChild(createAnchor('WWW', www, currUrl))
    go.appendChild(createAnchor('Edge', edge, currUrl))
    go.appendChild(createAnchor('WWW', www, currUrl, true))
    go.appendChild(createAnchor('Edge', edge, currUrl, true))
  }

  function creatLinksWwwMasLocal(www, local, currUrl) {
    go.appendChild(createAnchor('WWW', www, currUrl))
    go.appendChild(createAnchor('Local', local, currUrl))
    go.appendChild(createAnchor('WWW', www, currUrl, true))
    go.appendChild(createAnchor('Local', local, currUrl, true))
  }

  let logout = document.createElement('a')
  logout.classList.add('goanchor')
  logout.textContent = 'Logout'
  logout.href = '/logout'
  logout.target = '_blank'
  go.appendChild(logout)

  document.body.appendChild(go)
})()
