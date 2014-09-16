var numCircles = 6;
var xScreenCenter = $(window).width() / 2;
var xRingCenter = $(window).width() / 4;
var yRingCenter = $(window).height() / 2;
var ringRadius = 160;
var circleCentered;

$(document).ready(function() {
	$(".circle").click(function(event) {
		var circle = $(this);
		if (circle.attr("clicked") == 0) {
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
		var circle = $("#circle-" + i);
		var theta = (Math.PI * 2 * (i - 1) + Math.PI) / numCircles;
		var x = xRingCenter + Math.cos(theta) * ringRadius
	;
		var y = yRingCenter + Math.sin(theta) * ringRadius
	;
		circle.attr("clicked", 0);
		circle.attr("y-orig", y);
		circle.attr("x-orig", x);
		circle.animate({
			"top": y,
			"left": x
		}, 600);
	}
	// circleEnter($("#circle-1"));
}

function circleEnter(circle) {
	circleCentered = circle;
	var w = ringRadius
 * 2 - 120;
	circle.animate({
		"width": w,
		"height": w,
		"margin-left": -w / 2,
		"margin-top": -w / 2,
		"top": yRingCenter,
		"left": xRingCenter
	}, 600);
	circle.attr("clicked", 1);
}

function circleExit(circle) {
	var w = 80;
	circle.animate({
		"width": w,
		"height": w,
		"margin-left": -w / 2,
		"margin-top": -w / 2,
		"top": circle.attr('y-orig'),
		"left": circle.attr('x-orig')
	}, 600);
	circle.attr("clicked", 0);
}