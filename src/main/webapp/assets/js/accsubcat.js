/*
===============================================================================================
===============================================================================================
						Start: Account Sub-Category Function
===============================================================================================
===============================================================================================
*/
	
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
							Start: Add Button Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

	$("#btnAccSubCatAdd").on("click", function(){ 
		$(".modal-title").text(glAccSubCatCreateTitle);
		ResetInputs("#accSubCatModal");
		ResetErrorChange();
		InitErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accSubCatList tr").removeClass("current-row");
		$("#accSubCatModal").modal();
		$(".modal-backdrop.fade.in").off("click");
		$(".modal").off("keydown");
		$("#check_edit_mode_subcat_modal").val("N");
		$("#acc_subcat_code_msg").empty();
		
		$("#Asset").show();
		$("#Liability, #Equity, #Income, #Expense").hide();
		$("#fundamental_type_subcat_modal1").prop("checked", true);
		
		$("#acc_cat_code_subcat_modal").val("1");
		
		populateCatSelectValue();
		getAccCat();
			
	   	$('#acc_cat_code_subcat_modal').change(function () {
	   		valueAccCatCodeSubCatModal = $("#acc_cat_code_subcat_modal").val();
			$("#acc_subcat_code_msg").text(valueAccCatCodeSubCatModal + valueAccSubCatCodeSubCatModal);
			
	    	$.ajax({
	            type : "GET",
	            url : "fin/gl/acccat/getacccat?acc_cat_code="
	                    + $('#acc_cat_code_subcat_modal').val(),
	            dataType : 'json',
	            success : function(data) { //console.log(data);
	                if(data != null) {
	                	$("#acc_cat_id_subcat_modal").val(data.id);	
	                	$("#acc_cat_fundamental_type_code_subcat_modal").val($.trim(data.accCatFundamentalTypeCode));
	                	$("#acc_cat_fundamental_type_text_subcat_modal").val($.trim(data.accCatFundamentalTypeText));
	                	
				        if ($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Asset") {
				        	$("#Asset").show();
							$("#Liability, #Equity, #Income, #Expense").hide();
							$("#fundamental_type_subcat_modal1").prop("checked", true);
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Liability") {
							$("#Liability").show();
							$("#Asset, #Equity, #Income, #Expense").hide();
							$("#fundamental_type_subcat_modal3").prop("checked", true);
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Equity"){
							$("#Equity").show();
							$("#Asset, #Liability, #Income, #Expense").hide();
							$("#fundamental_type_subcat_modal5").prop("checked", true);
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Income"){
							$("#Income").show();
							$("#Asset, #Liability, #Equity, #Expense").hide();
							$("#fundamental_type_subcat_modal8").prop("checked", true);
				        } else {
				        	$("#Expense").show();
							$("#Asset, #Liability, #Equity, #Income").hide();
							$("#fundamental_type_subcat_modal10").prop("checked", true);
				        }
	                }
	            }
			});
	    }); 

	});
	
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

	$("#btnAccSubCatOk").on("click", function() {
		var result = CheckRequired('.acc-subcat');
		
		/*if (!validateAccSubCat()) {
    		return;
    	} */
		
	    if (!result) {
	        InitHandlers();
	        InitErrorChange();
	        FocusError();
	        return;
	    } 
	    
	    $("#fundamental_type_text_subcat_modal").val($.trim($("input[name='fundamental_type_subcat_modal']:checked").parent().text()));  
		$("#acc_cat_name_subcat_modal").val($("#acc_cat_code_subcat_modal option:selected").text());
		
		if ($("#accSubCatList tr.current-row").length == 0 ) {
			$("#accSubCatList tr:last").after('<tr class="current-row"></tr>');
		}

	  //*********************unique check******************************
	    if($("#check_edit_mode_subcat_modal").val() == "N"){
	    	var resultCode = uniqueCheckCodeAccSubCat();
	    	var resultName = uniqueCheckNameAccSubCat();
			if(!resultCode && !resultName){
				addOrModifyRowAccSubCat();
			} 
			
			//***********unique check message show**************************
			if(resultCode){
				ShowErrorMsg(glAccSubCatEditErrorMsgTitle, glAccSubCatCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccSubCatEditErrorMsgTitle, glAccSubCatNameUniqueErrorMsg);
			}
		}else{
			var resultCode = uniqueCheckCodeAccSubCat();
			var resultName = uniqueCheckNameAccSubCat();
			if(!resultCode && !resultName){
				addOrModifyRowAccSubCat("edit");
			}
			//***********unique check message show**************************
			
			if(resultCode){
				ShowErrorMsg(glAccSubCatEditErrorMsgTitle, glAccSubCatCodeUniqueErrorMsg);
			}
			if(resultName){
				ShowErrorMsg(glAccSubCatEditErrorMsgTitle, glAccSubCatNameUniqueErrorMsg);
			}
		}
	});

	function addOrModifyRowAccSubCat(isEditMode){ 
		var accCatId = $("#acc_cat_id_subcat_modal").val();
	    var accCatCode = $("#acc_cat_code_subcat_modal").val();
	    var accCatName = $("#acc_cat_name_subcat_modal").val();
	    
	    var accSubCatId = $("#acc_subcat_id_subcat_modal").val();
	    var accSubCatCode = $("#acc_cat_code_subcat_modal").val() + $("#acc_subcat_code_subcat_modal").val();
	    var accSubCatName = $("#acc_subcat_name_subcat_modal").val();
	    var accSubCatFundamentalType = $("#fundamental_type_text_subcat_modal").val();
	    
	    var html = 
			'<button type="button" onclick="editRowAccSubCat(this);" class="btn btn-edit btn-xs"><span class="fa fa-edit"></span></button> ' + 
			'<button type="button" onclick="delRowAccSubCat(this);" class="btn-del btn btn-xs"><span class="fa fa-trash"></span></button> ' + 
			'<input type="hidden" name="acc_cat_id_subcat_modal[]" class="acc-cat-id-subcat-modal" value="' + $("#acc_cat_id_subcat_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_code_subcat_modal[]" class="acc-cat-code-subcat-modal" value="' + $("#acc_cat_code_subcat_modal").val() + '" />' +
			'<input type="hidden" name="acc_cat_name_subcat_modal[]" class="acc-cat-name-subcat-modal" value="' + $("#acc_cat_name_subcat_modal").val() + '" />' +  
			'<input type="hidden" name="acc_cat_fundamental_type_code_subcat_modal[]" class="acc-cat-fundamental-type-code-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_code_subcat_modal").val() + '" />' +      
			'<input type="hidden" name="acc_cat_fundamental_type_text_subcat_modal[]" class="acc-cat-fundamental-type-text-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_text_subcat_modal").val() + '" />' +   
			
			'<input type="hidden" name="acc_subcat_id_subcat_modal[]" class="acc-subcat-id-subcat-modal" value="' + $("#acc_subcat_id_subcat_modal").val() + '" />' +
			'<input type="hidden" name="acc_subcat_code_subcat_modal[]" class="acc-subcat-code-subcat-modal acc-subcat-code-check" value="' + $("#acc_subcat_code_subcat_modal").val() + '" />' +  
			'<input type="hidden" name="acc_subcat_name_subcat_modal[]" class="acc-subcat-name-subcat-modal acc-subcat-name-check" value="' + $("#acc_subcat_name_subcat_modal").val() + '" />' +   
			'<input type="hidden" name="fundamental_type_subcat_modal[]" class="fundamental-type-subcat-modal field-acc-subcat-fundamental-type-text" value="' + $('input[name=fundamental_type_subcat_modal]:checked').val() + '" />' + 
			'<input type="hidden" name="fundamental_type_text_subcat_modal[]" class="fundamental-type-text-subcat-modal field-acc-subcat-fundamental-type-text" value="' + $("#fundamental_type_text_subcat_modal").val() + '" />' + 
			'<input type="hidden" name="change_status_subcat_modal[]" class="change-status-subcat-modal" value="' + 'Y' + '" />';
	    
    
	    var table = $('#accSubCatList').dataTable().api();
	    
	    if(!isEditMode){
	    	var rowNode = table.row.add( [
			              	    		accSubCatId,
			              	    		accCatName,
			              	    		accSubCatCode,
			              	    		accSubCatName,   
			              	    		accSubCatFundamentalType,
			              	            html
			              	                ]).draw( false ).node();
	    	
	        table.column( 0 ).visible( false );
	        $(rowNode).find(":eq(1)").css({"text-align": "center"});
	        $(rowNode).find(":eq(4)").css({"text-align": "center"});
	        $(rowNode).find(":eq(1)").addClass("field-acc-subcat-code acc-subcat-code-check");
    	    $(rowNode).find(":eq(2)").addClass("field-acc-subcat-name acc-subcat-name-check");
	        $(rowNode).find(':eq(3)').addClass('field-acc-subcat-fundamental-type-text');
    	        
	    }else{ 
	    	var rowData = table.row( $("#accSubCatList tr.current-row") ).data();
	    	rowData[1] = accCatName;
	    	rowData[2] = accSubCatCode;
	    	rowData[3] = accSubCatName;
	    	rowData[4] = accSubCatFundamentalType;
	    	rowData[5] = html;
	    	
	    	table
	        .row( $("#accSubCatList tr.current-row") )
	        .data( rowData )
	        .draw()
	    }
		
	    $("#accSubCatModal").modal("hide");
		isDirty = true;
	}

	function uniqueCheckCodeAccSubCat(){
		var codeChecks = $(".acc-subcat-code-check");
		var mCodes = $("#acc_subcat_code_msg").text();
		var resultCode = false;
		if(accSubCatCodeSubCatModal != mCodes ){
			$.each(codeChecks, function(idx, el){ 
				if($(el).closest("tr").find(":eq(1)").text()==mCodes){
					resultCode = true;
				}
			});
		}
		
		if(!resultCode){
			//$(".field_voucher_type_code_unique").remove();
			var lengthValue = $(".alert-maintain li").size;
			if(lengthValue.length == 0){
				$(".alert-maintain").addClass("hidden");
				$(".danger").removeClass("danger");
			}
		}
		
		return resultCode;
	}
	
	function uniqueCheckNameAccSubCat(){
		var nameChecks = $(".acc-subcat-name-check");
		var mNames = $.trim($(".acc-subcat-modal-name").val().toUpperCase());
		//alert(mNames);
		var resultName = false;
		if (accSubCatNameSubCatModal.toUpperCase() != mNames) {
			$.each(nameChecks, function(idx, el){ //alert($(el).val().toUpperCase());
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
	
	var editRowAccSubCat = function(el){
		$(".modal-title").text(glAccSubCatEditTitle);
		ResetInputs("#accSubCatModal");
		ResetErrorChange();
		$(".alert").empty().addClass("hidden");
		$("#accSubCatList tr").removeClass("current-row");
		$(el).closest("tr").addClass("current-row");
		$("#acc_subcat_code_msg").empty();
		
		$("#acc_cat_id_subcat_modal").val($(el).closest("tr").find(".acc-cat-id-subcat-modal").val());
		$("#acc_cat_code_subcat_modal").val($(el).closest("tr").find(".acc-cat-code-subcat-modal").val());   
		$("#acc_cat_name_subcat_modal").val($(el).closest("tr").find(".acc-cat-name-subcat-modal").val());  
		$("#acc_cat_fundamental_type_code_subcat_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-code-subcat-modal").val()); 
		$("#acc_cat_fundamental_type_text_subcat_modal").val($(el).closest("tr").find(".acc-cat-fundamental-type-text-subcat-modal").val()); 
		
		$("#acc_subcat_id_subcat_modal").val($(el).closest("tr").find(".acc-subcat-id-subcat-modal").val());
		$("#acc_subcat_code_subcat_modal").val($(el).closest("tr").find(".acc-subcat-code-subcat-modal").val());
		$("#acc_subcat_name_subcat_modal").val($(el).closest("tr").find(".acc-subcat-name-subcat-modal").val());
		$("#fundamental_type_text_subcat_modal").val($(el).closest("tr").find(".fundamental-type-text-subcat-modal").val()); 
		
		$("#accSubCatModal").modal('show');
		$(".modal-backdrop.fade.in").off("click");
    	$(".modal").off("keydown");
    	$("#check_edit_mode_subcat_modal").val("Y");
    	accSubCatCodeSubCatModal = $("#acc_subcat_code_subcat_modal").val();
    	accSubCatNameSubCatModal = $("#acc_subcat_name_subcat_modal").val();
	    InitErrorChange();
	    
		var fundamentalTypeCodeSubCatModal = $(el).closest("tr").find(".fundamental-type-subcat-modal").val();
		var $radios = $('input:radio[name=fundamental_type_subcat_modal]');
    	$radios.filter('[value='+fundamentalTypeCodeSubCatModal+']').prop('checked', true);
    	
	    if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Asset") {
			$("#Asset").show();
			$("#Liability, #Equity, #Income, #Expense").hide();
		} else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Liability") {
			$("#Liability").show();
			$("#Asset, #Equity, #Income, #Expense").hide();
		} else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Equity"){
			$("#Equity").show();
			$("#Asset, #Liability, #Income, #Expense").hide();
		} else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Income"){
			$("#Income").show();
			$("#Asset, #Liability, #Equity, #Expense").hide();
		} else {
			$("#Expense").show();
			$("#Asset, #Liability, #Equity, #Income").hide();
		} 
	    
	    $('#acc_cat_code_subcat_modal').on('change', function() {
	    	$.ajax({
	            type : "GET",
	            url : "fin/gl/acccat/getacccat?acc_cat_code="
	                    + $('#acc_cat_code_subcat_modal').val(),
	            dataType : 'json',
	            success : function(data) {
	                if(data != null) {//console.log(data) 
	                	$("#acc_cat_id_subcat_modal").val(data.id);	

	                	$("#acc_cat_fundamental_type_code_subcat_modal").val($.trim(data.accCatFundamentalTypeCode));
	                	$("#acc_cat_fundamental_type_text_subcat_modal").val($.trim(data.accCatFundamentalTypeText));
	                	
				        if ($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Asset") {
				        	$("#Asset").show();
							$("#Liability, #Equity, #Income, #Expense").hide();
							
							if($('input[name=fundamental_type_subcat_modal].Asset:checked').val() == null){
		                		$("#fundamental_type_subcat_modal1").prop("checked", true);
		                	}
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Liability") {
							$("#Liability").show();
							$("#Asset, #Equity, #Income, #Expense").hide();
							
							if($('input[name=fundamental_type_subcat_modal].Liability:checked').val() == null){
		                		$("#fundamental_type_subcat_modal3").prop("checked", true);
		                	}
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Equity"){
							$("#Equity").show();
							$("#Asset, #Liability, #Income, #Expense").hide();
							
							if($('input[name=fundamental_type_subcat_modal].Equity:checked').val() == null){
		                		$("#fundamental_type_subcat_modal5").prop("checked", true);
		                	}
				        } else if($("#acc_cat_fundamental_type_code_subcat_modal").val() == "Income"){
							$("#Income").show();
							$("#Asset, #Liability, #Equity, #Expense").hide();
							
							if($('input[name=fundamental_type_subcat_modal].Income:checked').val() == null){
		                		$("#fundamental_type_subcat_modal8").prop("checked", true);
		                	}
				        } else {
				        	$("#Expense").show();
							$("#Asset, #Liability, #Equity, #Income").hide();
							
							if($('input[name=fundamental_type].Expense:checked').val() == null){
		                		$("#fundamental_type_subcat_modal10").prop("checked", true);
		                	}
				        }
	                }
	            }
			});
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
	var delRowAccSubCat = function(el){
		deleteRowCountAccSubCat++;
		
		//$("#change_status_subcat_modal").val("Y");
		var id = $(el).closest("tr").find(".acc-subcat-id-subcat-modal").val();
		var code = $(el).closest("tr").find(".acc-subcat-code-subcat-modal").val();
		var name = $(el).closest("tr").find(".acc-subcat-name-subcat-modal").val();
		
		hasAccCatDeleteDependency(el, id, name); //call delete dependency function
	};
	
	function hasAccCatDeleteDependency(el, id, code){
		$.ajax({
            type : "GET",
            url : "fin/gl/accsubcat/delete?id="+id ,
            dataType : 'json',
            success : function(data) {
            	if (data.outcome == 'success') {
    				/*
    				 checking delete dependency. This function is implemented in common.js
    				 */
    				deleteDataTableRow("accSubCatList","acc-subcat-id-subcat-modal", el, "deleteAccSubCatDataList", "deleted_acc_subcat_data", "deleted-acc-subcat-data", deleteRowCountAccSubCat  );
    			}else{
    				ShowErrorDependency(glAccSubCatDependencyTitleErrorMsg, dependentSweetAlertMsgText, data.data, code);
    			} 
            }
          
        });
	}
	
	function refreshDeleteAccSubCatDataList() {
		$("#deleteAccSubCatDataList > tbody tr").html("");
		deleteRowCountAccSubCat = 0;
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
	function errorShowAccSubCat(arr){ console.log(arr);
		var msg = '';
		for (var i = 0; i < arr.length; i++) { 
			var serErrorClass = $("."+arr[i].split("###")[2]);
			var serErrorValue = arr[i].split("###")[1];
			var serErrorMessage = arr[i].split("###")[0];
			$.each(serErrorClass, function(idx, el){ debugger;
				var errorClassValue = $(el).closest("tr").find("td:eq(1)").text();
				if(serErrorValue == errorClassValue){
					$(el).addClass("danger");
					$(el).closest("tr").find("td:last").append("<li class='hidden'>"+serErrorMessage+"</li>");
				}
			});
		};
		rmDupLiAccSubCat();
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
	
	function rmDupLiAccSubCat(){
		var trList = $('#accSubCatList tr');
		$(trList).each(function(){
			var liList = $(this).find("td:last li");
			var liText = '';
			$(liList).each(function(){
				var text = $(this).text(); //alert(text);
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
	var accSubCatCodeChange = function(el) {
		valueAccCatCodeSubCatModal = $("#acc_cat_code_subcat_modal").val();
		valueAccSubCatCodeSubCatModal = $("#acc_subcat_code_subcat_modal").val();
		$("#acc_subcat_code_msg").text(valueAccCatCodeSubCatModal + valueAccSubCatCodeSubCatModal);
	};
	
	function getAccCat(){
		$('#acc_cat_code_subcat_modal').val("1");
		$.ajax({
            type : "GET",
            url : "fin/gl/acccat/getacccat?acc_cat_code="
                    + $('#acc_cat_code_subcat_modal').val(),
            dataType : 'json',
            success : function(data) { //console.log(data);
                if(data != null) {
                	$("#acc_cat_id_subcat_modal").val(data.id);	
                	//alert($("#acc_cat_id_subcat_modal").val());
                	$("#acc_cat_fundamental_type_code_subcat_modal").val(data.accCatFundamentalTypeCode);
                	$("#acc_cat_fundamental_type_text_subcat_modal").val(data.accCatFundamentalTypeText);
                	//alert($("#acc_cat_fundamental_type_code").val());
                }
            }
		});
	}
	
	$("#btnAccSubCatCancel, #btnAccSubCatModalClose").on("click", function(){
		$("#accSubCatList tr").removeClass("current-row");
		$("#accSubCatModal").modal("hide");
	});
	
	function populateCatSelectValue() {
        $.ajax({
            type : "GET",
            url : "fin/gl/acccat/get-acc-cat-list" ,
            dataType : 'json',
            success : function(data) {
            	//getAccCat(); //call acc cat information
            	$('#acc_cat_code_subcat_modal').empty();
                for(var i=0; i<data.length; i++) {
                	$('#acc_cat_code_subcat_modal').append('<option value="' + data[i].accCatCode + '">' + data[i].accCatName + '</option>');
                }
          
            }
        });
	}

/*
-----------------------------------------------------------------------------------------------
								End: Common Functions
-----------------------------------------------------------------------------------------------
*/
	
	
/*
===============================================================================================
===============================================================================================
						End: Account Sub-Category Function
===============================================================================================
===============================================================================================
*/
	
	