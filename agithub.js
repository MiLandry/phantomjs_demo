var page = require('webpage').create();
page.open('http://github.com/', function() {
console.log("drawing github.com, github.png created");
  page.render('github.png');
  phantom.exit();
});