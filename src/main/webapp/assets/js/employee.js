if(!window.jQuery){window.location = "/?desturl=" + window.location.href;}




$("#ws_type_code").on('change',function(){
	
	$("#btnLocation").prop("disabled",true);
	
	if($("#ws_type_code").val() == "BRANCH"){
		$(".project").removeClass("hidden");
	}
	
	if($("#ws_type_code").val() == "COMPANY"){
		$("#ws_type_name").val($("#company_code").val());
		$("#ws_type_code_hidden").val($("#company_code").val())
		$("#location_code").val("");
		$("#location_name").val("");
		$("#btnWS").addClass("hidden");	
		$("#btnLocation").prop("disabled",false);
	}
	else{
		$("#ws_type_name").val("");
		$("#btnWS").removeClass("hidden");
	}
	
	if($("#ws_type_code").val() == "DEPARTMENT"){
		$("#ws_type_name").val("");
		$("#location_code").val("");
		$("#location_name").val("");
	}
	
		
	if($("#ws_type_code").val() == "DIVISION"){
		$("#location_code").val("");
		$("#location_name").val("");
	}
	
	
	if($("#ws_type_code").val() == "PROFIT CENTER"){
		$("#location_code").val("");
		$("#location_name").val("");
	}
	
	
	if($("#ws_type_code").val() == "PROJECT"){
		$(".project").removeClass("hidden");
		$("#location_code").val("");
		$("#location_name").val("");
	}
	
	
});

$("#btnRM").on("click",function(){	
	ShowModal("hrm/ed/employee/quicksearchemployeeshow/?action_type_code=SELECT&actioncallback=loadRM");
});

function loadRM(empdata) {
	event.preventDefault();
	var emp = JSON.parse(unescape(empdata));
	$("#rm_id").val(emp.id);
	$("#rm_code").val(emp.empCode); 
	$("#rm_name").val(emp.empName);
	$("#rm_desig").val(emp.desig);
	$("#rm_email").val(emp.email);	
	$("#rm_username").val(emp.username);	
	$("#rm_mobile").val(emp.mobile);
	$("#rm_role_name").val(emp.rmRoleName);	
	$("#rm_role_code").val(emp.rmRoleCode);
	
	if(emp.empName == "" ){
		$("#show_rm_name").val("");
	}else{
		if(emp.empName != "" && emp.desig != ""){
			$("#show_rm_name").val(emp.empName + ' [ ' +emp.desig+ ' ]');
		}else{
			$("#show_rm_name").val(emp.empName);
		}
	}
	
	MarkCross($("#show_rm_name").closest(".form-group").find("label"), false);
	$("#show_rm_name").closest(".container-fullw").find("li.field_"+$("#show_rm_name").attr("id")).remove();
	var length2 = $("#show_rm_name").closest(".container-fullw").find(".alert li").size();
	if(length2 == 0){
		$(".alert").addClass("hidden");
	}
	HideModal('search-modal');	
}

$("#btnJobRole").on("click",function(){	
	if($("#ws_type_code").val() == "BRANCH"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?branch_code="+$("#ws_type_code_hidden").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
	if($("#ws_type_code").val() == "COMPANY"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
	if($("#ws_type_code").val() == "DIVISION"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?division_code="+$("#ws_type_code_hidden").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
	if($("#ws_type_code").val() == "DEPARTMENT"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?department_code="+$("#ws_type_code_hidden").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
	if($("#ws_type_code").val() == "PROFIT CENTER"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?profit_center_code="+$("#ws_type_code_hidden").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
	if($("#ws_type_code").val() == "PROJECT"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?project_code="+$("#ws_type_code_hidden").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	
});



function loadJobRole(jobroledata){
	event.preventDefault();
	var jobRole = JSON.parse(unescape(jobroledata));
	$("#role_id").val(jobRole.id);
	$("#role_code").val(jobRole.roleCode);		
	$("#role_name").val(jobRole.roleName);
	$("#rm_role_name").val(jobRole.rmRoleName);
	$("#rm_role_code").val(jobRole.rmRoleCode);
	$("#role_code").closest(".container-fullw").find("li.field_"+$("#role_code").attr("id")).remove();
	var length2 = $("#show_rm_name").closest(".container-fullw").find(".alert li").size();
	if(length2 == 0){
		$(".alert").addClass("hidden");
	}
	getRm(jobRole.roleCode, jobRole.roleName, jobRole.companyCode);
	HideModal('search-modal');	
}


$("#btnJob").on("click",function(){	
	ShowModal("hrm/ed/job/searchjobshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJob");
});



function loadJob(jobdata){
	event.preventDefault();
	var job = JSON.parse(unescape(jobdata));
	$("#jd_code").val(job.jobCode);		
	$("#jd_name").val(job.jobName);	
	HideModal('search-modal');	
}

$("#btnCostCenter").on("click",function(){	
	if(($("#ws_type_code").val() == "BRANCH") || ($("#ws_type_code").val() == "COMPANY") || ($("#ws_type_code").val() == "DEPARTMENT") ||  
			($("#ws_type_code").val() == "DIVISION") || ($("#ws_type_code").val() == "PROJECT")){
		ShowModal("hrm/ed/cost_center/searchcostcenterlistshow?company_code="+$("#company_code").val()+"&actioncallback=loadCostCenter");
	}
	
	if($("#ws_type_code").val() == "PROFIT CENTER") {
		ShowModal("hrm/ed/cost_center/searchcostcenterlistshow?company_code="+$("#company_code").val()+"&profit_center_code="+$("#profit_center_code").val()+"&actioncallback=loadCostCenter");
	}
	
});

function loadCostCenter(ccdata){
	event.preventDefault();
	$("#cost_center_id").val(ccdata.id);
	$("#cost_center_code").val(ccdata.costCenterCode);		
	$("#cost_center_name").val(ccdata.costCenterName);
	$("#profit_center_id").val(ccdata.profitCenterId);
	$("#profit_center_code").val(ccdata.profitCenterCode);	
	$("#profit_center_name").val(ccdata.profitCenterName);	
	HideModal('search-modal');	
}


$("#btnLocation").on("click",function(){
	if(($("#ws_type_code").val() == "COMPANY") || ($("#ws_type_code").val() == "DEPARTMENT") || ($("#ws_type_code").val() == "DIVISION")
			|| ($("#ws_type_code").val() == "PROFIT CENTER") || ($("#ws_type_code").val() == "PROJECT")){
			ShowModal("hrm/ed/location/searchlocationshow/?action_type_code=SELECT&actioncallback=loadLocation");
	}
	
	if(($("#ws_type_code").val() == "BRANCH")){
			ShowModal("hrm/ed/branch/searchbranchshow?company_code="+$("#company_code").val()+"&branch_code="+$("#branch_code").val()+"&action_type_code=SELECT&actioncallback=loadBranchLocation");
	}
});

function loadLocation(locationdata){
	event.preventDefault();
	var location = JSON.parse(unescape(locationdata)); 
	$("#location_code").val(location.code);		
	$("#location_name").val(location.name);	
	$("#location_lat").val(location.latitude);
	$("#location_lng").val(location.longitude);
	$("#location_id").val(location.id);
	$('#alt_workstation_location').val(location.name);
	$('#workstation_location').val(location.name);
	HideModal('search-modal');	
}

function loadBranchLocation(locationData){
	event.preventDefault();
	$("#location_code").val(locationData.steps[0].locationCode);
	$("#location_name").val(locationData.steps[0].locationName);
	$("#location_lat").val(location.latitude);
	$("#location_lng").val(location.longitude);
	$("#location_id").val(locationData.steps[0].id);
	$('#alt_workstation_location').val(locationData.steps[0].locationName);
	$('#workstation_location').val(locationData.steps[0].locationName);
	HideModal('search-modal');	
}

if($('#location_name').val()){
	$('#alt_workstation_location').val($('#location_name').val());
	$('#workstation_location').val($('#location_name').val());
}


$("#btnStep").on("click",function(){	
	ShowModal("hrm/ed/step/searchstepshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadStep");
});

function loadStep(stepdata){
	event.preventDefault();
	var step = JSON.parse(unescape(stepdata));
	$("#emp_step").val(step.stepCode);		
	$("#emp_grade").val(step.gradeName);
	$("#emp_grade_cat").val(step.gradecatName);
	$("#step_id").val(step.id);
	HideModal('search-modal');	
}

$("#btnLevel").on("click",function(){	
	ShowModal("hrm/ed/level/searchlevelshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadLevel");
});

$("#btnWS").on("click",function(){	
	if($("#ws_type_code").val() == "BRANCH"){
		ShowModal("hrm/ed/branch/searchbranch?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadBranch");
	}

	if($("#ws_type_code").val() == "PROJECT"){
		ShowModal("hrm/ed/project/searchprojectshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadProject");
	}
	
	if($("#ws_type_code").val() == "DEPARTMENT"){
		ShowModal("hrm/ed/department/searchdepartment?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadDepartment");
	}
	
	if($("#ws_type_code").val() == "DIVISION"){
		ShowModal("hrm/ed/division/searchdivisionshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadDivision");
	}
	
	if($("#ws_type_code").val() == "PROFIT CENTER"){
		ShowModal("hrm/ed/profit_center/searchprofitcenterlistshow?company_code="+$("#company_code").val()+"&actioncallback=loadProfitCenter");
	}
});

function loadBranch(branchdata){
	event.preventDefault();
	var branch = JSON.parse(unescape(branchdata));
	$("#ws_type_name").val(branch.branchName);
	$("#ws_type_code_hidden").val(branch.branchCode);
	$("#branch_code").val(branch.branchCode);		
	$("#branch_name").val(branch.branchName);	
	$("#branch_id").val(branch.id);	
	disableLocation();
	HideModal('search-modal');	
}

function loadDepartment(departmentdata){
	event.preventDefault();
	var department = JSON.parse(unescape(departmentdata));
	$("#ws_type_name").val(department.departmentName);
	$("#ws_type_code_hidden").val(department.departmentCode);
	$("#department_code").val(department.departmentCode);		
	$("#department_name").val(department.departmentName);
	$("#department_id").val(department.id);
	disableLocation();
	HideModal('search-modal');	
}

function loadDivision(divisiondata){
	event.preventDefault();
	var division = JSON.parse(unescape(divisiondata));
	$("#ws_type_name").val(division.divisionName);
	$("#ws_type_code_hidden").val(division.divisionCode);
	$("#division_id").val(division.id);
	$("#division_code").val(division.divisionCode);	
	$("#division_name").val(division.divisionName);	
	disableLocation();
	HideModal('search-modal');	
}

function loadProfitCenter(profitCenterdata){
	event.preventDefault();
	$("#ws_type_name").val(profitCenterdata.profitCenterName);
	$("#ws_type_code_hidden").val(profitCenterdata.profitCenterCode);
	$("#profit_center_code").val(profitCenterdata.profitCenterCode);
	$("#profit_center_name").val(profitCenterdata.profitCenterName);
	$("#profit_center_id").val(profitCenterdata.id);
	disableLocation();
	HideModal('search-modal');	
}

function loadProject(projectData){
	event.preventDefault();
	var project = JSON.parse(unescape(projectData));	
	$("#ws_type_name").val(project.projectName);
	$("#ws_type_code_hidden").val(project.projectCode);
	$("#project_id").val(project.id);
	$("#project_code").val(project.projectCode);
	$("#project_name").val(project.projectName);
	disableLocation();
	HideModal('search-modal');	
}


/*$("#ws_type_code").on('change',function(){
	$("#btnLocation").prop("disabled",true);
	$("#ws_type_name").val("");
	$("#ws_type_code_hidden").val("");
	$("#project_code").val("");
	$("#project_name").val("");
	$("#ws_type_id").val("");
	$("#department_code").val("");
	$("#department_name").val("");
	$("#department_id").val("");
	$("#division_id").val("");	
	$("#division_code").val("");	
	$("#division_name").val("");
	$("#branch_code").val("");		
	$("#branch_name").val("");	
	$("#branch_id").val("");	
	$("#profit_center_code").val("");
	$("#profit_center_name").val("");
	$("#profit_center_id").val("");
	$("#role_id").val("");
	$("#role_code").val("");		
	$("#role_name").val("");
	$("#rm_name").val("");		
	$("#rm_name").val("");	
	$("#rm_desig").val("");	
	$("#rm_email").val("");	
	$("#rm_username").val("");	
	$("#rm_mobile").val("");

});*/

disableLocation();
function disableLocation(){
	if($("#ws_type_name").val()==""){
		$("#btnLocation").prop("disabled",true);
	}
	else{
		$("#btnLocation").prop("disabled",false);
	}
}

function loadLevel(leveldata){
	event.preventDefault();
	var level = JSON.parse(unescape(leveldata));
	$("#band_code").val(level.bandCode); 	
	$("#band_name").val(level.bandName);
	$("#level_code").val(level.levelCode);
	$("#level_name").val(level.levelName);
	$("#level_id").val(level.id);
	HideModal('search-modal');	
}



$("#first_name").on('keyup change keypress mouseout mouseclick', function (e) {
	generateFullName($("#first_name").val(), $("#middle_name").val(), $("#last_name").val());
});

$("#middle_name").on('keyup change keypress mouseout mouseclick', function (e) {
	generateFullName($("#first_name").val(), $("#middle_name").val(), $("#last_name").val());
});

$("#last_name").on('keyup change keypress mouseout mouseclick', function (e) {
	generateFullName($("#first_name").val(), $("#middle_name").val(), $("#last_name").val());
});

function generateFullName(first_name, middle_name, last_name) { //alert(111);
	var full_name =  first_name + ' ' + middle_name + ' ' + last_name;
		$("#emp_name").val(full_name); 
}

$("#btnMapLocation").on("click", function(){ 
	var lat = $("#current_location_lat").val();
	var lng = $("#current_location_lng").val();
	var zoom = $("#current_location_zoom").val();
	ShowModal("/map/selectlocation2?actioncallback=setLocation&lat=" + lat + "&lng=" + lng + "&zoom=" + zoom , "modal-lg", "map-modal", "Select Location..");
});


$("#btnAppMapLocation").on("click", function(){ 
	var lat = $("#perm_location_lat").val();
	var lng = $("#perm_location_lng").val();
	var zoom = $("#perm_location_zoom").val();
	ShowModal("/map/selectlocation2?actioncallback=setPermLocation&lat=" + lat + "&lng=" + lng + "&zoom=" + zoom , "modal-lg", "map-modal", "Select Location..");
});

function setLocation(data){
	$("#current_location_lat").val(data.lat);
	$("#current_location_lng").val(data.lng);
	$("#current_location_zoom").val(data.zoom);
	$('#addr').val(data.addr);
	var width = $("#addr").width();
	$("#location").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + data.lat + ',' + data.lng + '&zoom=' + data.zoom + '&size='+width+'x100&markers=size:mid|color:blue|' + data.lat + ',' + data.lng + '&key=AIzaSyBFPFcGIvjNVJlyAuAciYeryzQq7XE6v-w">');

}

function setPermLocation(data){
	$("#perm_location_lat").val(data.lat);
	$("#perm_location_lng").val(data.lng);
	$("#perm_location_zoom").val(data.zoom);
	$('#addr_perm').val(data.addr);
	var width = $("#addr").width();
	$("#permlocation").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + data.lat + ',' + data.lng + '&zoom=' + data.zoom + '&size='+width+'x100&markers=size:mid|color:blue|' + data.lat + ',' + data.lng + '&key=AIzaSyBFPFcGIvjNVJlyAuAciYeryzQq7XE6v-w">');
}


$('#company_code').on('change', function(){
	swal({
		title: alertMessageTitle,
		text: alertMessageText,
		type: alertMessageWarning,
		showCancelButton: true,
		confirmButtonColor: "#007AFF",
		confirmButtonText: alertMessageConfButtonTitle,
		closeOnConfirm: true
	}, function() {
    	var newCompanyCode = $("#company_code").val();
    	isDirty = false;
    	LoadMainContent("hrm/ed/employee/create/?company_code=" + newCompanyCode);
	});

}); 


function showMessage(data) {
	if(data.outcome == 'success'){		
		ShowSuccessMsg(createSuccessTitle, data.message);
		isDirty = false ;
		LoadMainContent('hrm/ed/employee/show/' + data.id + '/' + data.mode + '/CREATE'); 
	}
	else{
		ShowErrorMsg(createErrorTitle, data.message);
		//var message = ConcatWithBR(data.error);
			$(".alert").html(data.error);
			$(".alert").removeClass("hidden");
			
			if($(".container-fullw").find(".field_company_code").is(':visible')){
		    	MarkCross($("#company_code").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_emp_code").is(':visible')){
		    	MarkCross($("#emp_code").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_first_name").is(':visible')){
		    	MarkCross($("#first_name").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_employment_type").is(':visible')){
		    	MarkCross($("#employment_type").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_job_status").is(':visible')){
		    	MarkCross($("#job_status").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_nationality").is(':visible')){
		    	MarkCross($("#nationality").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_religion").is(':visible')){
		    	MarkCross($("#religion").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_last_name").is(':visible')){
		    	MarkCross($("#last_name").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_mobile").is(':visible')){
		    	MarkCross($("#mobile").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_phone_off").is(':visible')){
		    	MarkCross($("#phone_off").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_count_children").is(':visible')){
		    	MarkCross($("#count_children").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_phone_res").is(':visible')){
		    	MarkCross($("#phone_res").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_height").is(':visible')){
		    	MarkCross($("#height").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_weight").is(':visible')){
		    	MarkCross($("#weight").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_blood_group").is(':visible')){
		    	MarkCross($("#blood_group").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_marital_status").is(':visible')){
		    	MarkCross($("#marital_status").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_office_time_code").is(':visible')){
		    	MarkCross($("#office_time_code").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_office_time_name").is(':visible')){
		    	MarkCross($("#office_time_name").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_email").is(':visible')){
		    	MarkCross($("#email").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_email_alt").is(':visible')){
		    	MarkCross($("#email_alt").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_emp_code").is(':visible')){
		    	MarkCross($("#emp_code").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_middle_name").is(':visible')){
		    	MarkCross($("#middle_name").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_birth_date").is(':visible')){
		    	MarkCross($("#birth_date").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_join_date").is(':visible')){
		    	MarkCross($("#join_date").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_confirm_date").is(':visible')){
		    	MarkCross($("#confirm_date").closest(".form-group").find("label"), true);
		    }
			
			if($(".container-fullw").find(".field_ws_type_code").is(':visible')){
		    	MarkCross($("#ws_type_code").closest(".form-group").find("label"), true);
		    }
			
	}
}

function validateStep(stepNumber){
   $(".alert").addClass("hidden");
   var result = true;
   var resultR = CheckRequired("#step-" + stepNumber);
	var length = $("#step-" + stepNumber).closest(".container-fullw").find(".alert li").size();
	if($("#show_rm_name").val() != ""){
		MarkCross($("#show_rm_name").closest(".form-group").find("label"), false);
		$("#show_rm_name").closest(".container-fullw").find("li.field_"+$("#show_rm_name").attr("id")).remove();
		var length2 = $("#step-" + stepNumber).closest(".container-fullw").find(".alert li").size();
		if(length2 == 0){
			$(".alert").addClass("hidden");
		}
		result = true;
		resultR = true;
		length = length2;
	}
	if (!resultR | length > 0)  {
		ShowErrorMsg('Invalid', "Check Error Messages");
			InitErrorChange();
			$(".alert").removeClass("hidden");
			result = false;
	}

	syncPreview();
	
	return result;

}

function syncPreview(){
	$.each($("[id^=preview_]"), function(i, item){
		var sourceId = $(item).prop("id").substring(8);
		var source = $("#" + sourceId);
		if(source.length == 0){
			source = $("[name='" + sourceId + "']");
		}
		if (source && source.prop("type")){
			if(source.prop("type").toLowerCase() == "text") {
				$(item).text(source.val());
			}
			else if(source.prop("type").toLowerCase() == "select-one") {
				$(item).text(source.find("option:selected").text());
			}
			else if(source.prop("type").toLowerCase() == "checkbox") {
				$(item).text(source.is(":checked")? "Yes" : "No");
			}
			else if(source.prop("type").toLowerCase() == "radio") {
				$(item).text($("[name='" + sourceId + "']").filter(function(i,item){return $(item).prop("checked")}).val());
			}
			else if(source.prop("type").toLowerCase() == "hidden") {
				$(item).text(source.val());
			}

		}
	});


	if($(".photo .fileinput-preview img").length > 0){
		$(".photo4 img").prop("src", $(".photo .fileinput-preview img").prop("src" ));
	}
	else{
		$(".photo4 img").prop("src", $(".photo .fileinput-new img").prop("src" ));
	}

	if($(".signature .fileinput-preview img").length > 0){
		$(".signature4 img").prop("src", $(".signature .fileinput-preview img").prop("src" ));
	}
	else{
		$(".signature4 img").prop("src", $(".signature .fileinput-new img").prop("src" ));
	}

	if($(".initial .fileinput-preview img").length > 0){
		$(".initial4 img").prop("src", $(".initial .fileinput-preview img").prop("src" ));
	}
	else{
		$(".initial4 img").prop("src", $(".initial .fileinput-new img").prop("src" ));
	}   	
}


InitErrorChange();
function validate(){	
	SyncOptionText();
	InitErrorChange();
	var result = CheckRequired();
	if (!result) {
		FocusError();
		ShowErrorMsg(createErrorTitle, createErrorText);
		InitErrorChange();
		$(".alert").html(error);
		$(".alert").removeClass("hidden");
	} 
	return result;
}

setTimeout(function(){
		FocusElement("#emp_code");
}, 500);

