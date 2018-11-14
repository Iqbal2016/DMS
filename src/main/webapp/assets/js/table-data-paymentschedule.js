var TableData = function() {
	"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/

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
			var jqTds = $('>td', nRow);
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td',nRow).css("text-align","center");
            $('>td:eq(2)',nRow).css("text-align","left");
            
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<input type="text" class="form-control" value="' + aData[6] + '">';
			jqTds[7].innerHTML = '<input type="text" class="form-control" value="' + aData[7] + '">';
			jqTds[8].innerHTML = '<input type="text" class="form-control" value="' + aData[8] + '">';
			jqTds[9].innerHTML = '&nbsp'+'<button type="button" class="save-row btn btn-xs"> <span class="fa fa-save"></span></button>' +'&nbsp;' + '<button type="button" class="cancel-row btn btn-xs "> <span class="fa fa-close"></span></button>';

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
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 9, false);
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
				var aiNew = oTable.fnAddData(['', '', '', '', '', '','', '', '','']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
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
		});
		$('#additionalSitesList').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
		});
		
		$('#additionalSitesList').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		$('#additionalSitesList').on('click', '.edit-row', function(e) {
			
			
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
	
	
	var agreedPriceSchedule = function() {
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
			
			$('>td',nRow).css("text-align","center");
/*            $('>td:eq(1)',nRow).css("text-align","left");
            $('>td:eq(2)',nRow).css("text-align","left");
            $('>td:eq(3)',nRow).css("text-align","left");*/
		
			//var jqTds = $('>td', nRow).css("text-align","center");
			$('>td:eq(6)',nRow).css("text-align","center");
			jqTds[0].innerHTML = '<input type="text" class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '&nbsp'+'<button type="button" class="save-row btn btn-xs"> <span class="fa fa-save"></span></button>' +'&nbsp;' + '<button type="button" class="cancel-row btn btn-xs "> <span class="fa fa-close"></span></button>';

		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 4, false);
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
				var aiNew = oTable.fnAddData(['', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		

		$('body').on('click', '.add-row-2', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		
		
		
		
		

		
		$('#agreedPriceSchedule').on('click', '.cancel-row', function(e) {

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
		});
		


		
		$('#agreedPriceSchedule').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
		});
		
		
		

		
		$('#agreedPriceSchedule').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		$('#agreedPriceSchedule').on('click', '.edit-row', function(e) {
			
			
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
		
		

		
		var oTable = $('#agreedPriceSchedule').dataTable({
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
	

	
	return {
		//main function to initiate template pages
		init : function() {
			/*additionalSitesList();*/
			additionalSitesList();
			agreedPriceSchedule();
			/*agreedPriceSchedule_customer();
			bank_ac_table();
			mobileFinService();
			*/
		}
	};
}();
