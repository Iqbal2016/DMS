$(document).ready(function() {
	
	// enable fileuploader plugin
	var input = $('input[name="files[]"]').fileuploader({
		enableApi: true,
		addMore:false
	});
	
	$('.fileuploader').find('.fileuploader-input').find('.fileuploader-input-caption').find('span').text("Choose file to upload");
	$('.fileuploader').find('.fileuploader-input').find('.fileuploader-input-button').find('span').text("Choose File");
	
	
	// get API methods
	/*window.api = $.fileuploader.getInstance(input);
	api.enable();*/
	
	window.api = $.fileuploader.getInstance(input);
});
