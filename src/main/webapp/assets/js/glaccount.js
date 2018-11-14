var TableData = function() {
	"use strict";
	
	var AccCat = function() {
		var newRow = false;
		var actualEditingRow = null;

		function restoreRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow);        
			for (var i = 0, iLen = jqTds.length; i <= iLen; i++) {
				oTable.fnUpdate(aData[i], nRow, i, false);  //alert(aData[i]);
			}
			oTable.fnDraw();
		}

		function editRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow);
			//jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			//jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[4].innerHTML = '&nbsp'+'<button style="border: 1px solid #008800; color: #008800;" type="button" class="btn btn-xs AccCat-save-row"> <span class="fa fa-check"></span></button>' +'&nbsp;' + '<button style="border: 1px solid #444; color: #444;" type="button" class="cancel-row btn btn-xs "> <span class="fa fa-close"></span></button>';
			
			$('.btn-save').attr("disabled", "disabled"); 
		}

		function saveRow(oTable, nRow) { //alert(nRow);
			var jqInputs = $('input', nRow);
			//restoreRow(oTable, nRow);
			
			var aData = oTable.fnGetData(nRow);
			var accCatId = aData[0];
			var accCatCode = aData[1];
			var accCatName = aData[2];
			var fundamentalTypeText = aData[3];
			
			//alert(aData[0]);
			function checkDuplicate(){
				var result= false;
				
				$.each($('#AccCat tbody tr'), function(i,item){debugger;
					var accCatNameCat = $.trim($(item).find('.acc-cat-name-cat-modal').val());
					var changedValue = $.trim(jqInputs[0].value);
				
					if(accCatNameCat == changedValue){
						result = true;
					}
				
				});
				
				if (result){
					ShowErrorMsg('Found Duplicate Catagory Name', "Please check!!");
				}else{
					oTable.fnUpdate(jqInputs[0].value, nRow, 2, false); //alert(jqInputs[0].value);

					oTable.fnUpdate('<a class="AccCat-edit-row btn-edit btn btn-xs" data-toggle="tooltip" title="Edit"> <span class="fa fa-edit"></span></a>' + 
									'<input type="hidden" name="acc_cat_id[]" class="acc-cat-id-cat-modal" value="'+ accCatId +'" />' +
									'<input type="hidden" name="change_status_cat_modal[]" class="change-status-cat-modal" value="'+ 'Y' +'" />' , nRow, 4, false);

					oTable.fnDraw();
					newRow = false;
					actualEditingRow = null;
					$('.btn-save').prop( "disabled", false );
				}
			}
		
			checkDuplicate();
			
		}
		
		$('#AccCat').on('click', '.AccCat-save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);

		});
		
		$('#AccCat').on('click', '.AccCat-edit-row', function(e) {
			e.preventDefault();
			if (actualEditingRow) {
				if (newRow) {
					oTable.fnDeleteRow(actualEditingRow);
					newRow = false;
				} else {
					restoreRow(oTable, actualEditingRow);

				}
			}
			var nRow = $(this).parents('tr')[0];
			editRow(oTable, nRow);
			actualEditingRow = nRow;

		});

		$('#AccCat').on('click', '.cancel-row', function(e) {

			e.preventDefault();
			if (newRow) {
				newRow = false;
				actualEditingRow = null;
				var nRow = $(this).parents('tr')[0];
				oTable.fnDeleteRow(nRow);

			} else {
				restoreRow(oTable, actualEditingRow);
				actualEditingRow = null;
			}
			
			$('.btn-save').prop( "disabled", false );
		});

		
		var oTable = $('#AccCat').dataTable({
			"aaSorting" : [[1, 'asc']],
			
		});
		
	};
	

	
	return {
		//main function to initiate template pages
		init : function() {
			AccCat();
		}
	};
}();
