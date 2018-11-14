/*alert("init");*/
 
var TableData = function(){
	var itemList = function() {
		var newRow = false;
		var actualEditingRow = null;

		function restoreRow(oTable, nRow) 
		{
			
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
			 /*alert("editrowfunct");*/
			
			$('>td',nRow).css("text-align","center");
			$('>td:eq(1)',nRow).css("text-align","left");
			
			/*$('>td:eq(4)',nRow).css("text-align","left");*/
			jqTds[0].innerHTML = '<input type="text" class="form-control  alpha-numeric uppercase "  value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<input type="text"  class="form-control"  value="' + aData[1] + '">';
			/*jqTds[2].innerHTML = '<input type="text"  class="form-control"  value="' + aData[2] + '">';*/
			jqTds[2].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[2] + '">';
			/*jqTds[4].innerHTML = '<input type="text" class="form-control" value="' + aData[4] + '">';*/
			jqTds[3].innerHTML = '<input type="number" class="money form-control" id="price" value="' + aData[3] + '">';
			jqTds[4].innerHTML = '<input type="number" class="money form-control" id="intable_netAmount" readonly="readonly" value="' + aData[4] + '">';
			jqTds[5].innerHTML = '<input type="number" class="money form-control" id="discount" value="' + aData[5] + '">';
			jqTds[6].innerHTML = '<input type="number" class="money form-control" id="intable_subtotal" readonly="readonly" value="' + aData[6] + '">';
			jqTds[7].innerHTML = '<input type="number" class="money form-control" id="tax" value="' + aData[7] + '">';
			jqTds[8].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[8] + '">';
			jqTds[9].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[9] + '">';
			jqTds[10].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[10] + '">';
			jqTds[11].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[11] + '">';
			jqTds[12].innerHTML = '<input type="number"  class="form-control" id="quantity" value="' + aData[12] + '">';
			jqTds[13].innerHTML = '<input type="number" class="money form-control" id="gross_amount" readonly="readonly" value="' + aData[13] + '">';
			/*jqTds[9].innerHTML = '<input type="text" class="form-control" value="' + aData[9] + '">';
			jqTds[10].innerHTML = '<input type="text" class="form-control" value="' + aData[10] + '">';*/
			
			jqTds[14].innerHTML = '<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>'
            $("#quantity ,#price,#tax,#discount").on("input", function(){
            	var quantity=$("#quantity").val();
                var price=$("#price").val();
                //alert(first);
                var intable_subtotal=quantity*price;
                var discount=$("#discount").val();
                var discount_price=quantity*price-quantity*price*.01*discount;
                $("#intable_subtotal").val(discount_price);
                var tax=$("#tax").val();
                $("#gross_amount").val(discount_price*tax*.01+discount_price);
                
              
            })
            $("#itemList").tableHeadFixer({'right' : 2});
			  
            $("#itemList").tableHeadFixer({'left' : 4}); 
     
			
		}

  
		
		function saveRow(oTable, nRow) {
			
			var jqInputs = $('input', nRow);
                   //			sobtotal and total computation start
			/*jqInputs[6].value =jqInputs[2].value*jqInputs[4].value;
			
			jqInputs[8].value =parseFloat(jqInputs[6].value)+jqInputs[6].value*jqInputs[7].value*.01;*/
                    //			sobtotal and total computation start
			
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
			
			/*oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);*/
			/*oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);*/
			
			oTable.fnUpdate('<button type="button" onclick="delRow(this);"class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 14, false);
			
			oTable.fnDraw();
			calculateSubtotal();
			newRow = false;
			actualEditingRow = null;
			$("#itemList").tableHeadFixer({'right' : 2});
			  
            $("#itemList").tableHeadFixer({'left' : 4}); 
     
		}
		

		$('body').on('click', '.add-row', function(e) {
		
			e.preventDefault();
			/*alert("in function");*/
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				/*alert("in function 1");*/
				var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '', '','','', '', '', '','']);
				/*alert("in function ");*/
				/*alert($(oTable.fnAddData[0]));*/
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
			}
		});
		
		$('#itemList').on('click', '.cancel-row', function(e) {
			
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
		$('#itemList').on('click', '.delete-row', function(e) {
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			
			oTable.fnDeleteRow(nRow);
			calculateSubtotal();
			
			
		});
		$('#itemList').on('click', '.save-row', function(e) {
			
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
		});
		
		
		$('#itemList').on('click', '.edit-row', function(e) {
			
			//alert("Hello! I am an alert box!!");
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
		var oTable = $('#itemList').dataTable({
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
			var iCol = parseFloat($(this).attr("data-column"));
			var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
			oTable.fnSetColumnVis(iCol, ( bVis ? false : true));
		});
		
		
		
		
		
	};
	return {
		//main function to initiate template pages
		init : function() {
			
			itemList();
			
			
		}
	};
	
}();
$("#shipping-charge").on("input",function(){
	
	var shippingCharge=$("#shipping-charge").val();
	if(shippingCharge=="")
	{
		 $("#shipping-charge").val(0);
	   shippingCharge=0;
	}
	var sum=$("#base-price").val();
	var totalamount=parseFloat(sum)+parseFloat(shippingCharge);
	//alert(totalamount);
    $("#total-amount").val(totalamount);
});
var calculateSubtotal=function(){
	$(".paginate_button").hide();
	var sum=0;
    $('#itemList tr td:nth-child(10)').each(function() {
        
    	var temp=$(this).text();
    	var temp1=parseFloat(temp);
        sum=sum+temp1;
        
        
    });
   //alert(sum);
    $("#base-price").val(sum);
    var shippingCharge=$("#shipping-charge").val();
    if(shippingCharge=="")
	{
	   shippingCharge=0;
	   $("#shipping-charge").val(0);
	}
    $("#total-amount").val(sum+parseFloat(shippingCharge));
};



