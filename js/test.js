$(document).ready(function() {
	$(".circle").click(function(event) {
		$(this).animate({
			"width": "400px",
			"height": "400px",
			"margin-top": "-200px",
			"margin-left": "-200px"
		});
	});
});