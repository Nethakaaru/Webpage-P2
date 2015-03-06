$(document).on("ready", function(){
	$(".btnViewFav").live("click", function(){
		var fav = localStorage.getItem("favMovie");
			if(fav!=null){
				$("h2").text(fav);
			}else{
				$("h2").text("Du har ingen favvofilm :/");
			}
	});
});