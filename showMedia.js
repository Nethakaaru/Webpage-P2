$(document).on("ready", function(){
	$(".btnShowPhoto").live("click", function(){
		
		$.ajax({
		 type: "GET",
        dataType: "json",
        url: "server.php?action=getFiles&type=photo"
		
		}).success(function(data){
		
			var obj = jQuery.parseJSON(JSON.stringify(data));
			 console.log(data);
			 	$( "#myMedia" ).empty();
			 for(var i=0; i<obj.files.length;i++){
					$( "#myMedia" ).append( "<figure> <img src=" + obj.files[i].path + " alt=" + obj.files[i].title + "height="+500+" width="+500 +  "</img>" + 
					"<figcaption>" + obj.files[i].title  + " </figcaption> </img> </figure>" );
			}
		}).error(function(data){
			console.log(data.status);
			alert("Det gick inte att hämta någon fil");
		});	
	});
	
	$(".btnShowAudio").live("click", function(){
		
		$.ajax({
		 type: "GET",
        dataType: "json",
        url: "server.php?action=getFiles&type=audio"
		
		}).success(function(data){
		
			var obj = jQuery.parseJSON(JSON.stringify(data));
			 console.log(data);
			 
			 $( "#myMedia" ).empty();
			 for(var i=0; i<obj.files.length;i++){		
			 var file = obj.files[i].path.substring(6);
			 alert(file);
					$( "#myMedia" ).append( "<article> <audio controls> <source src=" +
					"http://ddwap.mah.se/manager/index.php?get_action=open_file&repository_id=1&file=%2Faudio%2F" + file
					+ "><p>" + obj.files.title + "</p>Your browser does not support the audio tag.</audio></article>" );
			}
		}).error(function(data){
			console.log(data.status);
			alert("Det gick inte att hämta någon fil");
		});	
	});
	
	$(".btnShowVideo").live("click", function(){
		
		$.ajax({
		 type: "GET",
        dataType: "json",
        url: "server.php?action=getFiles&type=video"
		
		}).success(function(data){
		
			var obj = jQuery.parseJSON(JSON.stringify(data));
			 console.log(data);
			 	$( "#myMedia" ).empty();
			 for(var i=0; i<obj.files.length;i++){
					$( "#myMedia" ).append( "<article> <video width="+320+" height="+240+" controls> <source src=" + 
					obj.files[i].path +"><p>" + obj.files.title + "</p>Your browser does not support the video tag.</video></article>" );
			}
		}).error(function(data){
			console.log(data.status);
			alert("Det gick inte att hämta någon fil");
		});	
	});
});