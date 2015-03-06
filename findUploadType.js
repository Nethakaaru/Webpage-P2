 $( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text();
    });
	if(str=="Foto"){
	 $( ".btnUpload" ).attr("accept", "image/*");
	 $( ".btnUpload" ).attr("capture", "camera");
	}
	 else if(str=="Video"){
	 $( ".btnUpload" ).attr("accept", "video/*");
	 $( ".btnUpload" ).attr("capture", "camcorder");
	}
	 else if(str=="Ljud"){
	 $( ".btnUpload" ).attr("accept", "audio/*");
	 $( ".btnUpload" ).attr("capture", "microphone");
	}
   
  })
  .change();