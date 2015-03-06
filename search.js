$(document).on("ready", function(){

 for(var i=0; i<10;i++){
 	$(".btnFav"+i+"").live("click", function(){
				localStorage.setItem("favMovie",$(this).prev().prev().text());
				alert("'" + $(this).prev().prev().text() + "' är nu sparad som din favorit film");
	});	
 }
	
			
	$(".btnSearch").live("click", function(){
	var title = document.getElementById("textBoxTitle").value;
		$.ajax({
		 type: "GET",
        dataType: "json",
        url: "http://www.omdbapi.com/?s=" + title,
		
		}).success(function(data){
		
			var obj = jQuery.parseJSON(JSON.stringify(data));
			 console.log(data);
				$( "#movies" ).empty();
			 for(var i=0; i<obj.Search.length;i++){
					$( "#movies" ).append( "<article id='movie'>  <h2 class='hTitle'>" + obj.Search[i].Title + "</h2> <h3> " + obj.Search[i].Year + "</h3> <button class = 'btnFav"+i+"' type='button'>Favoritmarkera film</button> </article>");
			
			}
		 
		}).error(function(data){
		
			console.log(data.status);
			alert("Det gick inte att hämta någon film");
		});
	});
});