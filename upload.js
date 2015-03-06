$(document).ready(function() {

	$('#myForm').live("submit", function(e){
	
		
		
		$('#myForm').ajaxSubmit({ 

		uploadProgress:function(event,position, total,percentComplete)
		{
		
        var percentVal = percentComplete + '% klart';
		$(".percent").text(percentVal);
    },
		complete: function(response)
    {
		var obj = jQuery.parseJSON(response.responseText);
		
		if(obj==null){
		alert("Något gick snett, testa en fil med annat format tex:.mp4 om det är en video");
		}else{
		console.log(obj);	
			alert(obj.message);
			if(obj.success==true){
				$("input").wrap('<form>').parent('form').trigger('reset');
				$("input").unwrap();
				$("h3").text("");
			}
	}
    }		
		}); 
		e.preventDefault();
	});
});