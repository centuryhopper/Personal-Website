// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// });

// var server = app.listen(8081, function () {
//    var host = server.address().address;
//    var port = server.address().port;

//    console.log("Example app listening at http://%s:%s", host, port);
// });

function HandlePostRequest()
{
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    // Create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.use(express.static('public'));
    app.get('/index.html', function (req, res)
    {
        res.sendFile(__dirname + "/" + "index.html");
    });

    app.post('/process_post', urlencodedParser, function (req, res)
    {
        res.send('Thank you :) Your form has been received');
        // Prepare output in JSON format
        response = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        };
        console.log(response);
        res.end(JSON.stringify(response));

    });

    var server = app.listen(8081, function ()
    {
        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host, port)
    });
}

// simiulate a main method from languages like java and C
function Main()
{
    HandlePostRequest();
}


// runs the Main method
Main();

// run node dummy.js
// then type the following in the browser:
// http://127.0.0.1:8081/


