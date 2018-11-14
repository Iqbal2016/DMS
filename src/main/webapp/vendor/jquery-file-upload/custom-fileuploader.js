$(document).ready(function() {
	
	// enable fileuploader plugin
	var input = $('input[name="files"]').fileuploader({
		enableApi: true,
		addMore:true
	});
	
	// get API methods
	/*window.api = $.fileuploader.getInstance(input);
	api.enable();*/
	
	window.api = $.fileuploader.getInstance(input);
});



var searchGAttach = function(el){
	var transaction_type_id = $("#transaction_type_id").val();
	//alert(transaction_type_id);
	ShowModal("fin/gl/trxtype/index/"+transaction_type_id+"?actioncallback=loadSearchGAttachment");
};

function loadSearchGAttachment(att){ debugger;
	event.preventDefault();
	var desc = $(".fileuploader-item");
	var count = $("#count_att").val();
	if (desc.length>count) {
		$("#count_att").val(desc.length);
		$.each(desc, function(i, el){
			if(((desc.length)-1) == i){
				$(el).prepend("<p style='margin-left:50px; width:60%'>"+att.attachmentName+"</p><input type='hidden'readonly='readonly' value='"+att.attachmentName+"' id='description_att' class='description_att' name='description_att[]' style='margin-left:50px; width:60%'/><input type='hidden' name='att_id[]'/>");
			}
		});
	}else{
		$(el).prepend("<input type='hidden'readonly='readonly' value='' id='description_att' class='description_att' name='description_att[]' style='margin-left:50px; width:60%'/><input type='hidden' name='att_id[]'/>");
	}
	
	HideModal('search-modal');	
}

