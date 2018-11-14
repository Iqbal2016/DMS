if(!window.jQuery){window.location = "/?desturl=" + window.location.href;}

$('#client_code').keyup(function(){
	 $(this).val($(this).val().toUpperCase());
}); 

/*$('#select_country').on('change', function(){
	if($(this).val() =="-1"){
		$("input[name='country']").val('');
		$("#local_currcy").val('');
		$("#group_currcy").val(-1);
		$("#func_currcy").val(-1);
	}else{
		$("input[name='country']").val($("#select_country option:selected").text());
		var countryName = $(this).val();
		$.ajax({
			url : "hrm/ed/company/country?name="+ countryName,
			success : function(data) {
				$("#local_currcy").val(data.country.localCurrency);
				$("#group_currcy").val(data.country.localCurrency);
				$("#func_currcy").val(data.country.localCurrency);
			}
		});
		
		
		//$("#local_currcy").val($("#select_country option:selected").text());
	}
});*/

/*--------------------financial------------------------*/
//-------------------------------------------------------------------------------------//
$("#accyr_start_mon").on("change", function(){
	var a = parseInt($("#fisyear").val()); //alert(a);		
	$("#q1_start").datepicker("update", new Date( a + "-" + $("#accyr_start_mon").val() + "-" + 01)); 
	
	  var todayDate = $("#q1_start").val();
	  alert(todayDate);
	  var today = new Date(todayDate);
	  var onejan = new Date(today.getFullYear(),0,1);
	  var dayOfYear = ((today - onejan + 1 )/86400000);
	  var weekOfYear = Math.ceil(dayOfYear/7);   
  //return weekOfYear;
  $("#open_week").val(weekOfYear); 
});

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val()); //alert(a);		
	$("#q1_start").datepicker("update", new Date( a + "-" + $("#accyr_start_mon").val() + "-" + 01)); 
	
	var todayDate = $("#q1_start").val();
  var today = new Date(todayDate);
  var onejan = new Date(today.getFullYear(),0,1);
  var dayOfYear = ((today - onejan + 1)/86400000);
  var weekOfYear = Math.ceil(dayOfYear/7);   
  //return weekOfYear;
  $("#open_week").val(weekOfYear); 
});
//-------------------------------------------------------------------------------------//

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a + 1;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a + "-" + b);
	$("#next_yr_start").datepicker("update", new Date(b + "-" + c + "-" + 01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a + 1;
	$("#next_yr_start").datepicker("update", new Date(b + "-" + $("#fismonths").val() + "-" + 01)); 
});
//-------------------------------------------------------------------------------------//

$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a + "-" + b);
	$("#open_day").datepicker("update", new Date(b + "-" + c + "-" + 01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a;		
	$("#open_day").datepicker("update", new Date(b + "-" + $("#fismonths").val() + "-" + 01)); 
});
//-------------------------------------------------------------------------------------//
$("#accyr_start_mon").on("change", function(){
	var a = $("#accyr_start_mon").val(); 	
	$("#open_mon").val(a);
});
//------------------------------------------------------------------------------------//
$("#fisyear").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a + 1;
	var c = $("#accyr_start_mon").val();
	$("#fisyr").val(a + "-" + b);
	$("#next_yr_start").datepicker("update", new Date(b + "-" + c + "-" + 01)); 
});

$("#fismonths").on("change", function(){
	var a = parseInt($("#fisyear").val());
	var b = a + 1;
	$("#next_yr_start").datepicker("update", new Date(b + "-" + $("#fismonths").val() + "-" + 01)); 
});

function validateStepOne(){
	var error = "";
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

function validateStepTwo(){
	var error = "";
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
	if(stepNumber == 1){
		result = validateStepOne();
	}
	if(stepNumber == 2){
		result = validateStepTwo();
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
}

/*$("#ws_type_code").on('change',function(){
	$("#btnLocation").prop("disabled",true);
	if($("#ws_type_code").val() == "BRANCH"){
		$("#ws_type_name_hr").val($("#ws_type_code").val());
	}
	if($("#ws_type_code").val() == "COMPANY"){
		$("#ws_type_name_hr").val($("#company_name").val());
		$("#ws_type_code_hr").val($("#company_code").val());
		$("#show_ws_type_name").val($("#company_name").val());
		$("#ws_type_code_hidden").val($("#company_code").val());
		$("#ws_type_name_hidden").val($("#company_name").val());
		$("#location_code_emp").val("");
		$("#location_name_emp").val("");
		$("#btnWS").addClass("hidden");	
		$("#btnLocation").prop("disabled",false);
	}else{
		$("#show_ws_type_name").val("");
		$("#btnWS").removeClass("hidden");
	}
	if($("#ws_type_code").val() == "DEPARTMENT"){
		$("#ws_type_name_hr").val($("#ws_type_code").val());
	}
	if($("#ws_type_code").val() == "DIVISION"){
		$("#ws_type_name_hr").val($("#ws_type_code").val());
	}
	if($("#ws_type_code").val() == "PROFIT CENTER"){
		$("#ws_type_name_hr").val($("#ws_type_code").val());
	}
	if($("#ws_type_code").val() == "PROJECT"){
		$("#ws_type_name_hr").val($("#ws_type_code").val());
	}
});*/

/*$("#btnRM").on("click",function(){	
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
	$("#show_rm_name").val(emp.empName + ' [ ' +emp.desig+ ' ]');
	MarkCross($("#show_rm_name").closest(".form-group").find("label"), false);
	$("#show_rm_name").closest(".container-fullw").find("li.field_"+$("#show_rm_name").attr("id")).remove();
	var length2 = $("#show_rm_name").closest(".container-fullw").find(".alert li").size();
	if(length2 == 0){
		$(".alert").addClass("hidden");
	}
	HideModal('search-modal');	
}*/

/*$("#btnJobRole").on("click",function(){	
	if($("#ws_type_code").val() == "BRANCH"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?branch_code="+$("#ws_type_code").val()+"&client_code="+$("#client_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	if($("#ws_type_code").val() == "COMPANY"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow?&client_code="+$("#client_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	if($("#ws_type_code").val() == "DIVISION"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?division_code="+$("#ws_type_code").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	if($("#ws_type_code").val() == "DEPARTMENT"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?department_code="+$("#ws_type_code").val()+"&client_code="+$("#client_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	if($("#ws_type_code").val() == "PROFIT CENTER"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?profitcenter_code="+$("#ws_type_code").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
	if($("#ws_type_code").val() == "PROJECT"){
		ShowModal("hrm/ed/hrrole/searchhrroleshow/?project_code="+$("#ws_type_code").val()+"&company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadJobRole");
	}
});

function loadJobRole(jobroledata){
	event.preventDefault();
	var jobRole = JSON.parse(unescape(jobroledata));
	//Employee Page..............
	$("#hr_role_id").val(jobRole.id);
	$("#hr_role_code").val(jobRole.roleCode);
	$("#hr_role_name").val(jobRole.roleName);
	$("#show_role_name").val(jobRole.roleName);
	//HR Role Page.............
	$("#role_code").val(jobRole.roleCode);
	$("#role_name").val(jobRole.roleName);
	//$("#show_rm_name").val(jobRole.rmRoleName);
	//$("#rm_code").val(jobRole.rmRoleCode);
	//$("#rm_name").val(jobRole.rmRoleName);
	//getRm(jobRole.roleCode, jobRole.roleName, jobRole.companyCode);
	HideModal('search-modal');	
}
*/

/*$("#btnJob").on("click",function(){	
	ShowModal("hrm/ed/job/searchjobshow?company_code="+$("#company_code").val()+"&&?action_type_code=SELECT&actioncallback=loadJob");
});

function loadJob(jobdata){
	event.preventDefault();
	var job = JSON.parse(unescape(jobdata));
	$("#jd_code").val(job.jobCode);		
	$("#jd_name").val(job.jobName);	
	HideModal('search-modal');	
}
*/
/*$("#btnCostCenter").on("click",function(){	
	if(($("#ws_type_code").val() == "BRANCH") || ($("#ws_type_code").val() == "COMPANY") || ($("#ws_type_code").val() == "DEPARTMENT") ||  
			($("#ws_type_code").val() == "DIVISION") || ($("#ws_type_code").val() == "PROJECT")){
		ShowModal("hrm/ed/cost_center/searchcostcenterlistshow?company_code="+$("#company_code").val()+"&&?actioncallback=loadCostCenter");
	}
	if($("#ws_type_code").val() == "PROFIT CENTER") {
		ShowModal("hrm/ed/cost_center/searchcostcenterlistshow?company_code="+$("#company_code").val()+"&&profit_center_code="+$("#profit_center_code").val()+"&&?actioncallback=loadCostCenter");
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
*/

/*$("#btnLocation").on("click",function(){
	if(($("#ws_type_code").val() == "COMPANY") || ($("#ws_type_code").val() == "DEPARTMENT") || ($("#ws_type_code").val() == "DIVISION")
			|| ($("#ws_type_code").val() == "PROFIT CENTER") || ($("#ws_type_code").val() == "PROJECT")){
			ShowModal("hrm/ed/location/searchlocationshow/?action_type_code=SELECT&actioncallback=loadLocation");
	}
	
	if(($("#ws_type_code").val() == "BRANCH")){
			ShowModal("hrm/ed/branch/searchbranchshow?company_code="+$("#company_code").val()+"&&branch_code="+$("#branch_code").val()+"&&?action_type_code=SELECT&actioncallback=loadBranchLocation");
	}
});

function loadLocation(locationdata){
	event.preventDefault();
	var location = JSON.parse(unescape(locationdata)); 
	$("#location_code").val(location.code);		
	$("#show_location_name").val(location.name);	
	$("#location_id").val(location.id);	
	HideModal('search-modal');	
}

function loadBranchLocation(locationData){
	event.preventDefault();
	$("#location_code").val(locationData.steps[0].locationCode);
	$("#location_name").val(locationData.steps[0].locationName);
	$("#location_id").val(locationData.steps[0].id);	
	HideModal('search-modal');	
}
*/

/*$("#btnStep").on("click",function(){	
	ShowModal("hrm/ed/step/searchstepshow?company_code="+$("#company_code").val()+"&&?action_type_code=SELECT&actioncallback=loadStep");
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
*/
/*$("#btnLevel").on("click",function(){	
	ShowModal("hrm/ed/level/searchlevelshow?company_code="+$("#company_code").val()+"&action_type_code=SELECT&actioncallback=loadLevel");
});
*/
/*$("#btnWS").on("click",function(){	
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
	$("#show_ws_type_name").val(branch.branchName);
	$("#ws_type_code_hidden").val(branch.branchCode);
	$("#ws_type_name_hidden").val(branch.branchName);
	$("#ws_type_id_hidden").val(branch.id);
	$("#work_space_code").val(branch.branchCode);
	$("#work_space_name").val(branch.branchName);
	disableLocation();
	HideModal('search-modal');	
}

function loadDepartment(departmentdata){
	event.preventDefault();
	var department = JSON.parse(unescape(departmentdata));
	$("#show_ws_type_name").val(department.departmentName);
	$("#ws_type_code_hidden").val(department.departmentCode);
	$("#ws_type_name_hidden").val(department.departmentName);
	$("#ws_type_id_hidden").val(department.id);
	$("#work_space_code").val(department.departmentCode);
	$("#work_space_name").val(department.departmentName);
	disableLocation();
	HideModal('search-modal');	
}

function loadDivision(divisiondata){
	event.preventDefault();
	var division = JSON.parse(unescape(divisiondata));
	$("#show_ws_type_name").val(division.divisionName);
	$("#ws_type_code_hidden").val(division.divisionCode);
	$("#ws_type_name_hidden").val(division.divisionName);
	$("#ws_type_id_hidden").val(division.id);
	$("#work_space_code").val(division.divisionCode);
	$("#work_space_name").val(division.divisionName);
	disableLocation();
	HideModal('search-modal');	
}

function loadProfitCenter(profitCenterdata){
	event.preventDefault();
	$("#show_ws_type_name").val(profitCenterdata.profitCenterName);
	$("#ws_type_code_hidden").val(profitCenterdata.profitCenterCode);
	$("#ws_type_name_hidden").val(profitCenterdata.profitCenterName);
	$("#ws_type_id_hidden").val(profitCenterdata.id);
	$("#work_space_code").val(profitCenterdata.profitCenterCode);
	$("#work_space_name").val(profitCenterdata.profitCenterName);
	disableLocation();
	HideModal('search-modal');	
}

function loadProject(projectData){
	event.preventDefault();
	var project = JSON.parse(unescape(projectData));	
	$("#show_ws_type_name").val(project.projectName);
	$("#ws_type_code_hidden").val(project.projectCode);
	$("#ws_type_name_hidden").val(project.projectName);
	$("#ws_type_id_hidden").val(project.id);
	$("#work_space_code").val(project.projectCode);
	$("#work_space_name").val(project.projectName);
	disableLocation();
	HideModal('search-modal');	
}
*/
/*disableLocation();
function disableLocation(){
	if($("#ws_type_name").val() == ""){
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
*/
function showMessage(data) {
	if(data.outcome == 'success'){		
		ShowSuccessMsg(createSuccessTitle, data.message);
		isDirty = false ;
		LoadMainContent('sys/aa/clientinit/review/' + data.id + '/' + data.mode); 
	}else{
		ShowErrorMsg(createErrorTitle, data.message);
		var message = ConcatWithBR(data.error);
			$(".alert").html(message);
			$(".alert").removeClass("hidden");
	}
}

//employee page.............
$("#role_code").change(function(){
	$("#jd_code").val($("#role_code").val().toUpperCase());
	$("#hr_role_code").val($("#role_code").val().toUpperCase());
});
$("#role_name").change(function(){
	$("#jd_name").val($("#role_name").val());
	$("#hr_role_name").val($("#role_name").val());
	$("#show_role_name").val($("#role_name").val());
});
$("#show_rm_name").change(function(){
	$("#show_rm_code").val($("#show_rm_name").val().toUpperCase());
});
$("#show_location_name").change(function(){
	$("#show_location_code").val($("#show_location_name").val().toUpperCase());
});
$("#show_ws_type_name").change(function(){
	$("#ws_type_code_hidden").val($("#show_ws_type_name").val().toUpperCase());
});


/*function validateStep(stepNumber){
    $(".alert").addClass("hidden");
	var result = CheckRequired("#step-" + stepNumber);

	if (!result) {
		ShowErrorMsg('Not valid', ":(");
			InitErrorChange();
			$(".alert").removeClass("hidden");
	}

	syncPreview();
	
	return result;

}*/

function validateStep(stepNumber){
    $(".alert").addClass("hidden");
    var result = true;
    var resultR = CheckRequired("#step-" + stepNumber);
	var length = $("#step-" + stepNumber).closest(".container-fullw").find(".alert li").size();
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
	}else{
		$(".photo4 img").prop("src", $(".photo .fileinput-new img").prop("src" ));
	}
	if($(".signature .fileinput-preview img").length > 0){
		$(".signature4 img").prop("src", $(".signature .fileinput-preview img").prop("src" ));
	}else{
		$(".signature4 img").prop("src", $(".signature .fileinput-new img").prop("src" ));
	}
	if($(".initial .fileinput-preview img").length > 0){
		$(".initial4 img").prop("src", $(".initial .fileinput-preview img").prop("src" ));
	}else{
		$(".initial4 img").prop("src", $(".initial .fileinput-new img").prop("src" ));
	}   	
}

InitErrorChange();

function validate(){	
	var itemCode 		= $("#emp_code").val().trim();
	var itemFName 		= $("#first_name").val().trim();
	var itemLName 		= $("#last_name").val().trim();
	var itemPhone   	= $("#phone_off").val();
	var itemMobile  	= $("#mobile").val();
	var itemEmail   	= $("#email1").val();
	var itemEmailAlt   	= $("#email_alt").val();
	var itemCode 		= $("#client_code").val().trim();
	var itemName 		= $("#client_name").val().trim();
	//var itemBnature 	= $("#client_business_nature").val().trim();
	//var itemAddress 	= $("#address").val().trim();
	//var itemPhone 		= $("#client_phone").val().trim();
	//var itemMobile 		= $("#client_mobile").val();
	//var itemWebsite 	= $("#client_website").val();
	//var itemEmail 		= $("#client_email").val();

	SyncOptionText();
	var selectedSuites = "";
	var licenseSuiteData = [];
	$(".suite-code").each(function(i, item){
		if($(item).is(":checked")){
			var suite = $(item).prop("alt");
			selectedSuites += suite + ",";
			licenseSuiteData.push({m : suite});
		}
	});
	
	var selectedModules = "";
	var licenseData = [];
	$(".license").each(function(i, item){
		if($(item).is(":checked")){
			var module = $(item).prop("id");
			$(this).closest("fieldset").find(".suite-code").prop("checked","checked"); 
			var limitItem = $(item).closest("tr").find(".limit-item").text();//alert(limitItem)
			var limitNumber = $(item).closest("tr").find(".limit-number").val();
			selectedModules += module + ",";
			licenseData.push({m : module, l : limitItem, n : limitNumber});
		}
	});

	$("#licensed_suites").val(selectedSuites);
	$("#licensed_modules").val(selectedModules);
	$("#license_data").val(JSON.stringify(licenseData));

	var result = CheckRequired();

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

		if (itemCode == "") {
			$('#client_code').selectRange(0, 0);
		} else if (itemName == "") {
			$('#client_name').selectRange(0, 0);
		} /*else if (itemBnature == "") {
			$('#client_business_nature').selectRange(0, 0);
		} else if (itemAddress == "") {
			$('#addr').selectRange(0, 0);
		}*/ else if (itemPhone == "") {
			$('#phone').selectRange(0, 0);
		} else if (resEmail == false) {
			$('#email').selectRange(0, 0);
		} else if (resWeb == false) {
			$('#website').selectRange(0, 0);
		}

	});

	var error = "";
	var result = CheckRequired();
	 
	 var patternPhone    = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
	 var resPhone        = patternPhone.test(itemPhone);
	 var patternMobile   = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");
	 var resMobile       = patternMobile.test(itemMobile);
	 
	if ($("#company_code").val() == "" || $("#company_code").val() == "-1") {
		error += companyCodeEmpty+"<br/> ";
		$("#company_code").addClass("error");
		MarkCross($("#company_code").closest(".form-group").find('label'), true);
		result = false;
	} 
	
	var spaceCheck = $("#emp_code").val().trim().indexOf(' ') >= 0;
	if(spaceCheck){
		error += empCodeSpaceCheck+"<br/> ";
		$("#emp_code").addClass("error");
		MarkCross($("#emp_code").closest(".form-group").find('label'), true);		
		result = false;
	}

	if ($("#emp_code").val() == "") {
		error += empCodeEmpty+"<br/> ";
		$("#emp_code").addClass("error");
		MarkCross($("#emp_code").closest(".form-group").find('label'), true);	
		result = false;
	} 
	
	if ($("#first_name").val() == "") {
		error += firstNameEmpty + "<br/> ";
		$("#first_name").addClass("error");
		MarkCross($("#first_name").closest(".form-group").find('label'), true);	
		result = false;
	} 
		
	/*if ($("#last_name").val() == "") {
		error += lastNameEmpty + "<br/> ";
		$("#last_name").addClass("error");
		MarkCross($("#last_name").closest(".form-group").find('label'), true);
		result = false;
	}*/ 

	if(itemMobile !== ""){
		var spaceCheckMobile = itemMobile.indexOf(' ') >= 0;
		if(spaceCheckMobile){
			error += mobileSpaceCheck +"<br>";
			result = false;			
		}
		if(resMobile == false){
		   error +=	mobileNonNumeric +"<br>";
		   result = false;
	   } 
	}
	
	if(itemPhone !== ""){
		var spaceCheckPhone = itemPhone.indexOf(' ') >= 0;
		if(spaceCheckPhone){
			error += phoneOffSpaceCheck +"<br>";
			result = false;
		}
		if(resPhone == false){
		  error += phoneOffNonNumeric +"<br>";
		  result = false;
	    } 
 	}
	
	if (!result) {
		FocusError();
		ShowErrorMsg('Client was not created', "Please check details.");
		InitErrorChange();
		$(".alert").html(error);
		$(".alert").removeClass("hidden");
	}
	
	return result;
}

