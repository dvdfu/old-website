var numCircles = 7;
var xScreenCenter = $(window).width() / 2;
var xRingCenter = $(window).width() / 4;
var yRingCenter = $(window).height() / 2;
var ringRadius = $(window).width() / 6.5;
var circleCentered;
var animShort = 400;
var animLong = 800;

$(document).ready(function() {
	loadItems();
	$(".circle").hover(function () {
		var circle = $(this);
		var icon = $('.icon-' + circle.attr('name'));
		circle.css('background-color', '#ffffcc');
		icon.css('color', '#22a044');
	}, function () {
		var circle = $(this);
		var icon = $('.icon-' + circle.attr('name'));
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
		var circle = $('.circle-' + i);
		var icon = $('.icon-' + circle.attr('name'));
		icon.css('font-size', ringRadius / 4);
		var theta = (Math.PI * 2 * (i - 1)) / numCircles - Math.PI / 2;
		var x = xRingCenter + Math.cos(theta) * ringRadius;
		var y = yRingCenter + Math.sin(theta) * ringRadius;
		circle.attr('clicked', 0);
		circle.attr('y-orig', y);
		circle.attr('x-orig', x);
		if (i == 1) {
			circleEnter(circle);
		} else {
			circleExit(circle);
		}
	}
}

function circleEnter(circle) {
	circleCentered = circle;
	var w = ringRadius;
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

	var icon = $('.icon-' + circle.attr('name'));
	icon.animate({
		'font-size': ringRadius / 2
	}, animShort);

	$('html, body').scrollTop(0);
	$('.panel').css('left', '100%');
	$('.panel').stop();
	$('.panel').animate({
		'left': '50%'
	}, animLong);

	$('.panel-text').hide();
	$('.panel-header').hide();
	$('.' + circle.attr('name')).show();
}

function circleExit(circle) {
	var w = ringRadius / 2;
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

	var icon = $('.icon-' + circle.attr('name'));
	icon.animate({
		'font-size': ringRadius / 4
	}, animShort);
}