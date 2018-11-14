
/*
 * 		"money-without-fraction" class will convert any number to money format
 * 		It does not support fraction or . (dot/decimal-point)
 * 		To use this feature add this plug-in "<script src="assets/js/money-without-fraction.js"></script>" to your page
 * 		and add this class "money-without-fraction" to the input field. 
*/

function numberWithCommas(x) {
		var abc = x.replace(/,/g, "");
		var parts = abc.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
	function getCoursorPosition(el) {
		var val = el.value;
		return val.slice(0, el.selectionStart).length;
	}

	function isTextSelected(input) {
		var startPos = input.selectionStart;
		var endPos = input.selectionEnd;
		var doc = document.selection;

		if (doc && doc.createRange().text.length != 0) {
			return true;
		} else if (!doc && input.value.substring(startPos, endPos).length != 0) {
			return true;
		}
		return false;
	}

	$('.money-without-fraction').on("focusout", function() {
		if ($(this).val().charAt(0) == 0) {
			$(this).val(0);
		} else {
			$(this).val(numberWithCommas($(this).val()));
		}

	});

	$('.money-without-fraction').keydown(function(e) {
		if (e.keyCode === 190 || e.keyCode === 110) {
			e.preventDefault();
		}
	});

	$('.money-without-fraction').keydown(function(e) {
		if (!isTextSelected($(this)[0])) {

			//prevent 0 input before number
			if ($(this).val().length != 0 && getCoursorPosition(this) == 0) {
				if (e.keyCode == 48 || e.keyCode == 96) {
					e.preventDefault();
				}
			}
		}
	});
	
	//$(".money-without-fraction").css("cssText", "text-align: right !important;");
	
	
	
	
	
	
	