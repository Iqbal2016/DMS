var TableData = function() {
	//"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/

	var standardInvoice = function() {
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
           // $('>td:eq(2)',nRow).css("text-align","left");
            //$('>td:eq(5)',nRow).addClass("money");
			jqTds[0].innerHTML = '<input type="text" class=" form-control alpha-numeric uppercase" value="' + aData[0] + '">';
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
			jqTds[11].innerHTML = '<input type="text" class="form-control" value="' + aData[11] + '">';
			jqTds[12].innerHTML = '<input type="text" class="form-control" value="' + aData[12] + '">';
			jqTds[13].innerHTML = '<input type="text"  "class="form-control" value="' + aData[13] + '">';
			//jqTds[8].innerHTML = '<input type="text" class="form-control" readonly="readonly" value="' + aData[8] + '">';
			jqTds[14].innerHTML = '&nbsp'+'<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';
			
			/*$("#quantity ,#price, #discount , #tax").on("input", function(){
				
				var quantity_text=$("#quantity").val();
                var quantity=quantity_text.match(/\d+/)[0];
				
				
				
                //var quantity=$("#quantity").val();
                var price=$("#price").val();
                var discount=$("#discount").val();
                var tax=$("#tax").val();
                
                var initial_subtotal=quantity*price;
                $("#amount").val(initial_subtotal);

                var totaldis=quantity*price*discount*0.01;
              //  $("#total_discount").val(totaldis);
                
                var after_discount=initial_subtotal-totaldis;
                
                var totalvat=after_discount*tax*0.01;
               // $("#total_vat").val(totalvat);
                
                $("#total").val((after_discount+totalvat).toFixed(2));
               
            })*/
			
			$("#standardInvoice").tableHeadFixer({'right' : 2});
		    $("#standardInvoice").tableHeadFixer({'left' : 4});
		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			
			oTable.fnUpdate((jqInputs[0].value).toUpperCase(), nRow, 0, false);
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
			//oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 14, false);
			oTable.fnDraw();
			//calculateSubtotal();
			newRow = false;
			actualEditingRow = null;
			
		    $("#standardInvoice").tableHeadFixer({'right' : 2});
		    $("#standardInvoice").tableHeadFixer({'left' : 4});
			
		
		}
		

		$('body').on('click', '.add-row-1', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['', '', '', '', '', '','', '', '', '', '', '','', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
				
				$('>td:eq(0)',nRow).css("border-left","1px solid #ddd");
			}
		});
		
		$('#standardInvoice').on('click', '.cancel-row', function(e) {

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
		$('#standardInvoice').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			//calculateSubtotal();
			
		});
		
		$('#standardInvoice').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		$('#standardInvoice').on('click', '.edit-row', function(e) {
			
			
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
		var oTable = $('#standardInvoice').dataTable({
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
	
	
	var agreedPaymentSchedule = function() {
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
			jqTds[1].innerHTML = '<input type="text" class="datepicker form-control" id="payment_date" value="' + aData[1] + '">';
			jqTds[2].innerHTML = '<input type="text" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" class="form-control" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '&nbsp'+'<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';
			
			$("#payment_date").datepicker("update", new Date(GetToday()));
			
		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 4, false);
			oTable.fnDraw();
			
			calculateDue();
			
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
				var aiNew = oTable.fnAddData(['', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		


		
		$('#agreedPaymentSchedule').on('click', '.cancel-row', function(e) {

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
		


		
		$('#agreedPaymentSchedule').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			calculateDue();
		});
		
		
		

		
		$('#agreedPaymentSchedule').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		$('#agreedPaymentSchedule').on('click', '.edit-row', function(e) {
			
			
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
		
		

		
		var oTable = $('#agreedPaymentSchedule').dataTable({
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
	
	
	
	var deliverySchedule = function() {
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
			jqTds[4].innerHTML = '<input type="text" class="datepicker form-control" id="payment_date" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '&nbsp'+'<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';
			
			$("#payment_date").datepicker("update", new Date(GetToday()));
			
		}


		
		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn btn-del btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 5, false);
			oTable.fnDraw();
			
			//calculateDue();
			
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
				var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		


		
		$('#deliverySchedule').on('click', '.cancel-row', function(e) {

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
		


		
		$('#deliverySchedule').on('click', '.delete-row', function(e) {
			
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			oTable.fnDeleteRow(nRow);
			
			//calculateDue();
		});
		
		
		

		
		$('#deliverySchedule').on('click', '.save-row', function(e) {
			e.preventDefault();

			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		$('#deliverySchedule').on('click', '.edit-row', function(e) {
			
			
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
		
		

		
		var oTable = $('#deliverySchedule').dataTable({
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
			/*standardInvoice();*/
			standardInvoice();
			agreedPaymentSchedule();
			deliverySchedule();
			/*agreedPaymentSchedule_customer();
			bank_ac_table();
			mobileFinService();
			*/
		}
	};
}();


/*$("#shipping-charge").on("input",function(){
	
	var shippingCharge=$("#shipping-charge").val();
	
	if(shippingCharge=="")
	{
		 $("#shipping-charge").val(0);
	   shippingCharge=0;
	}
	
	
	
	var sum=$("#sub-total").val();
	var totalamount=parseFloat(sum)+parseFloat(shippingCharge);
	
    $("#total-amount").val(totalamount);
    //$("#total-amount").addClass("money");
    //alert(totalamount);
});*/


/*var calculateSubtotal=function(){
	
	var sum=0;
	//alert(sum);
    $('#standardInvoice tr td:nth-child(8)').not(':last').each(function() {
        
    	var temp=$(this).text();
    	var temp1=parseFloat(temp);
        sum=sum+temp1;
        
        
    });
    
    
   //alert(sum);
    $("#total_net_amount").html(sum);
    $("#sub-total").val(sum);
    
    
    var shippingCharge=$("#shipping-charge").val();
    if(shippingCharge=="")
	{
	   shippingCharge=0;
	   $("#shipping-charge").val(0);
	}
    //$("#total-amount").val(sum+parseFloat(shippingCharge));
    $("#total-amount").val((sum+parseFloat(shippingCharge)).toFixed(2));
};*/


var calculateDue=function(){
	
	var sum1=0;
	//alert(sum);
    $('#agreedPaymentSchedule tr td:nth-child(3)').each(function() {
        
    	var temp=$(this).text();
    	var temp1=parseFloat(temp);
        sum1=sum1+temp1;
        
        
    });
    $("#paid").val(sum1.toFixed(2));
    
    var total2=$("#total2").val();
    if(total2=="")
	{
	   total2=0;
	   $("#total2").val(0);
	}
    //$("#total-amount").val(sum+parseFloat(shippingCharge));
    $("#due").val((parseFloat(total2)-sum1).toFixed(2));
    
    
    
};




