
var express = require("express"), bodyParser = require('body-parser');
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
	
var app = express();
app.use(bodyParser.json());

app.post("/", function(request, response){ 
webdriverio
    .remote(options)
    .init()
    .url('https://www.amazon.com')
	.click('#nav-link-accountList')
	.setValue('#ap_email', request.body.username)
		.setValue('#ap_password', request.body.password)
		.click('#signInSubmit').getUrl().then(function(url) {
			  assert.equal(url, 'https://www.amazon.com/?ref_=nav_ya_signin&');
			  response.send("login");
			})
    .end();
});

app.listen(3000, function () {
  console.log('Ready');
});
	
	