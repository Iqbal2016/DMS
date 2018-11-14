
//InitDataTable("#objectList", 2);

$("#business_pro_code").prop('maxlength', '10');
$("#business_pro_name").prop('maxlength', '255');


$("[title]").attr("data-toggle","tooltip");
$("[title]").attr("data-placement","top");
$('[data-toggle="tooltip"]').tooltip();

$("#btnEmpRole").on("click",function() {
	ShowModal("hrm/ed/employee/quicksearchemployeeshow/?action_type_code=SELECT&actioncallback=loadEmpRole");
});

function loadEmpRole(empdata) {
	var emp = JSON.parse(unescape(empdata));
//		event.preventDefault();
	$("#role_code").val(emp.roleCode);
	$("#role_name").val(emp.roleName);
	$("#emp_code").val(emp.empCode);
	$("#emp_name").val(emp.empName);
	$("#rm_code").val(emp.rmCode);
	$("#rm_name").val(emp.rmName);
	$("#rm_desig").val(emp.rmDesig);
	$("#rm_username").val(emp.rmUsername);
	$("#rm_mobile").val(emp.rmMobile);
	$("#rm_email").val(emp.rmEmail);
	
	HideModal('search-modal');

	if($("#role_name").val() !="") {
        $("#role_name").closest(".form-group").find("label").find("span").remove();
        $("#role_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-green fa fa-check"></span>');
        $(".alert").addClass("hidden");
    }

	if($("#emp_name").val() !="") {
        $("#emp_name").closest(".form-group").find("label").find("span").remove();
        $("#emp_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-green fa fa-check"></span>');
        $(".alert").addClass("hidden");
    }

}

$("#btnObjectType").on("click",function() {
	ShowModal("sys/aa/objecttype/quicksearchobjecttypeshow/?action_type_code=SELECT&actioncallback=loadObjectType");
});

function loadObjectType(objActType) {
	var obj = JSON.parse(unescape(objActType)); 
	$("#suite_code").val(obj.suiteCode);
	$("#suite_full_name").val(obj.suiteFullName);
	$("#mod_code").val(obj.modCode);
	$("#mod_full_name").val(obj.modFullName);
	$("#object_type_name").val(obj.objectTypeName);
	$("#action_type_code").val("CREATE");
	
	var suiteCode 	  	= 	obj.suiteCode;	
	var suiteFullName 	= 	obj.suiteFullName;		
	var modCode 	  	= 	obj.modCode;	
	var ModeFullName  	=  	obj.modFullName;
	var objTypeCode		=	obj.objectTypeCode;
	var objTypeName 	= 	obj.objectTypeName;	
	var objActionCode  	= 	"CREATE";
	var objActionName  	= 	"Create";
	
	if($("#suite_code").val() !="") {
        $("#suite_code").closest(".form-group").find("label").find("span").remove();
        $("#suite_code").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-green fa fa-check"></span>');
        $(".alert").addClass("hidden");
    }
	
	
	var tatInForm = $("#tat").val();
	var tat = 0;
	$.ajax({
		url: "/tna/wf/workflowmanager/loadcorrentobjectsla?object_type_code=" + objTypeCode +"&action_type_code="+objActionCode, 
		success:function(data){
			var abc = eval(data); 

			var oListWF = $("#objectListFromWorkflow tbody").html("");
			for (var i = 0; i < abc.length; i++) {
				var tListWF = $(oListWF[i]).find("#tat_" +i).attr("value");
				tat	+= abc[i].tat; 
				var sla	= abc[i].sla;
				var wf = abc[i].workflowCode;
				
				if(tListWF == wf){
//					var msg = "";
					ShowErrorMsg('${data.busProcessObjectTypeErrorMsg}');
//					$(".alert").html(msg);
//					$(".alert").removeClass("hidden");
					return false;
				}
				
				var html = '<tr>'
								+ '<td>'
								+ '<input name="tat[]" type="text" id="tat_'+i+'" class="view readonly" value="' + tat + '" />'				
								+ '</td>'
								+ '<td>'
								+ '<input name="sla[]" type="text" id="sla_'+i+'" class="view readonly" value="' + sla + '" />'
								+ '</td>' +
							'</tr>'; 
				
			$("#objectListFromWorkflow tbody").append(html);
			$("tr").removeClass("current-row");			
			$("#objectListFromWorkflow").modal("hide");
			//$("#tat_0").val(tat);
			
			}
			var rows = $("#objectList tbody tr");
			for (var i = 0; i < rows.length; i++) {
				var object = $(rows[i]).find("#object_type_name_" + i).attr("value");
				var action = $(rows[i]).find("#name_" + i).attr("value");
				console.log(object);
				if (object == objTypeName) {
//					var msg = "";
					ShowErrorMsg(busProcessObjectTypeErrorMsg);
//					$(".alert").html(msg);
//					$(".alert").removeClass("hidden");
					return false;
				}

			}
			
			var html1 = '<tr>' 	+
							'<td>' 		+
								'<input name="suite_code[]" type="text" id="suite_code_'+i+'" class="view readonly" value="' + suiteCode + '" />' +				
							'</td>' 	+
							'<td>' 		+
								'<input name="mod_code[]" type="text" id="mod_code_'+i+'" class="view readonly" value="' + modCode + '" />'	+
							'</td>' 	+
							'<td>' 		+
								'<input name="object_type_name[]" type="text" id="object_type_name_'+i+'" class="view readonly" value="' + objTypeName + '" />' +
							'</td>' 	+
							'<td>' 		+
								'<input name="action_type_code[]" type="text" id="action_type_code_'+i+'" class="view readonly " value="' + objActionCode + '" />' +
							'</td>' 	+
							'<td>' 		+
								'<input name="tat[]" type="text" id="tat_'+i+'" class="view readonly" value="' + tat + '"/>' +
							'</td>' 	+
							'<td>' 		+
							'<button type="button" onclick="removeObjectRow(this);"  data-toggle="tooltip" title="Remove"  class="btn-del btn btn-xs">' +
								'<span class="fa fa-times"></span>' + 
							'</button>' + 
							'</td>' 	+
					
							'<input name="suite_full_name[]" 	type="hidden" id="suite_full_name_'+i+'" 	class="view readonly" value="' + suiteFullName + '" />' +
							'<input name="mod_full_name[]" 		type="hidden" id="mod_full_name_'+i+'" 		class="view readonly" value="' + ModeFullName + '" />' +
							'<input name="object_type_code[]" 	type="hidden" id="object_type_code_'+i+'" 	class="view readonly" value="' + objTypeCode + '" />' +
							'<input name="action_type_name[]" 	type="hidden" id="action_type_name_'+i+'" 	class="view readonly" value="' + objActionName + '" />' +

						'</tr>'; 

			$("#objectList tbody").append(html1);
			i++;
			HideModal('search-modal');
			$("#tat").val(Number(tatInForm)+Number(tat));

			InitDataTable("#btnObjectType", 2);
		}
			
	});
	
}
	
	var removeObjectRow = function(el) {
		var value = $(el).closest("tr").find(".tat").val();
		var tatValue = $("#tat").val();
		$("#tat").val(tatValue - value);
		$(el).closest("tr").remove();
	};

	
	function showMessage(data) {
		if (data.outcome == 'success') {
			ShowSuccessMsg(updateMsgTitle, data.message);
			HideModal("search-modal");
			isDirty = false ;
			LoadMainContent('sys/aa/businessProcess/show/' + data.id + '/' + 'EDIT');
		} else {
			ShowErrorMsg(updateMsgError, data.message);
			var message = ConcatWithBR(data.error);
			$(".alert").html(message);
			$(".alert").removeClass("hidden");
		}
	}


	
	 function validate() {
		var itemCode = $("#business_pro_code").val().trim();
		var itemName = $("#business_pro_name").val().trim();
		var error = "";
		
	
		
		SyncOptionText();
		var result = CheckRequired(".modal-content");
		
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
		            $('#business_pro_code').selectRange(0, 0);}
		        else if(itemName==""){
		            $('#business_pro_name').selectRange(0, 0);}
		         
		        
		    }); 

		if ($("#business_pro_code").val() == "") {
			$("#business_pro_code").closest(".form-group").find("label").find("span").remove();
			error += busProcessCodeEmpty + "<br/>";
            $("#business_pro_code").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
            $(".alert").html(error);
            $(".alert").removeClass("hidden");
			result = false;

		}
		
		if ($("#business_pro_name").val() == "") {
			$("#business_pro_name").closest(".form-group").find("label").find("span").remove();
			error += busProcessNameEmpty + "<br/>";
            $("#business_pro_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
            $(".alert").html(error);
            $(".alert").removeClass("hidden");
			result = false;

		}
		
		if ($("#role_name").val() == ""){
			$("#role_name").closest(".form-group").find("label").find("span").remove();
			error += busProcessRoleNameEmpty + "<br/>";
            $("#role_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
            $(".alert").html(error);
            $(".alert").removeClass("hidden");
			result = false;
		}
		
		if ($("#emp_name").val() == ""){
			$("#emp_name").closest(".form-group").find("label").find("span").remove();
			error += busProcessEmpNameEmpty + "<br/>";
            $("#emp_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
            $(".alert").html(error);
            $(".alert").removeClass("hidden");
			result = false;
		}
		
		// Business Process Code And Name Length Over Flow Error Message.........
		
		if(itemCode != ""){
			if(itemCode.length > 10){
				$("#business_pro_code").closest(".form-group").find("label").find("span").remove();
                error += busProcessLengthOverFlow + "<br/> ";
                ShowErrorMsg('${data.createErrorTitle}', "${data.invalidErrorMessage}.");
                InitErrorChange();
                $("#business_pro_code").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
                $(".alert").html(error);
                $(".alert").removeClass("hidden");
                result = false;
			}
		}
		
		if(itemName != ""){
			if(itemName.length > 255){
				$("#business_pro_name").closest(".form-group").find("label").find("span").remove();
                error += businessProcessNameLengthOverFlowErrorMsg + "<br/> ";
                ShowErrorMsg('${data.createErrorTitle}', "${data.invalidErrorMessage}.");
                InitErrorChange();
                $("#business_pro_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-red fa fa-close"></span>');
                $(".alert").html(error);
                $(".alert").removeClass("hidden");
                result = false;
			}
		}
		
		//action_type_code[]
		var rows = $("#objectList tbody tr");
		if (rows.length==0) {
			error += objType + "<br/>";
			$(".alert").html(error);
			$(".alert").removeClass("hidden");
			
			$(".bus-process-red-mark").addClass("text-red");
			$(".bus-process-red-mark").addClass("fa-close");
			$(".bus-process-red-mark").removeClass("text-green");
			$(".bus-process-red-mark").removeClass("fa-check");
			$(".bus-process-red-mark").removeClass("hidden");
		}
		$('#objectList').on("DOMSubtreeModified", function(){
			  $(".bus-process-red-mark").removeClass("text-red");
			  $(".bus-process-red-mark").removeClass("fa-close");
			  $(".bus-process-red-mark").addClass("text-green");
			  $(".bus-process-red-mark").addClass("fa-check");
		});
		
		if (!result) {
			FocusError();
			ShowErrorMsg(createErrorTitle, createErrorMsg);
			InitErrorChange();
			$(".alert").html(error);
			$(".alert").removeClass("hidden");
		}
		
		else if(itemCode==""||itemName==""){
			
			error += busProcessSpaceNotAllowed + "<br/>";
			ShowErrorMsg(createErrorTitle, invalidShowErrorMsg);
			InitErrorChange();
			$(".alert").html(error);
			$(".alert").removeClass("hidden");
			return false;
		}		
		
		return result;
	} 

		
	 $("#business_pro_code").on('keypress', function (event) {
        $("#business_pro_code").closest(".form-group").find("label").find("span").remove();
        $("#business_pro_code").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-green fa fa-check"></span>');
        $(".alert").addClass("hidden");
     });
	$("#business_pro_name").on('keypress', function (event) {
        $("#business_pro_name").closest(".form-group").find("label").find("span").remove();
        $("#business_pro_name").closest(".form-group").find("label").append('<span>&nbsp;&nbsp;</span><span class="text-green fa fa-check"></span>');
        $(".alert").addClass("hidden");
     });
	
	// Spacial Charecter Check Error Msg.......
	$("#business_pro_code").on('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
           event.preventDefault();
           var error = businessProcessSpacialCharecterErrorMsg + "<br/>";
           $(".alert").html(error);
            $(".alert").removeClass("hidden");
           return false;
        }
        $(".alert").addClass("hidden");
    });
     
     $("#business_pro_code").bind('paste', function() {
         setTimeout(function() {
             var data = $('#business_pro_code').val();
             var dataFull = data.replace(/[^\w]/gi, '');
             $('#business_pro_code').val(dataFull);
         });

     });
     

  	$("#business_pro_code").attr("autocomplete", "off");
  	$("#business_pro_name").attr("autocomplete", "off");
  	