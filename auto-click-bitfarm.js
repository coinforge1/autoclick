// ==UserScript==
// @name         Coin Forge
// @namespace    http://bitcofarm.com/ads
// @version      0.1
// @description  autoclick-bitcofarm
// @author       CoinForge1
// @downloadURL  https://github.com/coinforge1/autoclick/edit/master/auto-click-bitfarm.js
// @match        http://bitcofarm.com/ads
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
