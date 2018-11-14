/**
 * by Tanvir- aeontanvir@gmail.com
 */

if(!window.jQuery){window.location = "/?desturl=" + window.location.href;}

$('#company_code').change(function(){
	$(this).val($(this).val().toUpperCase());
});  



$('#select_country').on('change', function(){
	if($(this).val() =="-1"){
		$("input[name='country']").val('');
		$("#local_currcy").val('');
	}else{
		$("input[name='country']").val($("#select_country option:selected").text());
		
		var countryName = $(this).val();
		
		$.ajax({
			url : "hrm/ed/company/country?name="+ countryName,
				success : function(data) {
					$("#local_currcy").val(data.country.localCurrency);
				}
					
		});
		
		
		$("#local_currcy").val($("#select_country option:selected").text());
	}
});



/*--------------------financial------------------------*/
//-------------------------------------------------------------------------------------//
$("#accyr_start_mon").on("change", function(){
	var a = parseInt($("#fisyear").val()); //alert(a);		
	$("#q1_start").datepicker("update", new Date(a+"-"+$("#accyr_start_mon").val()+"-"+01)); 
	
	var todayDate = $("#q1_start").val();
    var today = new Date(todayDate);
    var onejan = new Date(today.getFullYear(),0,1);
    var dayOfYear = ((today - onejan +1)/86400000);
    var weekOfYear = Math.ceil(dayOfYear/7);   
    //return weekOfYear;
    $("#open_week").val(weekOfYear); 
});

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val()); //alert(a);		
	$("#q1_start").datepicker("update", new Date(a+"-"+$("#accyr_start_mon").val()+"-"+01)); 
	
	var todayDate = $("#q1_start").val();
    var today = new Date(todayDate);
    var onejan = new Date(today.getFullYear(),0,1);
    var dayOfYear = ((today - onejan +1)/86400000);
    var weekOfYear = Math.ceil(dayOfYear/7);   
    //return weekOfYear;
    $("#open_week").val(weekOfYear); 
});
//-------------------------------------------------------------------------------------//

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a+1;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a +"-"+b);
	$("#next_yr_start").datepicker("update", new Date(b+"-"+c+"-"+01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a+1;		
	$("#next_yr_start").datepicker("update", new Date(b+"-"+$("#fismonths").val()+"-"+01)); 
});
//-------------------------------------------------------------------------------------//

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a +"-"+b);
	$("#open_day").datepicker("update", new Date(b+"-"+c+"-"+01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a;		
	$("#open_day").datepicker("update", new Date(b+"-"+$("#fismonths").val()+"-"+01)); 
});
//-------------------------------------------------------------------------------------//
$("#accyr_start_mon").on("change", function(){
	var a = $("#accyr_start_mon").val(); 	
	$("#open_mon").val(a);
});
//------------------------------------------------------------------------------------//
$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a+1;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a +"-"+b);
	$("#next_yr_start").datepicker("update", new Date(b+"-"+c+"-"+01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a+1;		
	$("#next_yr_start").datepicker("update", new Date(b+"-"+$("#fismonths").val()+"-"+01)); 
});



// field level validation
$("#company_code").on('keypress', function (event) {
	var field = this;
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       var error = company_company_code_special_char_error_msg;
       $(field).closest(".form-group").find("label").find("span").remove();
       $(field).closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
       InitErrorChange();
       $(".alert").html(error);
        $(".alert").removeClass("hidden");
       return false;
    }
    $(".alert").addClass("hidden");
 });




$("#company_code").bind('paste', function() {
	var field = this;
    setTimeout(function() {
        var data = $(field).val();
        var dataFull = data.replace(/[^\w]/gi, '');
        $(field).val(dataFull);
    });

});

function validateStepOne(){
	
	var itemCode    =$("#company_code").val().trim();
	var itemName    =$("#company_name").val();
	var itemPhone   = $("#phone").val();
	var itemMobile  = $("#mobile").val();
	var itemWebsite = $("#website").val();
	var itemEmail   = $("#email").val();
	SyncOptionText();
	
	var error = "";
	var result = CheckRequired("#step-1");
	var expressionWebSite 		= /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var patternWeb      = new RegExp(expressionWebSite);
	var resWeb          = patternWeb.test(itemWebsite);
	var patternEmail    = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var resEmail        = patternEmail.test(itemEmail);
	var patternPhone    = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
	var resPhone        = patternPhone.test(itemPhone);
	var patternMobile   = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");
	var resMobile       = patternMobile.test(itemMobile);
	
	$(function() {
	    $.fn.selectRange = function(start, end) {
	        return this.each(function() {
	            var self = this;
	            if (self.setSelectionRange) {
	                self.focus();
	                self.setSelectionRange(start, end);
	            } else if (self.createTextRange) {
	                var range = self.createTextRange();
	                range.collapse(true);
	                range.moveEnd('character', end);
	                range.moveStart('character', start);
	                range.select();
	            }
	        });
	    };
	
	    if(itemCode==""){
	        $('#company_code').selectRange(0, 0);}
	    else if(itemName==""){
	        $('#company_name').selectRange(0, 0);}
	    else if(resEmail==false){
	        $('#email').selectRange(0, 0);} 
	    else if(resWeb==false){
	        $('#website').selectRange(0, 0);} 
	    
	    
	}); 


	if ($("#select_country").val() =="-1") {
		error += company_country_select_error_msg + "<br>";
		result = false;
	} 
		
	if ($("#company_code").val()=="") {
		error += company_company_code_empty_error_msg + "<br>";
		result = false;
	}else{
		if($("#company_code").val().length > 10){
			error += company_company_code_max_length_error_msg + "<br>";
			result = false;
		}
	}

	if(itemCode!==""){
	   var spaceCheckCompanyCode = itemCode.indexOf(' ') >= 0;
	   if(spaceCheckCompanyCode){
		   error += company_company_code_space_error_msg + "<br>";
			result = false; 
	   }
	}
	if ($("#company_name").val()=="") {
		error += company_company_name_empty_error_msg + "<br>";
		result = false;
		
	}else{
		if($("#company_name").val().length > 255){
			error += company_company_name_max_length_error_msg + "<br>";
			result = false;
		}
	}
		

	if(itemPhone!==""){
		var spaceCheckPhone = itemPhone.indexOf(' ') >= 0;
		if(spaceCheckPhone){
			error += company_phone_space_error_msg + "<br/>";
			result = false;
		
		} 
	
		
		if(resPhone==false){
			error += company_phone_valid_error_msg + "<br/>";
			result = false;
		} 
			
	}

	/*

	if(itemMobile!==""){
		var spaceCheckMobile = itemMobile.indexOf(' ') >= 0;
		if(spaceCheckMobile){
			   error += company_mobile_space_error_msg + "<br/>";
			   result = false;
			
		}
	
		if(resMobile==false)
		{
		   error += company_mobile_valid_error_msg + "<br/>";
			result = false;
	   } 
			
	}

	*/
	if(itemEmail!==""){
    	
    	var spaceCheck = itemEmail.indexOf(' ') >= 0;
    	//alert("space check is:"+ spaceCheck);
    	if(spaceCheck){
    		   error += company_email_space_error_msg + "<br/>";
    		   result = false;
    		
    	}
    	
    	if(resEmail == false)
		{
		   error += company_email_valid_error_msg + "<br/>";
		   result = false;
	   } 
    	
    	
    }
	    
	if(itemWebsite!==""){
	
		var spaceCheck = itemWebsite.indexOf(' ') >= 0;
		//alert("space check is:"+ spaceCheck);
		if(spaceCheck){
			   error += company_website_space_error_msg  + "<br/>";
			   result = false;
		    		
		}
	    
	   if(resWeb ==false ){
		   error += company_website_valid_error_msg + "<br/>";
		   result = false;
	   }
	  
	}
		
	
	if (error !== "") {
			InitErrorChange();
			$(".alert").html(error);
			$(".alert").removeClass("hidden");
			return false;
	}else{
		$(".alert").addClass("hidden");
		return true;
	}
	

}

function validateStepTwo(){
	var error = "";
	var result = CheckRequired("#step-2");
	
	if ($("#week_start_day").val()=="-1") {
		error += company_week_start_day_select_error_msg + "<br/>";		
	} 

	if ($("#accyr_start_mon").val() === "-1") {
		error += company_accyr_start_mon_select_error_msg + "<br>";		
		}

	if ($("#fismonths").val() === "-1") {
		error += company_fismonths_select_error_msg + "<br>";		
		}

	if ($("#fisyear").val() === "-1") {
		error += company_fisyear_select_error_msg + " <br>";		
		}

	if ($("#func_currcy").val() === "-1") {
		error += company_func_currcy_empty_error_msg  + "<br>";		
		}

	if(error !== "" && !result){
		InitErrorChange();
		$(".alert").html(error);
		$(".alert").removeClass("hidden");
		return false;
	}else{
		$(".alert").addClass("hidden");
		return true;
	}
}


function validateStep(stepNumber){
    $(".alert").addClass("hidden");
	var result = true;
	
	if(stepNumber==1){
		result= validateStepOne();
	}
	if(stepNumber==2){
		result= validateStepTwo();
	}

	//console.log("1::::::::::::---"+result);
	if (!result) {
		ShowErrorMsg(invalid_show_error_msg);
			InitErrorChange();
			$(".alert").removeClass("hidden");
	}

	syncPreview();

	//console.log("2::::::::::::---"+result);
	return result;

}


function syncPreview(){

	$.each($("[id^=preview_]"), function(i, item){
		var sourceId = $(item).prop("id").substring(8);
		var source = $("#" + sourceId);
		if (source && source.prop("type")){
			if(source.prop("type").toLowerCase() == "text") {
				$(item).text(source.val());
			}
			if(source.prop("type").toLowerCase() == "hidden") {
				$(item).text(source.val());
			}
			else if(source.prop("type").toLowerCase() == "select-one") {
				$(item).text(source.find("option:selected").text());
			}
			else if(source.prop("type").toLowerCase() == "checkbox") {
				$(item).text(source.is(":checked")? "Yes" : "No");
			}

		}
		
		if (source.is("textarea")) {
			$(item).text(source.val());
	    }
	});
	
	if($(".photo .fileinput-preview img").length > 0){
		$(".photo4 img").prop("src", $(".photo .fileinput-preview img").prop("src" ));
	}
	else{
		$(".photo4 img").prop("src", $(".photo .fileinput-new img").prop("src" ));
	}
  	
}
