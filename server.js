var app = require('./server-config.js');

//var port = 4568;
var port = process.env.PORT || 8000;
//app.listen(process.env.PORT || port);
// app.listen(port);
app.listen(port, function() {
    console.log("App is running on port " + port);
});

console.log('Server now listening on port ' + port);
