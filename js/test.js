var numCircles = 6;
var xScreenCenter = 600;
var yScreenCenter = 300;
var circleRadius = 240;
var circleCentered;

$(document).ready(function() {
	$(".circle").click(function(event) {
		var circle = $(this);
		if (circle.attr("clicked") === "0") {
			if (circleCentered != null) {
				circleExit(circleCentered);
			}
			circleEnter(circle);
		}
	});
	setCirclePositions();
});

function setCirclePositions () {
	for (var i = 1; i <= numCircles; i++) {
		var theta = Math.PI * 3 / 2 + Math.PI * 2 * (i - 1) / numCircles / 3;
		var circle = $("#circle-" + i);
		var x = xScreenCenter + Math.cos(theta) * circleRadius;
		var y = yScreenCenter + Math.sin(theta) * circleRadius;
		circle.attr("clicked", 0);
		circle.attr("y-orig", y);
		circle.attr("x-orig", x);
		circle.offset({
			top: y,
			left: x,
		});
	}
}

function circleEnter(circle) {
	circleCentered = circle;
	circle.animate({
		"width": 320,
		"height": 320,
		"margin-left": -160,
		"margin-top": -160,
		"top": yScreenCenter,
		"left": xScreenCenter
	}, 600);
	circle.attr("clicked", 1);
}

function circleExit(circle) {
	circle.animate({
		"width": 80,
		"height": 80,
		"margin-left": -40,
		"margin-top": -40,
		"top": circle.attr("y-orig"),
		"left": circle.attr("x-orig")
	}, 600);
	circle.attr("clicked", 0);
}