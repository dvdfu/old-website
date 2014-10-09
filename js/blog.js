var APIblog = 'dvdfu.tumblr.com';
var APIkey = 'Zj8p3vYT7tfYAvk22I80NeoHk4q59Fc7OOQRZAuxz1pDyCO7o4';
var APIurl = 'http://api.tumblr.com/v2/blog/' + APIblog + '/posts?api_key=' + APIkey + '&limit=6';

$(document).ready(function() {
	$.ajax({
	    url: APIurl,
	    dataType: 'jsonp',
	    success: function(tumblr) {
	    	var posts = tumblr.response.posts;
	    	console.log(posts);
	        for (var i in posts) {
	        	$('.blogfeed').append('<h3 href=' + posts[i].short_url + '>' + posts[i].date.substr(0, 10) + '</h3>');
	        	for (var j in posts[i].photos) {
	        		$('.blogfeed').append('<a href="' + posts[i].photos[j].original_size.url +
						'" data-lightbox="post' + i + '"><img class="project-images" src="' +
						posts[i].photos[j].original_size.url + '"></a>');
	        	}
	        	$('.blogfeed').append(posts[i].caption);
	        	$('.blogfeed').append('<div class="divider"></div>');
	        }
	    }
	});
});