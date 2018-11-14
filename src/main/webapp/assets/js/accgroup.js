/*
===============================================================================================
===============================================================================================
						Start: Account Group Functions
===============================================================================================
===============================================================================================
*/
	

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
							Start: Add Button Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	$("#btnAccGroupAdd").on("click", function(){ 
		$(".modal-title").text(glAccGroupCreateTitle);
		ResetInputs("#accGroupModal");
		ResetErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accGroupList tr").removeClass("current-row");
		$("#accGroupModal").modal();
		$(".modal-backdrop.fade.in").off("click");
		$(".modal").off("keydown");
		$("#check_edit_mode_group_modal").val("N");
		$("#acc_group_code_msg").empty();
		
		$("#accGroupFundamentalTypeDiv").hide();	
		
		$("#btnAccSubCat").on("click",function(){	
			ShowModal("fin/gl/accsubcat/index/?actioncallback=loadAccSubCat", null, "searchAccSubCatList");
		});
		
	});

	var fundamentalTypeCodeGroupModal = "";
	
	function loadAccSubCat(subcat){ 
		event.preventDefault();
		$("#acc_cat_id_group_modal").val(subcat.accCatId);	
		$("#acc_cat_code_group_modal").val(subcat.accCatCode);	
		$("#acc_cat_name_group_modal").val(subcat.accCatName);	
		$("#acc_subcat_id_group_modal").val(subcat.id);
		$("#acc_subcat_code_group_modal").val(subcat.accSubCatCode);	
		$("#acc_subcat_name_group_modal").val(subcat.accSubCatName);	
		HideModal('searchAccSubCatList');	
		
		valueAccCatCodeGroupModal    = subcat.accCatCode;
		valueAccSubCatCodeGroupModal = subcat.accSubCatCode;
		valueAccGroupCodeGroupModal  = $("#acc_group_code_group_modal").val();
		$("#acc_group_code_msg").text(subcat.accCatCode + subcat.accSubCatCode + valueAccGroupCodeGroupModal);
		
		$("#acc_cat_fundamental_type_code_group_modal").val($.trim(subcat.accCatFundamentalTypeCode));
		$("#acc_cat_fundamental_type_text_group_modal").val($.trim(subcat.accCatFundamentalTypeText));
		$("#acc_subcat_fundamental_type_code_group_modal").val($.trim(subcat.accSubCatFundamentalTypeCode));
		$("#acc_subcat_fundamental_type_text_group_modal").val($.trim(subcat.accSubCatFundamentalTypeText));
		
		$("#accGroupFundamentalTypeDiv").show();	
		
		//var fundamentalTypeCodeGroupModal = $(el).closest("tr").find(".fundamental-type-group-modal").val();
		//alert(fundamentalTypeCodeGroupModal);
		var $radios = $('input:radio[name=fundamental_type_group_modal]');
    	$radios.filter('[value='+fundamentalTypeCodeGroupModal+']').prop('checked', true);
    	
		if ($("#acc_subcat_fundamental_type_code_group_modal").val() == "Current_Assets") {
		 	$("#Current_Assets").show();
		 	$("#NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].current-asset:checked').val() == null){
        		$("#fundamental_type_group_modal11").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonCurrent_Assets") {
		 	$("#NonCurrent_Assets").show();
		 	$("#Current_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-current-asset:checked').val() == null){
        		$("#fundamental_type_group_modal21").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Current_Liabilities"){
		 	$("#Current_Liabilities").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();

		 	if($('input[name=fundamental_type_group_modal].current-liability:checked').val() == null){
        		$("#fundamental_type_group_modal31").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonCurrent_Liabilities"){ 
		 	$("#NonCurrent_Liabilities").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-current-liability:checked').val() == null){
        		$("#fundamental_type_group_modal41").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Share_Capital"){
		 	$("#Share_Capital").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].share-capital:checked').val() == null){
        		$("#fundamental_type_group_modal51").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Retained_Earnings"){
		 	$("#Retained_Earnings").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].retained-earning:checked').val() == null){
        		$("#fundamental_type_group_modal61").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Reserves_Surplus"){
			 $("#Reserves_Surplus").show();
			 $("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
			 
			 if($('input[name=fundamental_type_group_modal].reserves-surplus:checked').val() == null){
        		$("#fundamental_type_group_modal71").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Operating_Income"){
		 	$("#Operating_Income").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].operating-income:checked').val() == null){
        		$("#fundamental_type_group_modal81").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonOperating_Income"){
		 	$("#NonOperating_Income").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-operating-income:checked').val() == null){
        		$("#fundamental_type_group_modal91").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Direct_Expense"){
		 	$("#Direct_Expense").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].direct-expense:checked').val() == null){
        		$("#fundamental_type_group_modal101").prop("checked", true);
        	}
		 } else {
		 	$("#Indirect_Expense").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].indirect-expense:checked').val() == null){
        		$("#fundamental_type_group_modal111").prop("checked", true);
        	}
		 }
	}
	
	

/*
-----------------------------------------------------------------------------------------------
							End: Add Button Function
-----------------------------------------------------------------------------------------------
*/
	
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
								Start: Add or Modify Item Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	
	$("#btnAccGroupOk").on("click", function() {
		var result = CheckRequired('.acc-group');
		
		/*if (!validateAccSubCat()) {
    		return;
    	} */
		
	    if (!result) {
	        InitHandlers();
	        InitErrorChange();
	        FocusError();
	        return;
	    } 
	    
	    $("#fundamental_type_text_group_modal").val($.trim($("input[name='fundamental_type_group_modal']:checked").parent().text()));  
		//$("#acc_cat_name_group_modal").val($("#acc_cat_code_subcat_modal option:selected").text());

		if ($("#accGroupList tr.current-row").length == 0 ) {
			$("#accGroupList tr:last").after('<tr class="current-row"></tr>');
		}

	  //*********************unique check******************************
	    if($("#check_edit_mode_group_modal").val() == "N"){
	    	var resultCode = uniqueCheckCodeAccGroup();
	    	var resultName = uniqueCheckNameAccGroup();
			if(!resultCode && !resultName){
				addOrModifyRowAccGroup();
			} 
			
			//***********unique check message show**************************
			if(resultCode){
				ShowErrorMsg(glAccGroupEditErrorMsgTitle, glAccGroupCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccGroupEditErrorMsgTitle, glAccGroupNameUniqueErrorMsg);
			}
		}else{
			var resultCode = uniqueCheckCodeAccGroup();
			var resultName = uniqueCheckNameAccGroup();
			if(!resultCode && !resultName){
				addOrModifyRowAccGroup("edit");
			}
			//***********unique check message show**************************
			
			if(resultCode){
				ShowErrorMsg(glAccGroupEditErrorMsgTitle, glAccGroupCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccGroupEditErrorMsgTitle, glAccGroupNameUniqueErrorMsg);
			}
		} 
	});
	
	
	function addOrModifyRowAccGroup(isEditMode){ 
		
		var accCatId = $("#acc_cat_id_group_modal").val();
	    var accCatCode = $("#acc_cat_code_group_modal").val();
	    var accCatName = $("#acc_cat_name_group_modal").val();
	    
	    var accSubCatId = $("#acc_subcat_id_group_modal").val();
	    var accSubCatCode = $("#acc_cat_code_group_modal").val() + $("#acc_subcat_code_group_modal").val();
	    var accSubCatName = $("#acc_subcat_name_group_modal").val();
	    
	    var accGroupId = $("#acc_group_id_group_modal").val();
	    var accGroupCode = $("#acc_cat_code_group_modal").val() + $("#acc_subcat_code_group_modal").val() + $("#acc_group_code_group_modal").val();
	    var accGroupName = $("#acc_group_name_group_modal").val();
	    var accGroupFundamentalType = $("#fundamental_type_text_group_modal").val();
	    
	    var html = 
	    	'<button type="button" onclick="editRowAccGroup(this);" class="btn btn-edit btn-xs"><span class="fa fa-edit"></span></button> ' + 
			'<button type="button" onclick="delRowAccGroup(this);" class="btn-del btn btn-xs"><span class="fa fa-trash"></span></button> ' +
			
			'<input type="hidden" name="acc_cat_id_group_modal[]" class="acc-cat-id-group-modal" value="' + $("#acc_cat_id_group_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_code_group_modal[]" class="acc-cat-code-group-modal" value="' + $("#acc_cat_code_group_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_name_group_modal[]" class="acc-cat-name-group-modal" value="' + $("#acc_cat_name_group_modal").val() + '" />' +  
			'<input type="hidden" name="acc_cat_fundamental_type_code_group_modal[]" class="acc-cat-fundamental-type-code-group-modal" value="' + $("#acc_cat_fundamental_type_code_group_modal").val() + '" />' +      
			'<input type="hidden" name="acc_cat_fundamental_type_text_group_modal[]" class="acc-cat-fundamental-type-text-group-modal" value="' + $("#acc_cat_fundamental_type_text_group_modal").val() + '" />' +   
			
			'<input type="hidden" name="acc_subcat_id_group_modal[]" class="acc-subcat-id-group-modal" value="' + $("#acc_subcat_id_group_modal").val() + '" />' +
			'<input type="hidden" name="acc_subcat_code_group_modal[]" class="acc-subcat-code-group-modal" value="' + $("#acc_subcat_code_group_modal").val() + '" />' +  
			'<input type="hidden" name="acc_subcat_name_group_modal[]" class="acc-subcat-name-group-modal" value="' + $("#acc_subcat_name_group_modal").val() + '" />' +   
			'<input type="hidden" name="acc_subcat_fundamental_type_code_group_modal[]" class="acc-subcat-fundamental-type-code-group-modal" value="' + $("#acc_subcat_fundamental_type_code_group_modal").val() + '" />' + 
			'<input type="hidden" name="acc_subcat_fundamental_type_text_group_modal[]" class="acc-subcat-fundamental-type-text-group-modal" value="' + $("#acc_subcat_fundamental_type_text_group_modal").val() + '" />' + 
			
			'<input type="hidden" name="acc_group_id_group_modal[]" class="acc-group-id-group-modal" value="' + $("#acc_group_id_group_modal").val() + '" />' +
			'<input type="hidden" name="acc_group_code_group_modal[]" class="acc-group-code-group-modal acc-group-code-check" value="' + $("#acc_group_code_group_modal").val() + '" />' +  
			'<input type="hidden" name="acc_group_name_group_modal[]" class="acc-group-name-group-modal acc-group-name-check" value="' + $("#acc_group_name_group_modal").val() + '" />' +   
			'<input type="hidden" name="fundamental_type_group_modal[]" class="fundamental-type-group-modal field-acc-group-fundamental-type-text" value="' + $('input[name=fundamental_type_group_modal]:checked').val() + '" />' + 
			'<input type="hidden" name="fundamental_type_text_group_modal[]" class="fundamental-type-text-group-modal field-acc-group-fundamental-type-text" value="' + $("#fundamental_type_text_group_modal").val() + '" />' + 
			'<input type="hidden" name="change_status_group_modal[]" class="change-status-group-modal" value="' + 'Y' + '" />';
			
		var table = $('#accGroupList').dataTable().api();
		
		if(!isEditMode){
			var rowNode = table.row.add( [
		              	    		accGroupId,
		              	    		accCatName,
		              	    		accSubCatName,
		              	    		accGroupCode,
		              	    		accGroupName,
		              	    		accGroupFundamentalType,
		              	            html
		              	                ]).draw( false ).node();
	        
			table.column( 0 ).visible( false );
	        $(rowNode).find(":eq(2)").css({"text-align": "center"});
	        $(rowNode).find(":eq(5)").css({"text-align": "center"});
	        
	        $(rowNode).find(":eq(2)").addClass("field-acc-group-code acc-group-code-check");
    	    $(rowNode).find(":eq(3)").addClass("field-acc-group-name acc-group-name-check");
    	    $(rowNode).find(":eq(4)").addClass("field-acc-group-fundamental-type-text");
    	        
	    }else{ 
	    	var rowData = table.row( $("#accGroupList tr.current-row") ).data();
	    	rowData[1] = accCatName;
	    	rowData[2] = accSubCatName;
	    	rowData[3] = accGroupCode
	    	rowData[4] = accGroupName;
	    	rowData[5] = accGroupFundamentalType;
	    	rowData[6] = html;
	    	
	    	table
	        .row( $("#accGroupList tr.current-row") )
	        .data( rowData )
	        .draw()
	    }
		
	    $("#accGroupModal").modal("hide");
		isDirty = true;
	}

	function uniqueCheckCodeAccGroup(){ 
		var codeChecks = $(".acc-group-code-check");
		var mCodes = $("#acc_group_code_msg").text();
		var resultCode = false;
		if(accGroupCodeGroupModal != mCodes ){ 
			$.each(codeChecks, function(idx, el){ 
				if($(el).closest("tr").find(":eq(2)").text()==mCodes){
					resultCode = true;
				}
			});
		}
		
		if(!resultCode){
			var lengthValue = $(".alert-maintain li").size;
			if(lengthValue.length == 0){
				$(".alert-maintain").addClass("hidden");
				$(".danger").removeClass("danger");
			}
		}
		
		return resultCode;
	}
	
	function uniqueCheckNameAccGroup(){ 
		var nameChecks = $(".acc-group-name-check");
		var mNames = $.trim($(".acc-group-modal-name").val().toUpperCase());
		var resultName = false;
		if (accGroupNameGroupModal.toUpperCase() != mNames) {
			$.each(nameChecks, function(idx, el){
				if($.trim($(el).val().toUpperCase())==mNames){
					resultName = true;
				}
			});
		}
		return resultName;
	}
/*
-----------------------------------------------------------------------------------------------
								End: Add or Modify Item Function
-----------------------------------------------------------------------------------------------
*/

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
								Start: Edit Row Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	
	var editRowAccGroup = function(el){
		$(".modal-title").text(glAccGroupEditTitle);
		ResetInputs("#accGroupModal");
		ResetErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accGroupList tr").removeClass("current-row");
		$(el).closest("tr").addClass("current-row");
		$("#acc_group_code_msg").empty();
		
		$("#acc_cat_id_group_modal").val($(el).closest("tr").find(".acc-cat-id-group-modal").val());
		$("#acc_cat_code_group_modal").val($(el).closest("tr").find(".acc-cat-code-group-modal").val());   
		$("#acc_cat_name_group_modal").val($(el).closest("tr").find(".acc-cat-name-group-modal").val());  
		$("#acc_cat_fundamental_type_code_group_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-code-group-modal").val()); 
		$("#acc_cat_fundamental_type_text_group_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-text-group-modal").val()); 
		
		$("#acc_subcat_id_group_modal").val($(el).closest("tr").find(".acc-subcat-id-group-modal").val());
		$("#acc_subcat_code_group_modal").val($(el).closest("tr").find(".acc-subcat-code-group-modal").val());
		$("#acc_subcat_name_group_modal").val($(el).closest("tr").find(".acc-subcat-name-group-modal").val());
		$("#acc_subcat_fundamental_type_code_group_modal").val($(el).closest("tr").find(".acc-subcat-fundamental-type-code-group-modal").val()); 
		$("#acc_subcat_fundamental_type_text_group_modal").val($(el).closest("tr").find(".acc-subcat-fundamental-type-text-group-modal").val()); 
		
		$("#acc_group_id_group_modal").val($(el).closest("tr").find(".acc-group-id-group-modal").val());
		$("#acc_group_code_group_modal").val($(el).closest("tr").find(".acc-group-code-group-modal").val());
		$("#acc_group_name_group_modal").val($(el).closest("tr").find(".acc-group-name-group-modal").val());
		//$("#fundamental_type_group_modal").val($(el).closest("tr").find(".fundamental-type-group-modal").val()); 
		$("#fundamental_type_text_group_modal").val($(el).closest("tr").find(".fundamental-type-text-group-modal").val()); 
		
		//alert($("#fundamental_type_subcat_modal").val());
		
		fundamentalTypeCodeGroupModal = $(el).closest("tr").find(".fundamental-type-group-modal").val();
		
		var $radios = $('input:radio[name=fundamental_type_group_modal]');
    	$radios.filter('[value='+fundamentalTypeCodeGroupModal+']').prop('checked', true);
    	
		
		//alert(fundamentalTypeCodeSubCatModal);
		
		$("#accGroupModal").modal('show');
		$(".modal-backdrop.fade.in").off("click");
    	$(".modal").off("keydown");
    	$("#check_edit_mode_group_modal").val("Y");
    	accGroupCodeGroupModal = $("#acc_cat_code_group_modal").val()+$("#acc_subcat_code_group_modal").val()+$("#acc_group_code_group_modal").val();
    	accGroupNameGroupModal = $("#acc_group_name_group_modal").val();
	    InitErrorChange();
	    
	    $("#accGroupFundamentalTypeDiv").show();	
	    //alert($("#acc_subcat_fundamental_type_code_group_modal").val());
	    
	    if ($("#acc_subcat_fundamental_type_code_group_modal").val() == "Current_Assets") {
		 	$("#Current_Assets").show();
		 	$("#NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].current-asset:checked').val() == null){
        		$("#fundamental_type_group_modal11").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonCurrent_Assets") { 
		 	$("#NonCurrent_Assets").show();
		 	$("#Current_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-current-asset:checked').val() == null){
		 		$("#fundamental_type_group_modal21").prop("checked", true);
		 	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Current_Liabilities"){
		 	$("#Current_Liabilities").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].current-liability:checked').val() == null){
        		$("#fundamental_type_group_modal31").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonCurrent_Liabilities"){
		 	$("#NonCurrent_Liabilities").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-current-liability:checked').val() == null){
        		$("#fundamental_type_group_modal41").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Share_Capital"){
		 	$("#Share_Capital").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide(); 
		 	
		 	if($('input[name=fundamental_type_group_modal].share-capital:checked').val() == null){
        		$("#fundamental_type_group_modal51").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Retained_Earnings"){
		 	$("#Retained_Earnings").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].retained-earning:checked').val() == null){
        		$("#fundamental_type_group_modal61").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Reserves_Surplus"){
			 $("#Reserves_Surplus").show();
			 $("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Operating_Income, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
			 
			 if($('input[name=fundamental_type_group_modal].reserves-surplus:checked').val() == null){
        		$("#fundamental_type_group_modal71").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Operating_Income"){
		 	$("#Operating_Income").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #NonOperating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].operating-income:checked').val() == null){
        		$("#fundamental_type_group_modal81").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "NonOperating_Income"){
		 	$("#NonOperating_Income").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #Direct_Expense, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].non-operating-income:checked').val() == null){
        		$("#fundamental_type_group_modal91").prop("checked", true);
        	}
		 } else if($('#acc_subcat_fundamental_type_code_group_modal').val() == "Direct_Expense"){
		 	$("#Direct_Expense").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Indirect_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].direct-expense:checked').val() == null){
        		$("#fundamental_type_group_modal101").prop("checked", true);
        	}
		 } else {
		 	$("#Indirect_Expense").show();
		 	$("#Current_Assets, #NonCurrent_Assets, #Current_Liabilities, #NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Direct_Expense").hide();
		 	
		 	if($('input[name=fundamental_type_group_modal].indirect-expense:checked').val() == null){
        		$("#fundamental_type_group_modal111").prop("checked", true);
        	}
		 }
	    
	    $("#btnAccSubCat").on("click",function(){	
			ShowModal("fin/gl/accsubcat/index/?actioncallback=loadAccSubCat", null, "searchAccSubCatList");
		});
	};
	
/*
-----------------------------------------------------------------------------------------------
							End: Edit Row Function
-----------------------------------------------------------------------------------------------
*/	


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
							Start: Item Delete Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	var delRowAccGroup = function(el){
		deleteRowCountAccGroup++;
		
		$("#change_status_group_modal").val("Y");
		var id = $(el).closest("tr").find(".acc-group-id-group-modal").val();
		var code = $(el).closest("tr").find(".acc-group-code-group-modal").val();
		var name = $(el).closest("tr").find(".acc-group-name-group-modal").val();
		
		hasSubCatDeleteDependency(el, id, name); //call delete dependency function
	};
		
	function hasSubCatDeleteDependency(el, id, code){
		$.ajax({
            type : "GET",
            url : "fin/gl/accgroup/delete?id="+id ,
            dataType : 'json',
            success : function(data) {
            	if (data.outcome == 'success') {
    				/*
    				 checking delete dependency. This function is implemented in common.js
    				 */
    				deleteDataTableRow("accGroupList","acc-group-id-group-modal", el, "deleteAccGroupDataList", "deleted_acc_group_data", "deleted-acc-group-data"  );
    			}else{
    				ShowErrorDependency(glAccGroupDependencyTitleErrorMsg, dependentSweetAlertMsgText, data.data, code);
    			} 
            }
          
        });
	}
			
/*
-----------------------------------------------------------------------------------------------
								End: Item Delete Function
-----------------------------------------------------------------------------------------------
*/

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
								Start: Show Error Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	function errorShowAccGroup(arr){ 
		var msg = '';
		for (var i = 0; i < arr.length; i++) { 
			var serErrorClass = $("."+arr[i].split("###")[2]);
			var serErrorValue = arr[i].split("###")[1];
			var serErrorMessage = arr[i].split("###")[0];
			$.each(serErrorClass, function(idx, el){ debugger;
				var errorClassValue = $(el).closest("tr").find("td:eq(2)").text();
				if(serErrorValue == errorClassValue){
					$(el).addClass("danger");
					$(el).closest("tr").find("td:last").append("<li class='hidden'>"+serErrorMessage+"</li>");
				}
			});
		};
		
		rmDupLiAccGroup();
		
		$(".danger").mouseover(function(){
			var lis = $(this).closest("tr").find("td:last li");
			var result = "";
			$.each(lis, function(idx, el){
				result += "- "+$(el).text() + '\n';
			});
			$(this).attr("title", result);
		});
		return true;
	}
	
	function rmDupLiAccGroup(){
		var trList = $('#accGroupList tr');
		$(trList).each(function(){
			var liList = $(this).find("td:last li");
			var liText = '';
			$(liList).each(function(){
				var text = $(this).text(); 
				 if (liText.indexOf('|'+ text + '|') == -1){
					 liText += '|'+ text + '|';
				 }else{
					 $(this).remove();
				 }
					 
			});
		});
	}

/*
-----------------------------------------------------------------------------------------------
								End: Show Error Function
-----------------------------------------------------------------------------------------------
*/
		
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
								Start: Common Functions
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	
	var accGroupCodeChange = function(el){ 
		valueAccGroupCodeGroupModal = $("#acc_group_code_group_modal").val();
		$("#acc_group_code_msg").text(valueAccCatCodeGroupModal + valueAccSubCatCodeGroupModal + valueAccGroupCodeGroupModal);
	} 
	
	$("#btnAccGroupCancel, #btnAccGroupModalClose").on("click", function(){
		$("#accGroupList tr").removeClass("current-row");
		$("#accGroupModal").modal("hide");
	});
	
	function refreshDeleteAccGroupDataList() {
		$("#deleteAccGroupDataList > tbody tr").html("");
		deleteRowCountAccGroup = 0;
	}

/*
-----------------------------------------------------------------------------------------------
								End: Common Functions
-----------------------------------------------------------------------------------------------
*/	
		
/*
===============================================================================================
===============================================================================================
						      End: Account Group Functions
===============================================================================================
===============================================================================================
*/
		
		