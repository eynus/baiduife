var inputList=$(".form__input");
var formList=$(".form__wrapper");

$(document).click(function(){
	formList.children(".line").css({
		"width":"0",
		"transition": "width 0.3s ease-out"
	});
	if($("#email").val().length>0 && $("#password").val().length>0){
		$(".btn").addClass("animated pulse");
		$(".btn").css({
			"animation-iteration-count":"infinite"
		})
	}
})
inputList.click(function(event){
	event.stopPropagation();
	$(".btn").removeClass("animated pulse");
	formList.children(".line").css({
		"width":"0",
		"transition": "width 0.3s ease-out"
	});
	$(event.target).parent().children(".line").css({
		"width":"100%",
		"transition": ""
	});
	$(event.target).next().css({
		"bottom":"10px",
		"font-size":"14px"
	});
//	$(event.target).parent().css("border-bottom","2px solid #2196f3");
})