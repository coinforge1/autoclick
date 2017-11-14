var myLinks = [];
 
$("#right a").each( function() {
    myLinks.push( this );
});

var clickLink = function(){
	if(myLinks.length > 0){
		var url = $(myLinks.pop()).attr("href");
		console.log("clickando em " + url);
		var propaganda = window.open(url);
		setInterval(function(){propaganda.close();}, 40000);
	}else{
		console.log("finalizado!!");
	}
}

setInterval(clickLink, 42000);