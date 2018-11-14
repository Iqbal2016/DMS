/*
===============================================================================================
===============================================================================================
						Start: Account Sub-Group Functions
===============================================================================================
===============================================================================================
*/
	

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
							Start: Add Button Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	$("#btnAccSubGroupAdd").on("click", function(){ 
		$(".modal-title").text(glAccSubGroupCreateTitle);
		ResetInputs("#accSubGroupModal");
		ResetErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accSubGroupList tr").removeClass("current-row");
		$("#accSubGroupModal").modal();
		$(".modal-backdrop.fade.in").off("click");
		$(".modal").off("keydown");
		$("#check_edit_mode_subgroup_modal").val("N");
		$("#acc_subgroup_code_msg").empty();
		
		$("#accSubGroupFundamentalTypeDiv").hide();
		
		$("#btnAccGrp").on( "click", function() { 
			ShowModal("fin/gl/accgroup/index/?actioncallback=loadAccGroup", null, "searchAccGrpList");
		});
	});
	
	var fundamentalTypeCodeSubGroupModal = "";
	
	function loadAccGroup(grp) {
		event.preventDefault();
		$("#acc_cat_id_subgroup_modal").val(grp.accCatId);
		$("#acc_cat_code_subgroup_modal").val(grp.accCatCode);
		$("#acc_cat_name_subgroup_modal").val(grp.accCatName);
		$("#acc_subcat_id_subgroup_modal").val(grp.accSubCatId);
		$("#acc_subcat_code_subgroup_modal").val(grp.accSubCatCode);
		$("#acc_subcat_name_subgroup_modal").val(grp.accSubCatName);
		$("#acc_group_id_subgroup_modal").val(grp.id);
		$("#acc_group_code_subgroup_modal").val(grp.accGroupCode);
		$("#acc_group_name_subgroup_modal").val(grp.accGroupName);
		HideModal('searchAccGrpList');
		
		valueAccCatCodeSubGroupModal    	= grp.accCatCode;
		valueAccSubCatCodeSubGroupModal 	= grp.accSubCatCode;
		valueAccGroupCodeSubGroupModal  	= grp.accGroupCode
		valueAccSubGroupCodeSubGroupModal  	= $("#acc_subgroup_code_subgroup_modal").val();
		$("#acc_subgroup_code_msg").text(valueAccCatCodeSubGroupModal + valueAccSubCatCodeSubGroupModal + valueAccGroupCodeSubGroupModal + valueAccSubGroupCodeSubGroupModal);
		
		$("#acc_cat_fundamental_type_code_subgroup_modal").val($.trim(grp.accCatFundamentalTypeCode));
		$("#acc_cat_fundamental_type_text_subgroup_modal").val($.trim(grp.accCatFundamentalTypeText));
		$("#acc_subcat_fundamental_type_code_subgroup_modal").val($.trim(grp.accSubCatFundamentalTypeCode));
		$("#acc_subcat_fundamental_type_text_subgroup_modal").val($.trim(grp.accSubCatFundamentalTypeText));
		$("#acc_group_fundamental_type_code_subgroup_modal").val($.trim(grp.accGroupFundamentalTypeCode));
		$("#acc_group_fundamental_type_text_subgroup_modal").val($.trim(grp.accGroupFundamentalTypeText));
		
		$("#accSubGroupFundamentalTypeDiv").show();
		
		var $radios = $('input:radio[name=fundamental_type_subgroup_modal]');
	    $radios.filter('[value='+fundamentalTypeCodeSubGroupModal+']').prop('checked', true);
	    
	    //alert($("#acc_group_fundamental_type_code_subgroup_modal").val());
	    
    	if ($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Cash_Bank") {
		    $("#Cash_Bank").show();
		    $("#Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
		    
		    if($('input[name=fundamental_type_subgroup_modal].cash-bank:checked').val() == null){
        		$("#fundamental_type_subgroup_modal111").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accounts_Receivable") {
	    	$("#Accounts_Receivable").show();
	    	$("#Cash_Bank, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accounts-receivable:checked').val() == null){
        		$("#fundamental_type_subgroup_modal121").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Advance_Deposits_Prepayments") {
	    	$("#Advance_Deposits_Prepayments").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].advance-deposits-prepayments:checked').val() == null){
        		$("#fundamental_type_subgroup_modal131").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Inventory") {
	    	$("#Inventory").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Advance_Deposits_Prepayments, #Other_Current_Assets, #Assets_Short_Term_Loans, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].inventory:checked').val() == null){
        		$("#fundamental_type_subgroup_modal141").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Assets_Short_Term_Loans") {
	    	$("#Assets_Short_Term_Loans").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].assets-short-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal151").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Current_Assets") {
	    	$("#Other_Current_Assets").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Assets_Short_Term_Loans, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-current-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal161").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Fixed_Assets") {
	    	$("#Fixed_Assets").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Assets_Short_Term_Loans, #Other_Current_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].fixed-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal211").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Intangible_Assets") {
	    	$("#Intangible_Assets").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].intangible-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal221").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_NonCurrent_Assets") {
	    	$("#Other_NonCurrent_Assets").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-non-current-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal231").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accounts_Payable") {
	    	$("#Accounts_Payable").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accounts-payable:checked').val() == null){
        		$("#fundamental_type_subgroup_modal311").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Vendor_Advance_Deposits_Prepayments") {
	    	$("#Vendor_Advance_Deposits_Prepayments").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].vendor-advance-deposits-prepayments:checked').val() == null){
        		$("#fundamental_type_subgroup_modal321").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "LB_Short_Term_Loans") {
	    	$("#LB_Short_Term_Loans").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].lb-short-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal331").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Unearned_Revenue") {
	    	$("#Unearned_Revenue").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].unearned-revenue:checked').val() == null){
        		$("#fundamental_type_subgroup_modal341").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Regulatory_Payables") {
	    	$("#Regulatory_Payables").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].regulatory-payables:checked').val() == null){
        		$("#fundamental_type_subgroup_modal351").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accrued_Liabilities") {
	    	$("#Accrued_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accrued-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal361").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Current_Liabilities") {
	    	$("#Other_Current_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-current-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal371").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Long_Term_Loans") {
	    	$("#Long_Term_Loans").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].long-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal411").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_NonCurrent_Liabilities") {
	    	$("#Other_NonCurrent_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-non-current-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal421").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Share_Capital") {
	    	$("#Share_Capital").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].share-capital:checked').val() == null){
        		$("#fundamental_type_subgroup_modal511").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Retained_Earnings") {
	    	$("#Retained_Earnings").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].retained-earnings:checked').val() == null){
        		$("#fundamental_typ_subgroup_modale611").prop("checked", true);
        	}
		} 
    	
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Retained_Earnings") {
	    	$("#Reserves_Surplus").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Retained_Earnings, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].reserves-surplus:checked').val() == null){
        		$("#fundamental_type_subgroup_modal711").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Operating_Income") {
	    	$("#Operating_Income").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].operating-income:checked').val() == null){
        		$("#fundamental_type_subgroup_modal811").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "NonOperating_Income") {
	    	$("#NonOperating_Income").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type].non-operating-income:checked').val() == null){
        		$("#fundamental_type_subgroup_modal911").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Material_Costs") {
	    	$("#Material_Costs").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].material-costs:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1011").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Factory_Costs") {
	    	$("#Factory_Costs").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].factory-costs:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1021").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Revenue_Share") {
	    	$("#Revenue_Share").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].revenue-share:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1031").prop("checked", true);
        	}
		} 
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Direct_Expenses") {
	    	$("#Other_Direct_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-direct-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1041").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "SGA") {
	    	$("#SGA").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].sga:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1111").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Financial_Expenses") {
	    	$("#Financial_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].financial-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1121").prop("checked", true);
        	}
		} else {
	    	$("#Regulatory_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].regulatory-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1131").prop("checked", true);
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

	$("#btnAccSubGroupOk").on("click", function() {
		var result = CheckRequired('.acc-subgroup');
		
		/*if (!validateAccSubCat()) {
    		return;
    	} */
		
	    if (!result) {
	        InitHandlers();
	        InitErrorChange();
	        FocusError();
	        return;
	    } 
	    
	    $("#fundamental_type_text_subgroup_modal").val($.trim($("input[name='fundamental_type_subgroup_modal']:checked").parent().text()));  
		//$("#acc_cat_name_group_modal").val($("#acc_cat_code_subcat_modal option:selected").text());
		
		if ($("#accSubGroupList tr.current-row").length == 0 ) {
			$("#accSubGroupList tr:last").after('<tr class="current-row"></tr>');
		}
		
	  //*********************unique check******************************
	    if($("#check_edit_mode_subgroup_modal").val() == "N"){
	    	var resultCode = uniqueCheckCodeAccSubGroup();
	    	var resultName = uniqueCheckNameAccSubGroup();
			if(!resultCode && !resultName){
				addOrModifyRowAccSubGroup();
			} 
			
			//***********unique check message show**************************
			if(resultCode){
				ShowErrorMsg(glAccSubGroupEditErrorMsgTitle, glAccSubGroupCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccSubGroupEditErrorMsgTitle, glAccSubGroupNameUniqueErrorMsg);
			}
		}else{
			var resultCode = uniqueCheckCodeAccSubGroup();
			var resultName = uniqueCheckNameAccSubGroup();
			if(!resultCode && !resultName){
				addOrModifyRowAccSubGroup("edit");
			}
			//***********unique check message show**************************
			
			if(resultCode){
				ShowErrorMsg(glAccSubGroupEditErrorMsgTitle, glAccSubGroupCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccSubGroupEditErrorMsgTitle, glAccSubGroupNameUniqueErrorMsg);
			}
		}
	});
	
	function addOrModifyRowAccSubGroup(isEditMode){ 
		
		var accCatId = $("#acc_cat_id_subgroup_modal").val();
	    var accCatCode = $("#acc_cat_code_subgroup_modal").val();
	    var accCatName = $("#acc_cat_name_subgroup_modal").val();
	    
	    var accSubCatId = $("#acc_subcat_id_subgroup_modal").val();
	    var accSubCatCode = $("#acc_cat_code_subgroup_modal").val() + $("#acc_subcat_code_subgroup_modal").val();
	    var accSubCatName = $("#acc_subcat_name_subgroup_modal").val();
	    
	    var accGroupId   = $("#acc_group_id_subgroup_modal").val();
	    var accGroupCode = $("#acc_cat_code_subgroup_modal").val() + $("#acc_subcat_code_subgroup_modal").val() + $("#acc_group_code_subgroup_modal").val();
	    var accGroupName = $("#acc_group_name_subgroup_modal").val();
	    
	    var accSubGroupId   = $("#acc_subgroup_id_subgroup_modal").val();
	    var accSubGroupCode = $("#acc_cat_code_subgroup_modal").val() + $("#acc_subcat_code_subgroup_modal").val() + $("#acc_group_code_subgroup_modal").val() + $("#acc_subgroup_code_subgroup_modal").val();
	    var accSubGroupName = $("#acc_subgroup_name_subgroup_modal").val();
	    var accSubGroupFundamentalType = $("#fundamental_type_text_subgroup_modal").val();
	 
	    var html = 
	    	'<a href="fin/gl/accsubgrouprisk/create/' + $("#acc_subgroup_id_subgroup_modal").val() + '" class="btn-edit btn btn-xs" data-modal="true" data-target="#myModal"> ' +
	    		'<span class="fa fa-search-plus" data-toggle="tooltip" title="Select Common Risk"></span>' +
	    	'</a>&nbsp;' + 
	    	'<a href="fin/gl/accsubgroupcontrol/create/' + $("#acc_subgroup_id_subgroup_modal").val() + '" class="btn-edit btn btn-xs" data-modal="true">' +
	    		'<span class="fa fa-plus-square" data-toggle="tooltip" title="Select Common Control"></span>' +
	    	'</a>&nbsp;' +
	    	'<button type="button" onclick="editRowAccSubGroup(this);" class="btn btn-edit btn-xs"><span class="fa fa-edit"></span></button> ' + 
			'<button type="button" onclick="delRowAccSubGroup(this);" class="btn-del btn btn-xs"><span class="fa fa-trash"></span></button> ' + 
			
			'<input type="hidden" name="acc_cat_id_subgroup_modal[]" class="acc-cat-id-subgroup-modal" value="' + $("#acc_cat_id_subgroup_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_code_subgroup_modal[]" class="acc-cat-code-subgroup-modal" value="' + $("#acc_cat_code_subgroup_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_name_subgroup_modal[]" class="acc-cat-name-subgroup-modal" value="' + $("#acc_cat_name_subgroup_modal").val() + '" />' +  
			'<input type="hidden" name="acc_cat_fundamental_type_code_subgroup_modal[]" class="acc-cat-fundamental-type-code-subgroup-modal" value="' + $("#acc_cat_fundamental_type_code_subgroup_modal").val() + '" />' +      
			'<input type="hidden" name="acc_cat_fundamental_type_text_subgroup_modal[]" class="acc-cat-fundamental-type-text-subgroup-modal" value="' + $("#acc_cat_fundamental_type_text_subgroup_modal").val() + '" />' +   
			
			'<input type="hidden" name="acc_subcat_id_subgroup_modal[]" class="acc-subcat-id-subgroup-modal" value="' + $("#acc_subcat_id_subgroup_modal").val() + '" />' +
			'<input type="hidden" name="acc_subcat_code_subgroup_modal[]" class="acc-subcat-code-subgroup-modal" value="' + $("#acc_subcat_code_subgroup_modal").val() + '" />' +  
			'<input type="hidden" name="acc_subcat_name_subgroup_modal[]" class="acc-subcat-name-subgroup-modal" value="' + $("#acc_subcat_name_subgroup_modal").val() + '" />' +   
			'<input type="hidden" name="acc_subcat_fundamental_type_code_subgroup_modal[]" class="acc-subcat-fundamental-type-code-subgroup-modal" value="' + $("#acc_subcat_fundamental_type_code_subgroup_modal").val() + '" />' + 
			'<input type="hidden" name="acc_subcat_fundamental_type_text_subgroup_modal[]" class="acc-subcat-fundamental-type-text-subgroup-modal" value="' + $("#acc_subcat_fundamental_type_text_subgroup_modal").val() + '" />' + 
			
			'<input type="hidden" name="acc_group_id_subgroup_modal[]" class="acc-group-id-subgroup-modal" value="' + $("#acc_group_id_subgroup_modal").val() + '" />' +
			'<input type="hidden" name="acc_group_code_subgroup_modal[]" class="acc-group-code-subgroup-modal" value="' + $("#acc_group_code_subgroup_modal").val() + '" />' +  
			'<input type="hidden" name="acc_group_name_subgroup_modal[]" class="acc-group-name-subgroup-modal" value="' + $("#acc_group_name_subgroup_modal").val() + '" />' +   
			'<input type="hidden" name="acc_group_fundamental_type_code_subgroup_modal[]" class="acc-group-fundamental-type-code-subgroup-modal" value="' + $("#acc_group_fundamental_type_code_subgroup_modal").val() + '" />' + 
			'<input type="hidden" name="acc_group_fundamental_type_text_subgroup_modal[]" class="acc-group-fundamental-type-text-subgroup-modal" value="' + $("#acc_group_fundamental_type_text_subgroup_modal").val() + '" />' + 
			
			'<input type="hidden" name="acc_subgroup_id_subgroup_modal[]" class="acc-subgroup-id-subgroup-modal" value="' + $("#acc_subgroup_id_subgroup_modal").val() + '" />' +
			'<input type="hidden" name="acc_subgroup_code_subgroup_modal[]" class="acc-subgroup-code-subgroup-modal acc-subgroup-code-check" value="' + $("#acc_subgroup_code_subgroup_modal").val() + '" />' +  
			'<input type="hidden" name="acc_subgroup_name_subgroup_modal[]" class="acc-subgroup-name-subgroup-modal acc-subgroup-name-check" value="' + $("#acc_subgroup_name_subgroup_modal").val() + '" />' +   
			'<input type="hidden" name="fundamental_type_subgroup_modal[]" class="fundamental-type-subgroup-modal field-acc-subgroup-fundamental-type-text" value="' + $('input[name=fundamental_type_subgroup_modal]:checked').val() + '" />' + 
			'<input type="hidden" name="fundamental_type_text_subgroup_modal[]" class="fundamental-type-text-subgroup-modal field-acc-subgroup-fundamental-type-text" value="' + $("#fundamental_type_text_subgroup_modal").val() + '" />' + 
			'<input type="hidden" name="change_status_subgroup_modal[]" class="change-status-subgroup-modal" value="' + 'Y' + '" />' +

			'<input type="hidden" name="product_segment_required[]" class="product-segment-required" value="' + $("input[name='ch_product_segment_required']").val() + '" />' +
			'<input type="hidden" name="geographic_segment_required[]" class="geographic-segment-required" value="' + $("input[name='ch_geographic_segment_required']").val() + '" />' +
			'<input type="hidden" name="profit_center_required[]" class="profit-center-required" value="' + $("input[name='ch_profit_center_required']").val() + '" />' +
			'<input type="hidden" name="cost_center_required[]" class="cost-center-required" value="' + $("input[name='ch_cost_center_required']").val() + '" />' +
			'<input type="hidden" name="project_required[]" class="project-required" value="' + $("input[name='ch_project_required']").val() + '" />' +
			'<input type="hidden" name="wbs_required[]" class="wbs-required" value="' + $("input[name='ch_wbs_required']").val() + '" />' +
			'<input type="hidden" name="activity_required[]" class="activity-required" value="' + $("input[name='ch_activity_required']").val() + '" />' +
			'<input type="hidden" name="branch_required[]" class="branch-required" value="' + $("input[name='ch_branch_required']").val() + '" />' +
			'<input type="hidden" name="sbu_required[]" class="sbu-required" value="' + $("input[name='ch_sbu_required']").val() + '" />' +
			'<input type="hidden" name="internal_order_required[]" class="internal-order-required" value="' + $("input[name='ch_internal_order_required']").val() + '" />' +
			'<input type="hidden" name="lc_required[]" class="lc-required" value="' + $("input[name='ch_lc_required']").val() + '" />' +
	    	'<input type="hidden" name="purchase_order_required[]" class="purchase-order-required" value="' + $("input[name='ch_purchase_order_required']").val() + '" />' +
	    	'<input type="hidden" name="sales_order_required[]" class="sales-order-required" value="' + $("input[name='ch_sales_order_required']").val() + '" />' ;
	    
		var table = $('#accSubGroupList').dataTable().api();
		
		if(!isEditMode){
		var rowNode = table.row.add( [
		              	    		accSubGroupId,
		              	    		accCatName,
		              	    		accSubCatName,
		              	    		accGroupName,
		              	    		accSubGroupCode,
		              	    		accSubGroupName,
		              	    		accSubGroupFundamentalType,
		              	            html
		              	                ]).draw( false ).node();
		
        table.column( 0 ).visible( false );
        $(rowNode).find(":eq(3)").css({"text-align": "center"});
        $(rowNode).find(":eq(6)").css({"text-align": "center"});
        
        $(rowNode).find(":eq(3)").addClass("field-acc-subgroup-code acc-subgroup-code-check");
	    $(rowNode).find(":eq(4)").addClass("field-acc-subgroup-name acc-subgroup-name-check");
	    $(rowNode).find(":eq(5)").addClass("field-acc-subgroup-fundamental-type-text");
    	        
	}else{ 
	    	var rowData = table.row( $("#accSubGroupList tr.current-row") ).data();
	    	rowData[1] = accCatName;
	    	rowData[2] = accSubCatName;
	    	rowData[3] = accGroupName
	    	rowData[4] = accSubGroupCode;
	    	rowData[5] = accSubGroupName;
	    	rowData[6] = accSubGroupFundamentalType;
	    	rowData[7] = html;
	    	
	    	table
	        .row( $("#accSubGroupList tr.current-row") )
	        .data( rowData )
	        .draw()
	    }
		
	    $("#accSubGroupModal").modal("hide");
		isDirty = true;
	}
	
	
	function uniqueCheckCodeAccSubGroup(){
		var codeChecks = $(".acc-subgroup-code-check");
		var mCodes = $("#acc_subgroup_code_msg").text();
		var resultCode = false;
		if(accSubGroupCodeSubGroupModal != mCodes ){
			$.each(codeChecks, function(idx, el){ 
				if($(el).closest("tr").find(":eq(3)").text()==mCodes){
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
	
	function uniqueCheckNameAccSubGroup(){
		var nameChecks = $(".acc-subgroup-name-check");
		var mNames = $.trim($(".acc-subgroup-modal-name").val().toUpperCase());
		var resultName = false;
		if (accSubGroupNameSubGroupModal.toUpperCase() != mNames) {
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
	var editRowAccSubGroup = function(el){
		$(".modal-title").text(glAccSubGroupEditTitle);
		ResetInputs("#accSubGroupModal");
		ResetErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accSubGroupList tr").removeClass("current-row");
		$(el).closest("tr").addClass("current-row");
		$("#acc_subgroup_code_msg").empty();
		
		$("#acc_cat_id_subgroup_modal").val($(el).closest("tr").find(".acc-cat-id-subgroup-modal").val());
		$("#acc_cat_code_subgroup_modal").val($(el).closest("tr").find(".acc-cat-code-subgroup-modal").val());   
		$("#acc_cat_name_subgroup_modal").val($(el).closest("tr").find(".acc-cat-name-subgroup-modal").val());  
		$("#acc_cat_fundamental_type_code_subgroup_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-code-subgroup-modal").val()); 
		$("#acc_cat_fundamental_type_text_subgroup_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-text-subgroup-modal").val()); 
		
		$("#acc_subcat_id_subgroup_modal").val($(el).closest("tr").find(".acc-subcat-id-subgroup-modal").val());
		$("#acc_subcat_code_subgroup_modal").val($(el).closest("tr").find(".acc-subcat-code-subgroup-modal").val());
		$("#acc_subcat_name_subgroup_modal").val($(el).closest("tr").find(".acc-subcat-name-subgroup-modal").val());
		$("#acc_subcat_fundamental_type_code_subgroup_modal").val($(el).closest("tr").find(".acc-subcat-fundamental-type-code-subgroup-modal").val()); 
		$("#acc_subcat_fundamental_type_text_subgroup_modal").val($(el).closest("tr").find(".acc-subcat-fundamental-type-text-subgroup-modal").val()); 
		
		$("#acc_group_id_subgroup_modal").val($(el).closest("tr").find(".acc-group-id-subgroup-modal").val());
		$("#acc_group_code_subgroup_modal").val($(el).closest("tr").find(".acc-group-code-subgroup-modal").val());
		$("#acc_group_name_subgroup_modal").val($(el).closest("tr").find(".acc-group-name-subgroup-modal").val());
		$("#acc_group_fundamental_type_code_subgroup_modal").val($(el).closest("tr").find(".acc-group-fundamental-type-code-subgroup-modal").val()); 
		$("#acc_group_fundamental_type_text_subgroup_modal").val($(el).closest("tr").find(".acc-group-fundamental-type-text-subgroup-modal").val()); 
		
		$("#acc_subgroup_id_subgroup_modal").val($(el).closest("tr").find(".acc-subgroup-id-subgroup-modal").val());
		$("#acc_subgroup_code_subgroup_modal").val($(el).closest("tr").find(".acc-subgroup-code-subgroup-modal").val());
		$("#acc_subgroup_name_subgroup_modal").val($(el).closest("tr").find(".acc-subgroup-name-subgroup-modal").val());
		//$("#fundamental_type_group_modal").val($(el).closest("tr").find(".fundamental-type-group-modal").val()); 
		$("#fundamental_type_text_subgroup_modal").val($(el).closest("tr").find(".fundamental-type-text-subgroup-modal").val()); 
		
		//alert($(el).closest("tr").find(".profit-center-required").val());
		
		if($(el).closest("tr").find(".product-segment-required").val() == "true"){
			$("#product_segment_required").prop("checked", true);
			$("input[name='ch_product_segment_required']").val(true);
		}
		
		if($(el).closest("tr").find(".geographic-segment-required").val() == "true"){
			$("#geographic_segment_required").prop("checked", true);
			$("input[name='ch_geographic_segment_required']").val(true);
		}
		
		if($(el).closest("tr").find(".profit-center-required").val() == "true"){
			$("#profit_center_required").prop("checked", true);
			$("input[name='ch_profit_center_required']").val(true);
		}
		
		if($(el).closest("tr").find(".cost-center-required").val() == "true"){
			$("#cost_center_required").prop("checked", true);
			$("input[name='ch_cost_center_required']").val(true);
		}
		
		if($(el).closest("tr").find(".project-required").val() == "true"){
			$("#project_required").prop("checked", true);
			$("input[name='ch_project_required']").val(true);
		}
		
		if($(el).closest("tr").find(".wbs-required").val() == "true"){
			$("#wbs_required").prop("checked", true);
			$("input[name='ch_wbs_required']").val(true);
		}
		
		if($(el).closest("tr").find(".activity-required").val() == "true"){
			$("#activity_required").prop("checked", true);
			$("input[name='ch_activity_required']").val(true);
		}
		
		if($(el).closest("tr").find(".branch-required").val() == "true"){
			$("#branch_required").prop("checked", true);
			$("input[name='ch_branch_required']").val(true);
		}
		
		if($(el).closest("tr").find(".sbu-required").val() == "true"){
			$("#sbu_required").prop("checked", true);
			$("input[name='ch_sbu_required']").val(true);
		}
		
		if($(el).closest("tr").find(".internal-order-required").val() == "true"){
			$("#internal_order_required").prop("checked", true);
			$("input[name='ch_internal_order_required']").val(true);
		}
		
		if($(el).closest("tr").find(".lc-required").val() == "true"){
			$("#lc_required").prop("checked", true);
			$("input[name='ch_lc_required']").val(true);
		}
		
		if($(el).closest("tr").find(".purchase-order-required").val() == "true"){
			$("#purchase_order_required").prop("checked", true);
			$("input[name='ch_purchase_order_required']").val(true);
		}
		
		if($(el).closest("tr").find(".sales-order-required").val() == "true"){
			$("#sales_order_required").prop("checked", true);
			$("input[name='ch_sales_order_required']").val(true);
		}
		
		//$("input[name='ch_profit_center_required']").val($(el).closest("tr").find(".profit-center-required").val()); 
		
		//alert($("#fundamental_type_subcat_modal").val());
		
		fundamentalTypeCodeSubGroupModal = $(el).closest("tr").find(".fundamental-type-subgroup-modal").val();
		
		var $radios = $('input:radio[name=fundamental_type_subgroup_modal]');
    	$radios.filter('[value='+fundamentalTypeCodeSubGroupModal+']').prop('checked', true);
    	
		
		//alert(fundamentalTypeCodeSubCatModal);
		
		$("#accSubGroupModal").modal('show');
		$(".modal-backdrop.fade.in").off("click");
    	$(".modal").off("keydown");
    	$("#check_edit_mode_subgroup_modal").val("Y");
    	accSubGroupCodeSubGroupModal = $("#acc_cat_code_subgroup_modal").val()+$("#acc_subcat_code_subgroup_modal").val()+$("#acc_group_code_subgroup_modal").val()+$("#acc_subgroup_code_subgroup_modal").val();
    	accSubGroupNameSubGroupModal = $("#acc_subgroup_name_subgroup_modal").val();
	    InitErrorChange();
	    
	    $("#accSubGroupFundamentalTypeDiv").show();
	    
	    if ($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Cash_Bank") {
		    $("#Cash_Bank").show();
		    $("#Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
		    
		    if($('input[name=fundamental_type_subgroup_modal].cash-bank:checked').val() == null){
        		$("#fundamental_type_subgroup_modal111").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accounts_Receivable") {
	    	$("#Accounts_Receivable").show();
	    	$("#Cash_Bank, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accounts-receivable:checked').val() == null){
        		$("#fundamental_type_subgroup_modal121").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Advance_Deposits_Prepayments") {
	    	$("#Advance_Deposits_Prepayments").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].advance-deposits-prepayments:checked').val() == null){
        		$("#fundamental_type_subgroup_modal131").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Inventory") {
	    	$("#Inventory").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Advance_Deposits_Prepayments, #Other_Current_Assets, #Assets_Short_Term_Loans, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].inventory:checked').val() == null){
        		$("#fundamental_type_subgroup_modal141").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Assets_Short_Term_Loans") {
	    	$("#Assets_Short_Term_Loans").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].assets-short-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal151").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Current_Assets") {
	    	$("#Other_Current_Assets").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Assets_Short_Term_Loans, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-current-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal161").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Fixed_Assets") {
	    	$("#Fixed_Assets").show();
	    	$("#Accounts_Receivable, #Cash_Bank, #Inventory, #Advance_Deposits_Prepayments, #Assets_Short_Term_Loans, #Other_Current_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].fixed-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal211").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Intangible_Assets") {
	    	$("#Intangible_Assets").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].intangible-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal221").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_NonCurrent_Assets") {
	    	$("#Other_NonCurrent_Assets").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-non-current-assets:checked').val() == null){
        		$("#fundamental_type_subgroup_modal231").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accounts_Payable") {
	    	$("#Accounts_Payable").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accounts-payable:checked').val() == null){
        		$("#fundamental_type_subgroup_modal311").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Vendor_Advance_Deposits_Prepayments") {
	    	$("#Vendor_Advance_Deposits_Prepayments").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].vendor-advance-deposits-prepayments:checked').val() == null){
        		$("#fundamental_type_subgroup_modal321").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "LB_Short_Term_Loans") {
	    	$("#LB_Short_Term_Loans").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].lb-short-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal331").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Unearned_Revenue") {
	    	$("#Unearned_Revenue").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].unearned-revenue:checked').val() == null){
        		$("#fundamental_type_subgroup_modal341").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Regulatory_Payables") {
	    	$("#Regulatory_Payables").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].regulatory-payables:checked').val() == null){
        		$("#fundamental_type_subgroup_modal351").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Accrued_Liabilities") {
	    	$("#Accrued_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].accrued-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal361").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Current_Liabilities") {
	    	$("#Other_Current_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-current-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal371").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Long_Term_Loans") {
	    	$("#Long_Term_Loans").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].long-term-loans:checked').val() == null){
        		$("#fundamental_type_subgroup_modal411").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_NonCurrent_Liabilities") {
	    	$("#Other_NonCurrent_Liabilities").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-non-current-liabilities:checked').val() == null){
        		$("#fundamental_type_subgroup_modal421").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Share_Capital") {
	    	$("#Share_Capital").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].share-capital:checked').val() == null){
        		$("#fundamental_type_subgroup_modal511").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Retained_Earnings") {
	    	$("#Retained_Earnings").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].retained-earnings:checked').val() == null){
        		$("#fundamental_typ_subgroup_modale611").prop("checked", true);
        	}
		} 
	    
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Reserves_Surplus") {
	    	$("#Reserves_Surplus").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Share_Capital, #Retained_Earnings, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].reserves-surplus:checked').val() == null){
        		$("#fundamental_type_subgroup_modal711").prop("checked", true);
        	}
		} 
		
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Operating_Income") {
	    	$("#Operating_Income").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].operating-income:checked').val() == null){
        		$("#fundamental_type_subgroup_modal811").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "NonOperating_Income") {
	    	$("#NonOperating_Income").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].non-operating-income:checked').val() == null){
        		$("#fundamental_type_subgroup_modal911").prop("checked", true);
        	}
		} 
		
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Material_Costs") {
	    	$("#Material_Costs").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].material-costs:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1011").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Factory_Costs") {
	    	$("#Factory_Costs").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].factory-costs:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1021").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Revenue_Share") {
	    	$("#Revenue_Share").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Other_Direct_Expenses, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();   
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].revenue-share:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1031").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Other_Direct_Expenses") {
	    	$("#Other_Direct_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #SGA, #Financial_Expenses, #Regulatory_Expenses").hide();   
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].other-direct-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1041").prop("checked", true);
        	}
		} 
	    
	    
		else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "SGA") {
	    	$("#SGA").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #Financial_Expenses, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].sga:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1111").prop("checked", true);
        	}
		} else if($("#acc_group_fundamental_type_code_subgroup_modal").val() == "Financial_Expenses") {
	    	$("#Financial_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Regulatory_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].financial-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1121").prop("checked", true);
        	}
		} else {
	    	$("#Regulatory_Expenses").show();
	    	$("#Cash_Bank, #Accounts_Receivable, #Advance_Deposits_Prepayments, #Inventory, #Assets_Short_Term_Loans, #Other_Current_Assets, #Fixed_Assets, #Intangible_Assets, #Other_NonCurrent_Assets, #Accounts_Payable, #Vendor_Advance_Deposits_Prepayments, #LB_Short_Term_Loans, #Unearned_Revenue, #Regulatory_Payables, #Accrued_Liabilities, #Other_Current_Liabilities, #Long_Term_Loans, #Other_NonCurrent_Liabilities, #Share_Capital, #Retained_Earnings, #Reserves_Surplus, #Operating_Income, #NonOperating_Income, #Material_Costs, #Factory_Costs, #Revenue_Share, #Other_Direct_Expenses, #SGA, #Financial_Expenses").hide();
	    	
	    	if($('input[name=fundamental_type_subgroup_modal].regulatory-expenses:checked').val() == null){
        		$("#fundamental_type_subgroup_modal1131").prop("checked", true);
        	}
		} 
	    
	    $("#btnAccGrp").on( "click", function() { 
			ShowModal("fin/gl/accgroup/index/?actioncallback=loadAccGroup", null, "searchAccGrpList");
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
	
	var delRowAccSubGroup = function(el){
		deleteRowCountAccSubGroup++;
		
		$("#change_status_subgroup_modal").val("Y");
		var id = $(el).closest("tr").find(".acc-subgroup-id-subgroup-modal").val();
		var code = $(el).closest("tr").find(".acc-subgroup-code-subgroup-modal").val();
		var name = $(el).closest("tr").find(".acc-subgroup-name-subgroup-modal").val();
		
		hasAccSubGroupDeleteDependency(el, id, name); //call delete dependency function
	};
	
	function hasAccSubGroupDeleteDependency(el, id, code){ 
		$.ajax({
            type : "GET",
            url : "fin/gl/accsubgroup/delete?id="+id ,
            dataType : 'json',
            success : function(data) {
            	if (data.outcome == 'success') {
    				/*
    				 checking delete dependency. This function is implemented in common.js
    				 */
    				deleteDataTableRow("accSubGroupList","acc-subgroup-id-subgroup-modal", el, "deleteAccSubGroupDataList", "deleted_acc_subgroup_data", "deleted-acc-subgroup-data"  );
    			}else{
    				ShowErrorDependency(glAccSubGroupDependencyTitleErrorMsg, dependentSweetAlertMsgText, data.data, code);
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
	function errorShowAccSubGroup(arr){ 
		var msg = '';
		for (var i = 0; i < arr.length; i++) { 
			var serErrorClass = $("."+arr[i].split("###")[2]);
			var serErrorValue = arr[i].split("###")[1];
			var serErrorMessage = arr[i].split("###")[0];
			$.each(serErrorClass, function(idx, el){ debugger;
				var errorClassValue = $(el).closest("tr").find("td:eq(3)").text();
				if(serErrorValue == errorClassValue){
					$(el).addClass("danger");
					$(el).closest("tr").find("td:last").append("<li class='hidden'>"+serErrorMessage+"</li>");
				}
			});
		};
		
		rmDupLiAccSubGroup();
		
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
	
	function rmDupLiAccSubGroup(){
		var trList = $('#accSubGroupList tr');
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
	
	var accSubGroupCodeChange = function(el){
		valueAccSubGroupCodeSubGroupModal = $("#acc_subgroup_code_subgroup_modal").val();
		$("#acc_subgroup_code_msg").text(valueAccCatCodeSubGroupModal + valueAccSubCatCodeSubGroupModal + valueAccGroupCodeSubGroupModal + valueAccSubGroupCodeSubGroupModal);
	} 
	
	$("#btnAccSubGroupCancel, #btnAccSubGroupModalClose").on("click", function(){
		$("#accSubGroupList tr").removeClass("current-row");
		$("#accSubGroupModal").modal("hide");
	});
	
	function refreshDeleteAccSubGroupDataList() {
		$("#deleteAccSubGroupDataList > tbody tr").html("");
		deleteRowCountAccSubGroup = 0;
	}
	
	/*$("#product_segment_required").click(function () {
    	if ($('#product_segment_required').is(":checked")){
    		swal({
    			title: 'Please activate this field in GL Options brefore doing operation here!!',
    			text: "Please Check!!",
    			html: true,
    			type: "info",
				confirmButtonColor: "#007AFF"
    		}, function(){
    		});
    		
    		$("#product_segment_required").prop("checked", false);
    		$("input[name='ch_product_segment_required']").val(false);
    	}
    	else {
    		
    	}
	});*/

/*
-----------------------------------------------------------------------------------------------
								End: Common Functions
-----------------------------------------------------------------------------------------------
*/	
		
/*
===============================================================================================
===============================================================================================
						      End: Account Sub-Group Functions
===============================================================================================
===============================================================================================
*/
	
	