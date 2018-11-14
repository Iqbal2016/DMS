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
	

	var additionalSitesList = function() {
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
			$('>td:eq(0)',nRow).css("text-align","center");
			$('>td:eq(11)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<input type="text" class="form-control" value="' + aData[6] + '">';
			jqTds[7].innerHTML = '<input type="text" class="form-control" value="' + aData[7] + '">';
			jqTds[8].innerHTML = '<input type="text" class="form-control" value="' + aData[8] + '">';
			jqTds[9].innerHTML = '<input type="text" class="form-control" value="' + aData[9] + '">';
			jqTds[10].innerHTML = '<input type="text" class="form-control" value="' + aData[10] + '">';
			jqTds[11].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
			oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
			oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
			oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
			oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 11, false);
			oTable.fnDraw();
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
				var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			showDataTableTools($('#additionalSitesList tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));

			
		});
		
		$('#additionalSitesList').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#additionalSitesList tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));
		});
		$('#additionalSitesList').on('click', '.delete-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			hideDataTableTools($('#additionalSitesList tbody tr'), $("#additionalSitesList_length"), $("#additionalSitesList_filter"), $("#additionalSitesList_paginate"));
			
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
		$('#additionalSitesList').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		
		$('#additionalSitesList').on('click', '.edit-row', function(e) {
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
		var oTable = $('#additionalSitesList').dataTable({
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
			"iDisplayLength" : 10,
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
	
	var agreedPriceSchedule_procurements = function() {
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
			var jqTds = $('>td', nRow);
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td:eq(6)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 6, false);
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}
		

		$('body').on('click', '.add-row-2', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '','']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			showDataTableTools($('#agreedPriceSchedule_procurements tbody tr'), $("#agreedPriceSchedule_procurements_length"), $("#agreedPriceSchedule_procurements_filter"), $("#agreedPriceSchedule_procurements_paginate"));

		});
		
		$('#agreedPriceSchedule_procurements').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#agreedPriceSchedule_procurements tbody tr'), $("#agreedPriceSchedule_procurements_length"), $("#agreedPriceSchedule_procurements_filter"), $("#agreedPriceSchedule_procurements_paginate"));

		});
		$('#agreedPriceSchedule_procurements').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			hideDataTableTools($('#agreedPriceSchedule_procurements tbody tr'), $("#agreedPriceSchedule_procurements_length"), $("#agreedPriceSchedule_procurements_filter"), $("#agreedPriceSchedule_procurements_paginate"));

			/*e.preventDefault();
			if (newRow && actualEditingRow) {
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
		$('#agreedPriceSchedule_procurements').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			/*$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
								saveRow(oTable, nRow);
							}
						}
					});	*/
		});
		$('#agreedPriceSchedule_procurements').on('click', '.edit-row', function(e) {
			
			
			//alert("Hello World");
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
		var oTable = $('#agreedPriceSchedule_procurements').dataTable({
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
			"iDisplayLength" : 10,
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
	
	
	var agreedPriceSchedule_sales = function() {
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
			var jqTds = $('>td', nRow);
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td:eq(6)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 6, false);
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}
		

		$('body').on('click', '.add-row-3', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '','']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			showDataTableTools($('#agreedPriceSchedule_sales tbody tr'), $("#agreedPriceSchedule_sales_length"), $("#agreedPriceSchedule_sales_filter"), $("#agreedPriceSchedule_sales_paginate"));

		});
		
		$('#agreedPriceSchedule_sales').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#agreedPriceSchedule_sales tbody tr'), $("#agreedPriceSchedule_sales_length"), $("#agreedPriceSchedule_sales_filter"), $("#agreedPriceSchedule_sales_paginate"));

		});
		$('#agreedPriceSchedule_sales').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			hideDataTableTools($('#agreedPriceSchedule_sales tbody tr'), $("#agreedPriceSchedule_sales_length"), $("#agreedPriceSchedule_sales_filter"), $("#agreedPriceSchedule_sales_paginate"));

			/*e.preventDefault();
			if (newRow && actualEditingRow) {
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
		$('#agreedPriceSchedule_sales').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			/*$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
								saveRow(oTable, nRow);
							}
						}
					});	*/
		});
		$('#agreedPriceSchedule_sales').on('click', '.edit-row', function(e) {
			
			
		//	alert("Hello World");
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
		var oTable = $('#agreedPriceSchedule_sales').dataTable({
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
			"iDisplayLength" : 10,
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
	
	
 var bank_ac_table=function(){
	 

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
			var jqTds = $('>td', nRow);
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td:eq(5)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			//jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[5].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			//oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 5, false);
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}
		

		$('body').on('click', '.add-row-4', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			showDataTableTools($('#bank_ac_table tbody tr'), $("#bank_ac_table_length"), $("#bank_ac_table_filter"), $("#bank_ac_table_paginate"));

		});
		
		$('#bank_ac_table').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#bank_ac_table tbody tr'), $("#bank_ac_table_length"), $("#bank_ac_table_filter"), $("#bank_ac_table_paginate"));

		});
		$('#bank_ac_table').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			hideDataTableTools($('#bank_ac_table tbody tr'), $("#bank_ac_table_length"), $("#bank_ac_table_filter"), $("#bank_ac_table_paginate"));

			/*e.preventDefault();
			if (newRow && actualEditingRow) {
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
		$('#bank_ac_table').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			/*$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
								saveRow(oTable, nRow);
							}
						}
					});	*/
		});
		$('#bank_ac_table').on('click', '.edit-row', function(e) {
			
			
		//	alert("Hello World");
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
		var oTable = $('#bank_ac_table').dataTable({
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
			"iDisplayLength" : 10,
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
	
	 
	 
	 
 }
 var mobileFinServiceAccounts=function(){
	 

	 

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
			var jqTds = $('>td', nRow);
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td:eq(5)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			//jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[5].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			//oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 5, false);
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}
		
		/*$('#mobileFinServiceAccounts').closest( ".add-row-5" ).click(function(){
			
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			
		})*/

		$('body').on('click', '.add-row-5', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
			
			showDataTableTools($('#mobileFinServiceAccounts tbody tr'), $("#mobileFinServiceAccounts_length"), $("#mobileFinServiceAccounts_filter"), $("#mobileFinServiceAccounts_paginate"));

		
		});
		
		$('#mobileFinServiceAccounts').on('click', '.cancel-row', function(e) {

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
			
			hideDataTableTools($('#mobileFinServiceAccounts tbody tr'), $("#mobileFinServiceAccounts_length"), $("#mobileFinServiceAccounts_filter"), $("#mobileFinServiceAccounts_paginate"));

		});
		$('#mobileFinServiceAccounts').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			hideDataTableTools($('#mobileFinServiceAccounts tbody tr'), $("#mobileFinServiceAccounts_length"), $("#mobileFinServiceAccounts_filter"), $("#mobileFinServiceAccounts_paginate"));

			
			
			/*e.preventDefault();
			if (newRow && actualEditingRow) {
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
		$('#mobileFinServiceAccounts').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			/*$.blockUI({
					message : '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
					});
					$.mockjax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						responseTime : 1000,
						responseText : {
							say : 'ok'
						}
					});
					$.ajax({
						url : '/tabledata/add/webservice',
						dataType : 'json',
						success : function(json) {
							$.unblockUI();
							if (json.say == "ok") {
								saveRow(oTable, nRow);
							}
						}
					});	*/
		});
		$('#mobileFinServiceAccounts').on('click', '.edit-row', function(e) {
			
			
		//	alert("Hello World");
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
		var oTable = $('#mobileFinServiceAccounts').dataTable({
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
			"iDisplayLength" : 10,
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

 }
  
	
	return {
		//main function to initiate template pages
		init : function() {
			additionalSitesList();
			agreedPriceSchedule_procurements();
			agreedPriceSchedule_sales();
			bank_ac_table();
			mobileFinServiceAccounts();
			
		}
	};
}();
