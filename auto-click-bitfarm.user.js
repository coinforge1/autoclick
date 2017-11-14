// ==UserScript==
// @name         autoclick
// @namespace    https://github.com/coinforge1/autoclick
// @version      1
// @description  Realiza o precesso de clicks automáticamente
// @author       CoinForge1
// @match        http://bitcofarm.com/ads
// @match        http://bitcomine.net/ads
// @match        http://ethero.net/ads
// @updateURL    https://github.com/coinforge1/autoclick/raw/master/auto-click-bitfarm.js
// @downloadURL  https://github.com/coinforge1/autoclick/raw/master/auto-click-bitfarm.js
// @supportURL   https://github.com/coinforge1/autoclick/issues
// @connect      *
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    var myLinks = [];

    $("#right a").each( function() {
        if($(this).find(".disabled_pbx").length === 0){
            myLinks.push( this );
        }
    });

    var totalLinks = myLinks.length;

    var clickLink = function(){
        if(myLinks.length > 0){
            var rank = totalLinks - myLinks.length;
            var url = $(myLinks.pop()).attr("href");
            console.log(rank + " de " + totalLinks + " :: clickando em " + url);
            var propaganda = window.open(url);
            setInterval(function(){propaganda.close();}, 40000);
        }else{
            console.log("finalizado!!");
        }
    };

    console.log("Començando a clicação.");
    setInterval(clickLink, 42000);
})();
