var page = require('webpage').create();
page.open('http://example.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    var base64 = page.renderBase64('example.png');
    var imageBuffer = WindowBase64.btoa(base64);
    require("fs").writeFile("out.png", imageBuffer, "binary", function(err) {
  console.log(err); // writes out file without error, but it's not a valid image
});
  }
  phantom.exit();
});