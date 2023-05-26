// ==UserScript==
// @name         Rankia Talamoh banners
// @version      0.3
// @author       aleksElkin
// @description  muestra son banners
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
// @match        http://localhost.com:3001/*
// @match        http://localhost.com:3000/*
// @match        http://localhost.ar/*
// @match        http://localhost.cl/*
// @match        http://localhost.co/*
// @match        http://localhost.mx/*
// @match        http://localhost.pe/*
// @match        http://localhost.us/*
// @grant        GM_addStyle
// @icon         https://www.rankia.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('[id|=boton],[id|=megabanner],[id|=robapaginas],[id|=sky],[id|=cintillo]{display:block!important}[id|=cintillo]::before,[id|=boton]::before,[id|=megabanner]::before,[id|=robapaginas]::before,[id|=sky]::before{content:attr(id);font-size:18px;color:#ff4500;position:absolute;margin:4px 6px}[id|=cintillo] [id^=google_ads],[id|=boton] [id^=google_ads],[id|=megabanner] [id^=google_ads],[id|=robapaginas] [id^=google_ads],[id|=sky] [id^=google_ads]{outline:orangered solid 2px;outline-offset:-2px;background-color:#ffdab9;height:100%!important}[id|=boton][id*=x600]>[id^=google_ads],[id|=megabanner][id*=x600]>[id^=google_ads],[id|=robapaginas][id*=x600]>[id^=google_ads],[id|=sky][id*=x600]>[id^=google_ads]{height:600px!important}')
})();
