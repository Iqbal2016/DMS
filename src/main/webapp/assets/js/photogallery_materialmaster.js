/* 
------------------------------------------------------------------------------------------------------------------------
	 start :: for photo gallery
------------------------------------------------------------------------------------------------------------------------ 
*/

	$("#fileInput2").attr('disabled', 'disabled');
	$("#fileInput3").attr('disabled', 'disabled');
	$("#fileInput4").attr('disabled', 'disabled');
	$("#fileInput5").attr('disabled', 'disabled');
	$("#fileInput6").attr('disabled', 'disabled');

	$(".bdr2, .bdr3, .bdr4, .bdr5, .bdr6").css("cssText", "border: 1px solid #eee !important;");
	$(".pen2, .pen3, .pen4, .pen5, .pen6").css("cssText", "color: #eee !important;");

	$("#fileInputClear1").hide();
	$("#fileInputClear2").hide();
	$("#fileInputClear3").hide();
	$("#fileInputClear4").hide();
	$("#fileInputClear5").hide();
	$("#fileInputClear6").hide();

	// for zoomming effect
	var imgWidth = 780;
	var imgHeight = 320;

	var zoomInit = function(i) {
		i.elevateZoom({
			tint : true,
			tintColour : '#eee',
			tintOpacity : 0.2,
			scrollZoom : true,
			easing : true,
			borderSize : 0,
			zoomWindowWidth : imgWidth,
			zoomWindowHeight : imgHeight,
			responsive : true
		});
	}
	$('#imageView').bind('mouseenter', function() {
			if ($('#imageView').attr('src') != "/assets/images/wizard_icons/sampImage_big.png") {
				zoomInit($("#imageView"));
			}
	});
	$('#imageViewShow').bind('mouseenter', function() {
			if ($('#imageViewShow').attr('src') != "/assets/images/wizard_icons/sampImage_big.png") {
				zoomInit($("#imageViewShow"));
			}
	});

	// disable the effect on click next button

	$('.next-step, .btn-save').bind('mouseleave', function() {
		$(".zoomContainer").remove();
	});
	$('.stepNumber, .tabClick').bind('click', function() {
		$(".zoomContainer").remove();
	});

	// browse photos ---start---
	function readProductImage1(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#imageView1, #imageViewShow1').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInput2").removeAttr('disabled');
				$(".bdr2").css("cssText", "border: 1px solid #007AFF !important;");
				$(".bdr2").hover(function(){
			        $(this).css("border", "1px solid #FFF !important;");
			        }, function(){
			        $(this).css("border", "1px solid #007AFF !important;");
			    });
				$(".pen2").css("cssText", "color: #007AFF !important;");
				$("#fileInputClear1").show();
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function readProductImage2(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#imageView2, #imageViewShow2').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInput3").removeAttr('disabled');
				$(".bdr3").css("cssText", "border: 1px solid #007AFF !important;");
				$(".bdr3").hover(function(){
			        $(this).css("border", "1px solid #FFF !important;");
			        }, function(){
			        $(this).css("border", "1px solid #007AFF !important;");
			    });
				$(".pen3").css("cssText", "color: #007AFF !important;");
				$("#fileInputClear1").hide();
				$("#fileInputClear2").show();

			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function readProductImage3(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$('#imageView3, #imageViewShow3').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInput4").removeAttr('disabled');
				$(".bdr4").css("cssText", "border: 1px solid #007AFF !important;");
				$(".bdr4").hover(function(){
			        $(this).css("border", "1px solid #FFF !important;");
			        }, function(){
			        $(this).css("border", "1px solid #007AFF !important;");
			    });
				$(".pen4").css("cssText", "color: #007AFF !important;");
				$("#fileInputClear2").hide();
				$("#fileInputClear3").show();
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function readProductImage4(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$('#imageView4, #imageViewShow4').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInput5").removeAttr('disabled');
				$(".bdr5").css("cssText", "border: 1px solid #007AFF !important;");
				$(".bdr5").hover(function(){
			        $(this).css("border", "1px solid #FFF !important;");
			        }, function(){
			        $(this).css("border", "1px solid #007AFF !important;");
			    });
				$(".pen5").css("cssText", "color: #007AFF !important;");
				$("#fileInputClear3").hide();
				$("#fileInputClear4").show();
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function readProductImage5(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$('#imageView5, #imageViewShow5').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInput6").removeAttr('disabled');
				$(".bdr6").css("cssText", "border: 1px solid #007AFF !important;");
				$(".bdr6").hover(function(){
			        $(this).css("border", "1px solid #FFF !important;");
			        }, function(){
			        $(this).css("border", "1px solid #007AFF !important;");
			    });
				$(".pen6").css("cssText", "color: #007AFF !important;");
				$("#fileInputClear4").hide();
				$("#fileInputClear5").show();
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function readProductImage6(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$('#imageView6, #imageViewShow6').attr('src', e.target.result)
						.width(100).height(100);
				$('#imageView, #imageViewShow').attr('src', e.target.result)
						.width(320).height(320);
				$("#imageView, #imageViewShow").data('zoom-image',
						e.target.result);
				$(".zoomContainer").remove();
				$("#fileInputClear5").hide();
				$("#fileInputClear6").show();

			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	// browse photos ---end---

	// change large view photo ---start---
	$('#imageView1')
			.bind(
					'click',
					function() {
						if ($('#imageView1').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView1').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView1').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageView2')
			.bind(
					'click',
					function() {
						if ($('#imageView2').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView2').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView2').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageView3')
			.bind(
					'click',
					function() {
						if ($('#imageView3').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView3').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView3').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageView4')
			.bind(
					'click',
					function() {
						if ($('#imageView4').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView4').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView4').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageView5')
			.bind(
					'click',
					function() {
						if ($('#imageView5').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView5').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView5').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageView6')
			.bind(
					'click',
					function() {
						if ($('#imageView6').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageView').attr({
								src : $('#imageView6').attr('src')
							});
							$("#imageView").data('zoom-image',
									$('#imageView6').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	// to Show only in completion
	$('#imageViewShow1')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow1').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow1').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow1').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageViewShow2')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow2').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow2').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow2').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageViewShow3')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow3').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow3').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow3').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageViewShow4')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow4').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow4').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow4').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageViewShow5')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow5').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow5').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow5').attr('src'));
							$(".zoomContainer").remove();
						}
					});

	$('#imageViewShow6')
			.bind(
					'click',
					function() {
						if ($('#imageViewShow6').attr('src') != "/assets/images/wizard_icons/sampImage_1.png") {
							$('#imageViewShow').attr({
								src : $('#imageViewShow6').attr('src')
							});
							$("#imageViewShow").data('zoom-image',
									$('#imageViewShow6').attr('src'));
							$(".zoomContainer").remove();
						}
					});
	// change large view photo ---end---

	// clear photos ---start---
	function clearImageView1() {
		if ($('#imageView').attr('src') == $('#imageView1').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView1, #imageViewShow1').attr('src',
				'/assets/images/wizard_icons/sampImage_1.png');
		$("#fileInput1")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear1").hide();
		$("#fileInput2").attr('disabled', 'disabled');
		$(".bdr2").css("cssText", "border: 1px solid #eee !important;");
		$(".pen2").css("cssText", "color: #eee !important;");
	}
	function clearImageView2() {
		if ($('#imageView').attr('src') == $('#imageView2').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView2, #imageViewShow2').attr('src',
				'/assets/images/wizard_icons/sampImage_2.png');
		$("#fileInput2")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear2").hide();
		$("#fileInputClear1").show();
		$("#fileInput3").attr('disabled', 'disabled');
		$(".bdr3").css("cssText", "border: 1px solid #eee !important;");
		$(".pen3").css("cssText", "color: #eee !important;");
	}
	function clearImageView3() {
		if ($('#imageView').attr('src') == $('#imageView3').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView3, #imageViewShow3').attr('src',
				'/assets/images/wizard_icons/sampImage_3.png');
		$("#fileInput3")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear3").hide();
		$("#fileInputClear2").show();
		$("#fileInput4").attr('disabled', 'disabled');
		$(".bdr4").css("cssText", "border: 1px solid #eee !important;");
		$(".pen4").css("cssText", "color: #eee !important;");
	}
	function clearImageView4() {
		if ($('#imageView').attr('src') == $('#imageView4').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView4, #imageViewShow4').attr('src',
				'/assets/images/wizard_icons/sampImage_4.png');
		$("#fileInput4")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear4").hide();
		$("#fileInputClear3").show();
		$("#fileInput5").attr('disabled', 'disabled');
		$(".bdr5").css("cssText", "border: 1px solid #eee !important;");
		$(".pen5").css("cssText", "color: #eee !important;");
	}
	function clearImageView5() {
		if ($('#imageView').attr('src') == $('#imageView5').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView5, #imageViewShow5').attr('src',
				'/assets/images/wizard_icons/sampImage_5.png');
		$("#fileInput5")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear5").hide();
		$("#fileInputClear4").show();
		$("#fileInput6").attr('disabled', 'disabled');
		$(".bdr6").css("cssText", "border: 1px solid #eee !important;");
		$(".pen6").css("cssText", "color: #eee !important;");
	}
	function clearImageView6() {
		if ($('#imageView').attr('src') == $('#imageView6').attr('src')) {
			$('#imageView, #imageViewShow').attr('src',
					'/assets/images/wizard_icons/sampImage_big.png');
		}
		$('#imageView6, #imageViewShow6').attr('src',
				'/assets/images/wizard_icons/sampImage_6.png');
		$("#fileInput6")[0].value = '';
		$(".zoomContainer").remove();
		$("#fileInputClear6").hide();
		$("#fileInputClear5").show();
	}
	// clear photos ---end--
	/* 
	 ------------------------------------------------------------------------------------------------------------------------
	 										end :: for photo gallery
	 ------------------------------------------------------------------------------------------------------------------------ 
	 */