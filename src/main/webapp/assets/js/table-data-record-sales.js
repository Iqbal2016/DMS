var TableData = function() {
	"use strict";
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/

	var cash_sale = function() {
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
           
            
			jqTds[0].innerHTML = '<input type="text" id="code" class="form-control" value="' + aData[0] + '" >';
			jqTds[1].innerHTML = '<input type="text" id="name" class="form-control" value="' + aData[1] + '"readonly>';
			jqTds[2].innerHTML = '<input type="text" id="Qty" class="form-control" value="' + aData[2] + '">';
			jqTds[3].innerHTML = '<input type="text" id="unit_price" class="form-control" value="' + aData[3] + '"readonly>';
			jqTds[4].innerHTML = '<input type="text" id="amount" class="form-control" value="' + aData[4] + '" readonly>';
			
			jqTds[5].innerHTML = '<input type="text" id="sc_percentage" class="form-control" value="' + aData[5] + '"readonly>';
			jqTds[6].innerHTML = '<input type="text" id="sc_amount" class="form-control" value="' + aData[6] + '"readonly>';
			
			jqTds[7].innerHTML = '<input type="text" id="sd_percentage" class="form-control" value="' + aData[7] + '"readonly>';
			jqTds[8].innerHTML = '<input type="text" id="sd_amount" class="form-control" value="' + aData[8] + '"readonly>';
			
			//jqTds[4].innerHTML = '<input type="number" min="1" id="Qty" class="form-control" value="' + aData[4] + '">';
			jqTds[9].innerHTML = '<input type="text" id="vat" class="form-control" value="' + aData[9] + '" readonly>';		
			jqTds[10].innerHTML = '<input type="text" id="total_vat" class="form-control" value="' + aData[10] + '" readonly>';		
			
			jqTds[11].innerHTML = '<input type="text" id="sub_total" class="form-control" value="' + aData[11] + '" readonly>';		
				
			jqTds[12].innerHTML = '&nbsp'+'<button type="button" class="btn-save btn btn-xs save-row" style="background-color:white !important; border-color: green !important; width:22px; margin-right:3px"><span class="fa fa-check" style="color:green !important;"></span></button><button type="button" class="btn-cancel btn btn-xs cancel-row"><span class="fa fa-close"></span></button>';
			
			$("#Qty").on("input", function(){
				
				
                var quantity_text=$("#Qty").val();
                var quantity=parseFloat(quantity_text.match(/\d+/)[0]);
                var unit=quantity_text.replace(/[0-9]/g, '');
                
                var price=$("#unit_price").val();
                price=price.replace(/,/g, '');
            	price=parseFloat(price);
                
               
                var vat=$("#vat").val();
                var sc_percentage=$("#sc_percentage").val();
                var sd_percentage=$("#sd_percentage").val();
                
                var initial_subtotal=quantity*price;
                
                initial_subtotal=initial_subtotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                $("#amount").val(initial_subtotal);

                var total_sc=quantity*price*sc_percentage*0.01;
                $("#sc_amount").val(total_sc);
                
                var total_sd=quantity*price*sd_percentage*0.01;
                $("#sd_amount").val(total_sd);
                
               
               
                var total_vat=quantity*price*vat*0.01;
                $("#total_vat").val(total_vat);
                
                var sub_total=quantity*price+total_vat+total_sc+total_sd;
                sub_total=sub_total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                $("#sub_total").val(sub_total);
               
            })
            
            $("#code").on("input", function(){
            	var things = ["Pen", "Pencil", "Prawn", "Cup", "Almira"];
            	var unit_price=["5","2","500","10","5,000"];
            	
            	var vat=["10","10","5","15","20"];
            	
            	var index = Math.floor(Math.random()*things.length);
            	index=index*index+100;
            	index=index%things.length;
				$("#name").val(things[index]);
				$("#unit_price").val("100");
				
				$("#vat").val(vat[index]);
				$("#sc_percentage").val("10");
				$("#sd_percentage").val("10");
				$("#sc_amount").val("10");
				$("#sd_amount").val("10");
				$("#total_vat").val("10");
				$("#Qty").val("1");
				
				 var quantity_text=$("#Qty").val();
	                var quantity=parseFloat(quantity_text.match(/\d+/)[0]);
	                var unit=quantity_text.replace(/[0-9]/g, '');
	                
	                var price=$("#unit_price").val();
	                price=price.replace(/,/g, '');
	            	price=parseFloat(price);
	                
	               
	                var vat=$("#vat").val();
	                var sc_percentage=$("#sc_percentage").val();
	                var sd_percentage=$("#sd_percentage").val();
	                
	                var initial_subtotal=quantity*price;
	                
	                initial_subtotal=initial_subtotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	                $("#amount").val(initial_subtotal);

	                var total_sc=quantity*price*sc_percentage*0.01;
	                $("#sc_amount").val(total_sc);
	                
	                var total_sd=quantity*price*sd_percentage*0.01;
	                $("#sd_amount").val(total_sd);
	                
	               
	               
	                var total_vat=quantity*price*vat*0.01;
	                $("#total_vat").val(total_vat);
	                
	                var sub_total=quantity*price+total_vat+total_sc+total_sd;
	                sub_total=sub_total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
	                $("#sub_total").val(sub_total);
	                           
            })
            $("#cash_sale").tableHeadFixer({'right' : 2});
			$("#cash_sale").tableHeadFixer({'left' : 4});
			
		}

		function saveRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			
			var quantity_text=jqInputs[2].value;
			var quantity=quantity_text.match(/\d+/)[0];
			
			var unit=quantity_text.replace(/[0-9]/g, '');
			unit=unit.split(' ').join('');
			if(unit==""){unit="pcs";}
			quantity=quantity+unit;
			
			var name=jqInputs[1].value;
			if(name=="Prawn"){
				var numRows =  document.getElementById("free_items").rows.length;
				$('#free_items > tbody:last-child').append('<tr role="row" class="odd"><td class="" align="center">99</td><td>banana</td><td>mango</td><td class="" align="center">1</td><td class="" align="center">1,100</td></tr>');
				$("#notification").html(numRows);
			}
			if(name=="Almira"){
				var numRows =  document.getElementById("free_items").rows.length;
				$('#free_items > tbody:last-child').append('<tr role="row" class="odd"><td class="" align="center">99</td><td>banana</td><td>mango</td><td class="" align="center">1</td><td class="" align="center">1,100</td></tr>');
				$("#notification").html(numRows);
			}
			
			
			oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
			oTable.fnUpdate(quantity, nRow, 2, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
			oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
			oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
			oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
			oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
			
			oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
			oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
			oTable.fnUpdate(jqInputs[10].value, nRow, 10, false);
			oTable.fnUpdate(jqInputs[11].value, nRow, 11, false);
		
			oTable.fnUpdate('<button type="button" class="btn-edit btn btn-xs edit-row"><span class="fa fa-edit"></span></button>' + '&nbsp' + '<button type="button" onclick="delRow(this);"class="btn-del btn btn-xs delete-row"><span class="fa fa-trash"></span></button>', nRow, 12, false);

			oTable.fnDraw();
			calculateSubtotal();
			newRow = false;
			actualEditingRow = null;
			
			$("#cash_sale").tableHeadFixer({'right' : 2});
			$("#cash_sale").tableHeadFixer({'left' : 4});
		}

		
		$('body').on('click', '.add-row-1', function(e) {
			e.preventDefault();
			if (newRow == false) {
				if (actualEditingRow) {
					restoreRow(oTable, actualEditingRow);
				}
				newRow = true;
				var aiNew = oTable.fnAddData(['','', '', '', '', '', '', '', '', '','','','']);
				var nRow = oTable.fnGetNodes(aiNew[0]);
				editRow(oTable, nRow);
				actualEditingRow = nRow;
				$('>td:eq(0)',nRow).css("border-left","1px solid #ddd");
			}
		});
		$('#cash_sale').on('click', '.cancel-row', function(e) {

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
		$("#cash_paid").on("input", function(){
			
            var cash_paid=$("#cash_paid").val();
            cash_paid=cash_paid.replace(/,/g, '');
            if(cash_paid=="")
        	{
            	cash_paid=0;
        	 
        	}
            cash_paid=parseFloat(cash_paid);
            
            var netpayable=$("#net_total").html();
            netpayable=netpayable.replace(/,/g, '');
            netpayable=parseFloat(netpayable);
            
            var due=cash_paid-netpayable;
            due=due.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            $("#net_due").html(due);
           
        })
        $("#discount").on("input", function(){
			
            var discount=$("#discount").val();
            discount=discount.replace(/,/g, '');
            if(discount=="")
        	{
        	   discount=0;
        	 
        	}
            discount=parseFloat(discount);
            
            
            var netpayable=$("#net_payable").html();
            netpayable=netpayable.replace(/,/g, '');
            netpayable=parseFloat(netpayable);
            
            if(discount>netpayable){discount=netpayable;}
           /* discount=discount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")*/
            
            $("#net_total").html(due);
            var due=netpayable-discount;
            due=due.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            $("#net_total").html(due);
            
            var cash_paid=$("#cash_paid").val();
            cash_paid=cash_paid.replace(/,/g, '');
            if(cash_paid=="")
        	{
            	cash_paid=0;
        	 
        	}
            cash_paid=parseFloat(cash_paid);
            
            var net_total=$("#net_total").html();
            net_total=net_total.replace(/,/g, '');
            net_total=parseFloat(net_total);
            
            var due_change=cash_paid-net_total;
            due_change=due_change.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            $("#net_due").html(due_change);
            /*discount=discount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            $("#discount").html(discount);*/
           
        })
		$('#cash_sale').on('click', '.delete-row', function(e) {
			var nRow = $(this).parents('tr')[0];
			var name = $(this).parent().siblings(".name").text();
			
			delete_free_item(name);
			oTable.fnDeleteRow(nRow);
			calculateSubtotal();
		});
		
		$('#cash_sale').on('click', '.save-row', function(e) {
			e.preventDefault();
			var nRow = $(this).parents('tr')[0];
			saveRow(oTable, nRow);
			
			
		});
		$('#cash_sale').on('click', '.edit-row', function(e) {
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
		var oTable = $('#cash_sale').dataTable({
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
			"iDisplayLength" : 20,
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
			
			cash_sale();
		}
	};
}();


var calculateSubtotal=function(){
	var sum=0;
    $('#cash_sale tr td:nth-child(12)').each(function() {
        
    	var temp=$(this).text();
    	 temp=temp.replace(/,/g, '');
    	var temp1=parseFloat(temp);
        sum=sum+temp1;
        
    });
    var discount=$("#discount").val();
    discount=discount.replace(/,/g, '');
    if(discount=="")
	{
	   discount=0;
	   $("#discount").val(0);
	}
    var net_total=sum-discount;
    
    discount=discount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    //$("#table_net_payable").html(sum);
    $("#discount").html(discount);
   
    
    sum=sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    //$("#table_net_payable").html(sum);
    $("#net_payable").html(sum);
    
    net_total=net_total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    //$("#table_net_payable").html(sum);
    $("#net_total").html(sum);
    
    var cash_paid=$("#cash_paid").val();
    cash_paid=cash_paid.replace(/,/g, '');
    cash_paid=parseFloat(cash_paid);
    
    var netpayable=$("#net_total").html();
    netpayable=netpayable.replace(/,/g, '');
    netpayable=parseFloat(netpayable);
    
    var due=cash_paid-netpayable;
    due=due.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    $("#net_due").html(due);
    
    
};



var delete_free_item=function(name){
	
	var count=0;
	var index=0;
	var numRows =  document.getElementById("free_items").rows.length-1;
    /*$('#cash_sale tr td:nth-child(2)').not(':last').each(function() {*/
	 
    $('#free_items tr td:nth-child(3)').each(function() {
               
    	var temp=$(this).text();
    	
    	 if(temp==name){
    		 index=count;
    	 }
    	 count++;
    });
    document.getElementById("free_items").deleteRow(index+1);
	numRows =  document.getElementById("free_items").rows.length-1;
	$("#notification").html(numRows);
	
    
}; 
    
    //$("#amount").val(sum);




