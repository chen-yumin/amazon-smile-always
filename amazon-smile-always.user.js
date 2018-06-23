// ==UserScript==
// @name         Amazon Smile Always
// @namespace    https://github.com/chen-yumin/amazon-smile-always
// @version      1.0
// @description  Amazon Smile Always redirects any `://www.amazon.com/*` to `://smile.amazon.com/*`.
// @author       Chen Yumin
// @match        *://www.amazon.cn/*
// @match        *://www.amazon.in/*
// @match        *://www.amazon.co.jp/*
// @match        *://www.amazon.com.sg/*
// @match        *://www.amazon.fr/*
// @match        *://www.amazon.de/*
// @match        *://www.amazon.it/*
// @match        *://www.amazon.nl/*
// @match        *://www.amazon.es/*
// @match        *://www.amazon.co.uk/*
// @match        *://www.amazon.ca/*
// @match        *://www.amazon.com.mx/*
// @match        *://www.amazon.com/*
// @match        *://www.amazon.com.au/*
// @match        *://www.amazon.com.br/*
// @grant        none
// @downloadURL  https://github.com/chen-yumin/amazon-smile-always/raw/master/amazon-smile-always.user.js
// ==/UserScript==

(function () {
    'use strict';

    window.location.href = window.location.href.replace('://www.amazon.', '://smile.amazon.');
})();