var numCircles = 6;
var xScreenCenter = $(window).width() / 2;
var xRingCenter = $(window).width() / 4;
var yRingCenter = $(window).height() / 2;
var ringRadius = 180;
var circleCentered;
var animShort = 400;
var animLong = 800;

$(document).ready(function() {
	loadItems();
	$(".circle").hover(function () {
		var circle = $(this);
		var icon = $('#icon-' + circle.attr('name'));
		circle.css('background-color', '#ffffcc');
		icon.css('color', '#22a044');
	}, function () {
		var circle = $(this);
		var icon = $('#icon-' + circle.attr('name'));
		circle.css('background-color', '#22a044');
		icon.css('color', '#ffffcc');
	});

	$('.circle').click(function() {
		var circle = $(this);
		if (circle.attr('clicked') == 0) {
			if (circleCentered != null) {
				circleExit(circleCentered);
			}
			circleEnter(circle);
		}
	});
});

function loadItems () {
	$('.panel').animate({
		'left': '50%'
	}, animLong);

	for (var i = 1; i <= numCircles; i++) {
		var circle = $('#circle-' + i);
		var theta = (Math.PI * 2 * (i - 1) - Math.PI * 3) / numCircles;
		var x = xRingCenter + Math.cos(theta) * ringRadius;
		var y = yRingCenter + Math.sin(theta) * ringRadius;
		circle.attr('clicked', 0);
		circle.attr('y-orig', y);
		circle.attr('x-orig', x);
		if (i == 1) {
			circleEnter(circle);
		} else {
			circle.animate({
				'top': y,
				'left': x
			}, animShort);
		}
	}
}

function circleEnter(circle) {
	circleCentered = circle;
	var w = ringRadius * 2 - 140;
	circle.animate({
		'width': w,
		'height': w,
		'line-height': w,
		'margin-left': -w / 2,
		'margin-top': -w / 2,
		'top': yRingCenter,
		'left': xRingCenter
	}, animShort, 'swing', function() {	});
	circle.attr('clicked', 1);
	$('.panel-text').hide();
	$('#' + circle.attr('name')).show();
}

function circleExit(circle) {
	var w = 100;
	circle.animate({
		'width': w,
		'height': w,
		'line-height': w,
		'margin-left': -w / 2,
		'margin-top': -w / 2,
		'top': circle.attr('y-orig'),
		'left': circle.attr('x-orig')
	}, animShort, 'swing', function() { });
	circle.attr('clicked', 0);
}