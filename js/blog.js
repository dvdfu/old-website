// var tumblr = require('tumblr.js');
// var client = tumblr.createClient({ consumer_key: 'Zj8p3vYT7tfYAvk22I80NeoHk4q59Fc7OOQRZAuxz1pDyCO7o4' });
// client.posts('dvdfu.tumblr.com', function (err, data) {
//     // ...
// });

var APIblog = 'dvdfu.tumblr.com';
var APIkey = 'Zj8p3vYT7tfYAvk22I80NeoHk4q59Fc7OOQRZAuxz1pDyCO7o4';
var APIurl = 'http://api.tumblr.com/v2/blog/' + APIblog + '/posts?api_key=' + APIkey + '&limit=4';
$.getJSON('http://api.tumblr.com/v2/blog/peacecorps.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&notes_info=true', function(tumblr) {
	console.log(tumblr);
});