var TableData = function() {
	"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/

	function showDataTableTools(tableRow, length, filter, paginate){
		var rows= tableRow.length;
		if(rows > 5){
			length.show();
			filter.show();
			paginate.show();
		}
	}
	
	function hideDataTableTools(tableRow, length, filter, paginate){
		var rows= tableRow.length;
		if(rows <= 5){
			length.hide();
			filter.hide();
			paginate.hide();
		}
	}
	

	var listItem = function() {
		var newRow = false;
		var actualEditingRow = null;

		function restoreRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow);

			for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
				oTable.fnUpdate(aData[i], nRow, i, false);
			}

			oTable.fnDraw();
		}

		function editRow(oTable, nRow) {
			var aData = oTable.fnGetData(nRow);
			var jqTds = $('>td', nRow)
			$('>td:eq(0)',nRow);
			$('>td:eq(1)',nRow);
			$('>td:eq(2)',nRow).css("text-align","center");
			$('>td:eq(3)',nRow).css("text-align","center");
			$('>td:eq(4)',nRow).css("text-align","center");
			$('>td:eq(5)',nRow).css("text-align","center");
			$('>td:eq(6)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control uppercase" value="' + aData[0] + '" readonly>';
			/*jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '" readonly>';*/
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '" readonly>';
			jqTds[2].innerHTML = '<input type="text" class="form-control quant" value="' + aData[3] + '" readonly>';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control price" value="' + aData[5] + '" readonly>';
	/*		jqTds[6].innerHTML = '<input type="text" class="form-control test" value="' + aData[6] + '">';
			jqTds[7].innerHTML = '<input type="text" class="form-control" value="' + aData[7] + '" readonly>';
			jqTds[8].innerHTML = '<input type="text" class="form-control" value="' + aData[8] + '">';
			jqTds[9].innerHTML = '<input type="text" class="form-control" value="' + aData[9] + '">';0
			jqTds[10].innerHTML = '<input type="text" class="form-control" value="' + aData[10] + '">';*/
			jqTds[4].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}
		$(".quant ,.price").on("input", function(){
	        var first=$(".quant").val(); alert(first);
	        
	        var second=$(".price").val();
	        $(".test").val(first*second);
	        
	    });
		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			$('>td:eq(0)',nRow).css("text-transform","uppercase");
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			/*oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);*/
			oTable.fnUpdate(jqInputs[2].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 4, false);
			/*oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
			oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
			oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
			oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
			oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);*/
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 5, false);
			oTable.fnDraw();
			calTotal();
			newRow = false;
			actualEditingRow = null;
		}
		
		

		$('body').on('click', '.add-row-1', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
				/*var aiNew = oTable.fnAddData(['', '', '', '']);*/
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			showDataTableTools($('#listItem tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));

			
		});
		
		$('#listItem').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#listItem tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));
		});
		$('#listItem').on('click', '.delete-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			calTotal();
			
			hideDataTableTools($('#listItem tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));
			
			/*if (newRow && actualEditingRow) {
				oTable.fnDeleteRow(actualEditingRow);
				newRow = false;

			}
			var nRow = $(this).parents('tr')[0];
			bootbox.confirm("Are you sure to delete this row?", function(result) {
				if (result) {
					$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/delete/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/delete/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
							oTable.fnDeleteRow(nRow);
							}
						}
					});				
					
				}
			});
			
*/
			
		});
		$('#listItem').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		
		$('#listItem').on('click', '.edit-row', function(e) {
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
		var oTable = $('#listItem').dataTable({
			"aoColumnDefs" : [{
				"aTargets" : [0]
			}],
			"oLanguage" : {
				"sLengthMenu" : "Show _MENU_ Rows",
				"sSearch" : "",
				"oPaginate" : {
					"sPrevious" : "",
					"sNext" : ""
				}
			},
			"aaSorting" : [[1, 'asc']],
			"aLengthMenu" : [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"] // change per page values here
			],
			// set the initial value
			"iDisplayLength" : 5,
		});
		
		$('#sample_2_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
		// modify table search input
		$('#sample_2_wrapper .dataTables_length select').addClass("m-wrap small");
		// modify table per page dropdown
		$('#sample_2_wrapper .dataTables_length select').select2();
		// initialzie select2 dropdown
		$('#sample_2_column_toggler input[type="checkbox"]').change(function() {
			/* Get the DataTables object again - this is not a recreation, just a get of the object */
			var iCol = parseInt($(this).attr("data-column"));
			var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
			oTable.fnSetColumnVis(iCol, ( bVis ? false : true));
		});
		
		
		
		
		
	};
	
	
	return {
		//main function to initiate template pages
		init : function() {
			listItem();
		
			
		}
	};
	
	function calTotal(){
	    var sum=0;
	    $('#listItem tr td:nth-child(6)').each(function() {
	        var a=$(this).text();
	        var temp = parseInt(a);
	        sum=sum+temp;
	    
	   });
	    
	    
	}
	
}();
