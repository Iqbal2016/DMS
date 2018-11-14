/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
						Start: Account Sub-Category Function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
	
	$("#btnAccSubCatCancel, #btnAccSubCatModalClose").on("click", function(){
		$("#accSubCatList tr").removeClass("current-row");
		$("#accSubCatModal").modal("hide");
	});
	
	$("#btnAccSubCatAdd").on("click", function(){ 
		$(".modal-title").text('${map.glAccSubCatCreateTitle}');
		ResetInputs("#accSubCatModal");
		ResetErrorChange();
		$(".modal-body .alert").addClass("hidden");
		$("#accSubCatList tr").removeClass("current-row");
		$("#accSubCatModal").modal();
		$(".modal-backdrop.fade.in").off("click");
		$(".modal").off("keydown");
		$("#check_edit_mode_subcat_modal").val("N");
		
		$("#Asset").show();
		$("#Liability, #Equity, #Income, #Expense").hide();
		$("#fundamental_type_subcat_modal1").prop("checked", true);
		
		$("#acc_cat_code_subcat_modal").val("1");
		
		getAccCat();
			
	   	$('#acc_cat_code_subcat_modal').change(function () {
	   		valueAccCatSubCatModal = $("#acc_cat_code_subcat_modal").val();
			$("#acc_subcat_code_msg").text(valueAccCatSubCatModal + valueAccSubCatSubCatModal);
			
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
	
	var delRowAccSubCat = function(el) {
		swal({
				title : "${data.deleteSweetAlertMsgTitle}",
				text  : "${data.deleteSweetAlertMsgText}",
				type  : "${data.deleteSweetAlertMsgWarning}",
				showCancelButton : true,
				confirmButtonColor : "#007AFF",
				confirmButtonText : "${data.deleteSweetAlertMsgConfirmButtonText}",
				closeOnConfirm : false
			 }, function() {
					$("#AccSubCat tr").removeClass("current-row");
					var row = $(el).closest("tr");
					var accsubcat_id = $(el).closest('tr').children('td:eq(0)').text();

					$.post("fin/gl/accsubcat/delete/", {
						id : accsubcat_id,
						_csrf : "${_csrf.token}",
					}, function(data, status) {
						
						if (data.outcome == 'success') {
							console.log(data.outcome);
							ShowSuccessMsg('Deleted.', data.message);
							LoadMainContent('fin/gl/acccat/manage');
						} else {
				    		swal({
				    			title: "Can't Delete",
	    		    			type: "info",
	    		    			text: "This Object is used in some others Entities", /* This entity is used in some others entities.Click show list button to see details. */
				    			html: true,
			    				showCancelButton: true,
			    				confirmButtonColor: "#007AFF",
			    				confirmButtonText: "Show List",
			    				closeOnConfirm: true,
			    				allowOutsideClick: false
				    		}, function(){
				    			ShowModal("fin/gl/accsubcat/showdependencylist?id=" + accsubcat_id, "modal-md", "list-modal");
				    		});
				    	}
					});

				return false;
			}); 
		};

	
	InitErrorChange();
	function validateAccSubCat(){ 
		SyncOptionText();
		result = true;
    	var arr = [], str; 
    	var dict = [];
    	if($(".acc-subcat").is(":visible")){
    		$(".acc-subcat").find("input.required, textarea.required").each(function(i, item){
        		$(this).removeClass("error");
        		MarkCross($(this).closest(".form-group").find("label"), false);
        		if ($(item).val().trim() == "") {
        			result = false;
        			dict.push({
        			    key:   $(item).attr("id"),
        			    value: getLableName($(this).closest(".form-group").find('label').html())
        			});
        			
        			showErrorMessage(dict);
        			
        			$(this).addClass("error");
        			MarkCross($(this).closest(".form-group").find("label"), true);
        		}
        	});
    	}
    	return result;
    }
	
	$("#btnAccSubCatOk").on("click", function(){ 
		var result = CheckRequired('.acc-subcat');
		
		if (!validateAccSubCat()) {
    		return;
    	} 
		
		$("#fundamental_type_text_subcat_modal").val($.trim($("input[name='fundamental_type_subcat_modal']:checked").parent().text()));  
		$("#acc_cat_name_subcat_modal").val($("#acc_cat_code_subcat_modal option:selected").text());
		
		if ($("#accSubCatList tr.current-row").length == 0 ) {
			$("#accSubCatList tr:last").after('<tr class="current-row"></tr>');
		}
		
		var accSubCatCodes = $(".acc-subcat-code-check");
		var accSubCatNames = $(".acc-subcat-name-check");
		var accSubCatModalCodes = $("#acc_subcat_code_msg").text();
		var accSubCatModalNames = $(".acc-subcat-modal-name").val();
		var resultCode = false;
		var resultName = false;
		//debugger;
		if($("#check_edit_mode_subcat_modal").val() == "N"){
			$.each(accSubCatCodes, function(idx, el){
				if($(el).closest("tr").find(":eq(2)").text()==accSubCatModalCodes){
					resultCode = true;
				}
			});
			$.each(accSubCatNames, function(idx, el){
				if($(el).val()==accSubCatModalNames){
					resultName = true;
				}
			});
			
			if(!resultCode && !resultName){
				$("#accSubCatList tr.current-row").html( 
						'<td class="hidden">' +  '</td>' +
						'<td >' + $("#acc_cat_name_subcat_modal").val() + '</td>' +
						'<td style="text-align: center">' + $("#acc_cat_code_subcat_modal").val() + $("#acc_subcat_code_subcat_modal").val() + '</td>' +
						'<td class="word-break">' + $("#acc_subcat_name_subcat_modal").val() + '</td>' +
						'<td class="word-break">' + $("#fundamental_type_text_subcat_modal").val() + '</td>' +
						'<td align="center">' + 
							'<button type="button" onclick="editRowAccSubCat(this);" class="btn btn-edit btn-xs"><span class="fa fa-edit"></span></button> ' + 
							'<button type="button" onclick="delRowAccSubCat(this);" class="btn-del btn btn-xs"><span class="fa fa-trash"></span></button> ' + 
							'<input type="hidden" name="acc_cat_id_subcat_modal[]" class="acc-cat-id-subcat-modal" value="' + $("#acc_cat_id_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_cat_code_subcat_modal[]" class="acc-cat-code-subcat-modal code_check" value="' + $("#acc_cat_code_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_cat_name_subcat_modal[]" class="acc-cat-name-subcat-modal code_check" value="' + $("#acc_cat_name_subcat_modal").val() + '" />' +  
							'<input type="hidden" name="acc_cat_fundamental_type_code_subcat_modal[]" class="acc-cat-fundamental-type-code-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_code_subcat_modal").val() + '" />' +      
							'<input type="hidden" name="acc_cat_fundamental_type_text_subcat_modal[]" class="acc-cat-fundamental-type-text-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_text_subcat_modal").val() + '" />' +   
							
							'<input type="hidden" name="acc_subcat_id_subcat_modal[]" class="acc-subcat-id-subcat-modal" value="' + $("#acc_subcat_id_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_subcat_code_subcat_modal[]" class="acc-subcat-code-subcat-modal code_check" value="' + $("#acc_subcat_code_subcat_modal").val() + '" />' +  
							'<input type="hidden" name="acc_subcat_name_subcat_modal[]" class="acc-subcat-name-subcat-modal name_check" value="' + $("#acc_subcat_name_subcat_modal").val() + '" />' +   
							'<input type="hidden" name="fundamental_type_subcat_modal[]" class="fundamental-type-subcat-modal code_check" value="' + $('input[name=fundamental_type_subcat_modal]:checked').val() + '" />' + 
							'<input type="hidden" name="fundamental_type_text_subcat_modal[]" class="fundamental-type-text-subcat-modal code_check" value="' + $("#fundamental_type_text_subcat_modal").val() + '" />' + 
							'<input type="hidden" name="change_status_subcat_modal[]" class="change-status-subcat-modal" value="' + 'Y' + '" />' +
						'</td>' 
				);
				$("#accSubCatList tr").removeClass("current-row");
				$("#accSubCatModal").modal("hide");
				isDirty = true; 
				//newRowCount=$('#accSubCatList tr').length;
			}
			
			if(resultCode){
				ShowErrorMsg('${map.glAccSubCatEditErrorMsgTitle}', 'Account Sub Category Code duplicate not allowed');
			}
			if(resultName){
				ShowErrorMsg('${map.glAccSubCatEditErrorMsgTitle}', 'Account Sub Category Name duplicate not allowed');
			}
		} else{
			if(accSubCatCodeSubCatModal != accSubCatModalCodes ){
				$.each(accSubCatCodes, function(idx, el){
					if($(el).closest("tr").find(":eq(2)").text()==accSubCatModalCodes){
						resultCode = true;
					}
				});
			}
			if(accSubCatNameSubCatModal != accSubCatModalNames ){
				$.each(accSubCatNames, function(idx, el){
					if($(el).val()==accSubCatModalNames){
						resultName = true;
					}
				});
			}
			
			if(!resultCode && !resultName){
				$("#accSubCatList tr.current-row").html( 
						'<td class="hidden">' +  '</td>' +
						'<td >' + $("#acc_cat_name_subcat_modal").val() + '</td>' +
						'<td style="text-align: center">' + $("#acc_cat_code_subcat_modal").val() + $("#acc_subcat_code_subcat_modal").val() + '</td>' +
						'<td class="word-break">' + $("#acc_subcat_name_subcat_modal").val() + '</td>' +
						'<td class="word-break">' + $("#fundamental_type_text_subcat_modal").val() + '</td>' +
						'<td align="center">' + 
							'<button type="button" onclick="editRowAccSubCat(this);" class="btn btn-edit btn-xs"><span class="fa fa-edit"></span></button> ' + 
							'<button type="button" onclick="delRowAccSubCat(this);" class="btn-del btn btn-xs"><span class="fa fa-trash"></span></button> ' + 
							'<input type="hidden" name="acc_cat_id_subcat_modal[]" class="acc-cat-id-subcat-modal" value="' + $("#acc_cat_id_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_cat_code_subcat_modal[]" class="acc-cat-code-subcat-modal code_check" value="' + $("#acc_cat_code_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_cat_name_subcat_modal[]" class="acc-cat-name-subcat-modal code_check" value="' + $("#acc_cat_name_subcat_modal").val() + '" />' +  
							'<input type="hidden" name="acc_cat_fundamental_type_code_subcat_modal[]" class="acc-cat-fundamental-type-code-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_code_subcat_modal").val() + '" />' +      
							'<input type="hidden" name="acc_cat_fundamental_type_text_subcat_modal[]" class="acc-cat-fundamental-type-text-subcat-modal code_check" value="' + $("#acc_cat_fundamental_type_text_subcat_modal").val() + '" />' +   
							
							'<input type="hidden" name="acc_subcat_id_subcat_modal[]" class="acc-subcat-id-subcat-modal" value="' + $("#acc_subcat_id_subcat_modal").val() + '" />' +
							'<input type="hidden" name="acc_subcat_code_subcat_modal[]" class="acc-subcat-code-subcat-modal code_check" value="' + $("#acc_subcat_code_subcat_modal").val() + '" />' +  
							'<input type="hidden" name="acc_subcat_name_subcat_modal[]" class="acc-subcat-name-subcat-modal name_check" value="' + $("#acc_subcat_name_subcat_modal").val() + '" />' +   
							'<input type="hidden" name="fundamental_type_subcat_modal[]" class="fundamental-type-subcat-modal code_check" value="' + $('input[name=fundamental_type_subcat_modal]:checked').val() + '" />' + 
							'<input type="hidden" name="fundamental_type_text_subcat_modal[]" class="fundamental-type-text-subcat-modal code_check" value="' + $("#fundamental_type_text_subcat_modal").val() + '" />' + 
							'<input type="hidden" name="change_status_subcat_modal[]" class="change-status-subcat-modal" value="' + 'Y' + '" />' +
						'</td>' 
				);
				$("#accSubCatList tr").removeClass("current-row");
				$("#accSubCatModal").modal("hide");
				isDirty = true; 
				//newRowCount=$('#geoSegmentList tr').length;
			}
			
			if(resultCode){
				ShowErrorMsg('${map.glAccSubCatEditErrorMsgTitle}', 'Account Sub Category Code duplicate not allowed');
			}
			if(resultName){
				ShowErrorMsg('${map.glAccSubCatEditErrorMsgTitle}', 'Account Sub Category Name duplicate not allowed');
			}
		}
		
	});
	
	var editRowAccSubCat = function(el){
		$(".modal-title").text('${map.glAccSubCatEditTitle}');
		ResetInputs("#accSubCatModal");
		ResetErrorChange();
		$("#accSubCatList tr").removeClass("current-row");
		$(el).closest("tr").addClass("current-row");
	
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
	
	var delRowAccSubCat = function(el){
		deleteRowCountAccSubCat++;
		swal({
			title : '${map.deleteSweetAlertMsgTitle}',
			text  : '${map.deleteSweetAlertMsgText}',
			type  : '${map.deleteSweetAlertMsgWarning}',
			showCancelButton : true,
			confirmButtonColor : "#007AFF",
			confirmButtonText : '${map.deleteSweetAlertMsgConfirmButtonText}',
			closeOnConfirm : true
		}, function() {
			var curr_item = $(el).closest("tr").find(".acc-subcat-id-subcat-modal").val();
			if(curr_item != ""){
				if ($("#deleteAccSubCatDataList tr.current-row").length == 0 ) {
					$("#deleteAccSubCatDataList tr:last").after('<tr class="current-row"></tr>');
				} 
	
				$("#deleteAccSubCatDataList tr.current-row").html( 
						'<td align="center">' + 
							'<input type="hidden" name="deleted_acc_subcat_data[]" class="deleted-acc-subcat-data" value="' + curr_item + '" />' +
						'</td>' 
				);
				$("#deleteAccSubCatDataList tr").removeClass("current-row");
			}
			
			$(el).closest("tr").remove();
			isDirty = true;
		});
	};
	
/*
-----------------------------------------------------------------------------------------------
						End: Account Sub-Category Function
-----------------------------------------------------------------------------------------------
*/	