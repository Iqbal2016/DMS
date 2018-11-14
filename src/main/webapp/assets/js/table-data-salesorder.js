var TableData = function() {
	"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/
	var salesOrder = function() {
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
			$('>td:eq(1)',nRow).css("text-align","left");

			jqTds[0].innerHTML = '<input type="text"  class="form-control"  value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			
			jqTds[2].innerHTML = '<input type="text" class="form-control number quant" value="' + aData[2] + '">';
			
			jqTds[3].innerHTML = '<input type="text" class="form-control money price"  value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control number discount"  value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control number subtotal" readonly="readonly" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<input type="text" class="form-control number tax" value="' + aData[6] + '">';
			jqTds[7].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[7] + '">';	
			jqTds[8].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[8] + '">';	
			jqTds[9].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[9] + '">';	
			jqTds[10].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[10] + '">';	
			jqTds[11].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[11] + '">';	
			jqTds[12].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[12] + '">';	
			jqTds[13].innerHTML = '<input type="text" class="form-control number total" readonly="readonly" value="' + aData[13] + '">';	
			jqTds[14].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>'

			
			/*var first=$(".quant").val();
			var second=$(".price").val();
			$(".subtotal").val(first*second);*/
			$(".quant ,.price,.discount,.tax").on("input", function(){
				/*var temp=0;*/
				var first=$(".quant").val();
				
				var second=$(".price").val() ;
				var third=$(".discount").val();
				
				var temp=first*second*third*0.01;
				var new_temp=(first*second)-temp;
				$(".subtotal").val(new_temp.toFixed(2));
				var tax=$(".tax").val();
				new_temp=new_temp+(tax*0.01*new_temp);
				$(".total").val(new_temp.toFixed(2));
			})
			 $("#salesOrder").tableHeadFixer({'right' : 2});
            $("#salesOrder").tableHeadFixer({'left' : 4});
		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			//var jqPrice=$('.price',nRow)
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
			oTable.fnUpdate(jqInputs[11].value, nRow, 11, false);
			oTable.fnUpdate(jqInputs[12].value, nRow, 12, false);
			oTable.fnUpdate(jqInputs[13].value, nRow, 13, false);
			
			
			
			oTable.fnUpdate('<button type="button" class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 14, false);
			calTotal();
			/*oTable.fnUpdate('<a class="edit-row" href="">Edit</a>', nRow, 3, false);
			oTable.fnUpdate('<a class="delete-row" href="">Delete</a>', nRow, 4, false);*/
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
			 $("#salesOrder").tableHeadFixer({'right' : 2});
             $("#salesOrder").tableHeadFixer({'left' : 4});
		}

		
		$('body').on('click', '.add-row', function(e) {
			e.preventDefault();
			
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '', '','','','','','','']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
		});
		$('#salesOrder').on('click', '.cancel-row', function(e) {

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
		$('#salesOrder').on('click', '.delete-row', function(e) {
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			calTotal();
			
			
		});
		$('#salesOrder').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			
			
			/*e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			$.blockUI({
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
		$('#salesOrder').on('click', '.edit-row', function(e) {
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
		var oTable = $('#salesOrder').dataTable({
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
	
	
	
	var delivery_schedule=function(){
        
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
			/*$('>td',nRow).css("text-align","center");
			$('>td:eq(1)',nRow).css("text-align","left");*/

			jqTds[0].innerHTML = '<input type="text"  class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control datepicker deliverydate" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="text" class="form-control" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>'	
			
				$(".deliverydate").datepicker("update", new Date(GetToday()));
			
			
		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 5, false)
			
			oTable.fnUpdate('<button type="button" class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 6, false);
			
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}

		
		$('body').on('click', '.add-row-delivery', function(e) {
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
			
		});
		
		$('#delivery_schedule').on('click', '.cancel-row', function(e) {

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
		$('#delivery_schedule').on('click', '.delete-row', function(e) {
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			calTotal();
			
			
		});
		$('#delivery_schedule').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			
		});
		$('#delivery_schedule').on('click', '.edit-row', function(e) {
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
		var oTable = $('#delivery_schedule').dataTable({
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
	var billing_schedule=function(){

        
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
			/*$('>td',nRow).css("text-align","center");
			$('>td:eq(1)',nRow).css("text-align","left");*/

			jqTds[0].innerHTML = '<input type="text"  class="form-control" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text" class="form-control billingdate datepicker datepicker-linked" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			
			jqTds[3].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>'	
			$(".billingdate").datepicker("update", new Date(GetToday()));
			
			
		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			
			
			oTable.fnUpdate('<button type="button" class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 3, false);
			
			oTable.fnDraw();
			newRow = false;
			actualEditingRow = null;
		}

		
		$('body').on('click', '.add-row-billing', function(e) {
			e.preventDefault();
			
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
			
		});
		
		$('#billing_schedule').on('click', '.cancel-row', function(e) {

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
		$('#billing_schedule').on('click', '.delete-row', function(e) {
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			calTotal();
			
			
		});
		$('#billing_schedule').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			
		});
		$('#billing_schedule').on('click', '.edit-row', function(e) {
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
		var oTable = $('#billing_schedule').dataTable({
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
			
			salesOrder();
			delivery_schedule();
			billing_schedule();
		}
	};
}();
$("#ship-charge").on("input",function(){
	
	//$(this).removeClass("money");
    var shippingCharge=$("#ship-charge").val();
  /*   $("#total-sub").text().replace(',', '');*/
    if(shippingCharge=="")
    {
        /* $("#ship-charge").val(0);*/
       shippingCharge=0;
    }
    /*$("#total-sub").text().replace(',', '');*/
    var sum=$("#total-sub").val();
    sum=sum.replace(/\,/g,'');
	sum=Number(sum);	
	shippingCharge=shippingCharge.replace(/\,/g,'');
	shippingCharge=Number(shippingCharge);
	
    var totalamount=parseFloat(sum)+parseFloat(shippingCharge);
    /*$("#total-amount").text().replace(',', '');*/
    $("#total-amount").val(totalamount.toFixed(2));
    $("#total-amount").trigger('focusout');
   	$('#total-sub').trigger('focusout');
 	/*$('#ship-charge').trigger('focusout');*/
    
});

/*$("#ship-charge").on("focusout",function(){
	$(this).addClass("money");
	
	
});*/
function calTotal(){
	var sum=0;
	$('#salesOrder tr td:nth-child(8)').each(function() {
		var a=$(this).text();
		var temp = parseFloat(a);
		sum=sum+temp;
    
    });
	$("#total-sub").val(sum.toFixed(2));
	var shippingCharge=$("#ship-charge").val();
	shippingCharge=shippingCharge.replace(/\,/g,'');
	shippingCharge=Number(shippingCharge);
	sum=parseFloat(shippingCharge)+sum;
	$("#total-amount").val(sum.toFixed(2));
    $("#total-amount").trigger('focusout');
   	$('#total-sub').trigger('focusout');
   /*	$('#ship-charge').trigger('focusout'); */
   	
	
	
	
}









