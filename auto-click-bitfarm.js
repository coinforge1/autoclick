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