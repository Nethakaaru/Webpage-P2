$(document).on("ready", function(){
	$("nav a").on("click", function(e){
		e.preventDefault();
		var page = $(this).attr("href");
		$.ajax({
			url: page,
			timeout: 5000,
			type: "GET",
			data: {name: "Nethakaaru"}
		}).done(function(data){
			$("#content").html(data);
		}).fail(function(data){
			console.log(data.status);
			alert("Det gick inte att hämta vald sida, kolla din internet anslutning.");
		});
	});
});