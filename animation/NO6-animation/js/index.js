$(".container li:nth-child(1)").click(
	function() {
		//		debugger;
		$(this).parent().prev().children("li").css({
			"opacity": "0",
			"animation": ""
		});
		$(this).parent().prev().children("li:nth-child(1)").css({
			"opacity": "1",
			"animation": "slide1 0.5s ease-out"
		})
	}
)
$(".container li:nth-child(2)").click(
	function() {
		$(this).parent().prev().children("li").css({
			"opacity": "0",
			"animation": ""
		});
		$(this).parent().prev().children("li:nth-child(2)").css({
			"opacity": "1",
			"animation": "slide2 0.5s ease-out"
		})
	}
)
$(".container li:nth-child(3)").click(
	function() {
		$(this).parent().prev().children("li").css({
			"opacity": "0",
			"animation": ""
		});
		$(this).parent().prev().children("li:nth-child(3)").css({
			"opacity": "1",
			"animation": "slide3 1.0s ease-in"
		})
	}
)
$(".container li:nth-child(4)").click(
	function() {
		$(this).parent().prev().children("li").css({
			"opacity": "0",
			"animation": ""
		});
		$(this).parent().prev().children("li:nth-child(4)").css({
			"opacity": "1",
			"animation": "slide4 1.0s ease-out"
		})
	}
)
$(".container li:nth-child(5)").click(
	function() {
		$(this).parent().prev().children("li").css({
			"opacity": "0",
			"animation": ""
		});
		$(this).parent().prev().children("li:nth-child(5)").css({
			"opacity": "1",
			"animation": "slide5 0.7s ease-in-out"
		})
	}
)
//$(".container li:nth-child(1)").click(
//	function(){
//		$(this).parent().prev().children("li").css(
//			"opacity","0"
//		);
//		$(this).parent().prev().children("li:nth-child(1)").animate({
//			left:'0px',
//          opacity:'1',
//		})
//	}
//)
//$(".container li:nth-child(2)").click(
//	function(){
//		$(this).parent().prev().children("li").css(
//			"opacity","0"
//		);
//		$(this).parent().prev().children("li:nth-child(2)").animate({
//			top:'0px',
//          opacity:'1',
//		})
//	}
//)
//$(".container li:nth-child(3)").click(
//	function(){
//		$(this).parent().prev().children("li").css(
//			"opacity","0"
//		);
//		$(this).parent().prev().children("li:nth-child(3)").animate({
//			top:'0px',
//          opacity:'1',
//		})
//	}
//)
//$(".container li:nth-child(4)").click(
//	function(){
//		$(this).parent().prev().children("li").css(
//			"opacity","0"
//		);
//		$(this).parent().prev().children("li:nth-child(4)").animate({
//			top:'0px',
//          opacity:'1',
//		})
//	}
//)
//$(".container li:nth-child(5)").click(
//	function(){
//		$(this).parent().prev().children("li").css(
//			"opacity","0"
//		);
//		$(this).parent().prev().children("li:nth-child(5)").animate({
//			top:'0px',
//          opacity:'1',
//		})
//	}
//)