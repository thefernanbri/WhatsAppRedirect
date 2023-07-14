// ==UserScript==
// @name         WhatsAppRedirect
// @namespace    http://www.whatsapp.com/
// @version      1.0
// @description  Script para redirecionar sempre para o aplicativo desktop do WhatsApp / Script to always redirect to WhatsApp desktop application
// @match        http*://*.whatsapp.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAmVBMVEVHcEwo12Al1Gcgz3Ag32Al0mUl1GUl1GYl1Gcl02Ym02Yg12Agz2gl02Ul02cl02Ugz2Al0mYl1GUo02Qk02Ql1WUm02Yl0mYoz2gn0WQn0WYj0mYl1WUm1WYm0mYl02cl1GYj02Ul02Yk02Yk1GYl02Ylz2Ul0mYm0WYq1Woj02cm02Yk0WYl1GYn1GYm0mYm0mUq1WUl02a+tvrFAAAAMnRSTlMAIJ8QEGC/39/vryAg75C/EO/PQEAwgKAgcHBQYH9Q0M+Qz4Bw0DCPgDCQf4CPcKCwMIrhjmsAAAFnSURBVHhebZPploIwDIUDFEqRTVAUt9FxnH297/9wQ060tOr3g5yS25yQXGhEbcp9ART7LJ7QLUFZYCS8kXxwGqbJssTckQQnzh5zOS3jFIB2FIEGzBM5sMTM3fxDTh7LzFGchnxE1xwBrYjZAqnkfTLgi2NQwOQcu5g86hSYDXEBfEojfHRZA9UQNFISHUrySQBFLRDyYQrAKPJYAd/UnSuD2ZHHki//cpkBDSDNyWcKTQ00MR2AN7qigSF9FtRT4JVuu7QCigHM7wi4inCwG5yMAkM/3KTwCBie5guy9tJkxd+6IaEeFGjiLQYqvjUHSn5UdvoHWJRMdyfzdI0ipGS3sDrP2rWbjGzLGRmAt4PnvptxDFgnre7J4huVfSrrvJ/PZKeyREUerWYjWle0fVW4f0qwgDV6DZgCDKq+VUTqr6/49B5djCcYeKTWn1ysKdcRxQksiWPwpNxEJETrLkySkF+M/ANp8TjIb8r9nAAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL para redirecionamento
    var redirectUrl = 'whatsapp://';

    // Redirecionar para a URL especificada
    window.location.href = redirectUrl;
})();
