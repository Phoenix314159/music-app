'use strict';

var http = require('http'),
	pathUtils = require('path'),
	express = require("express"),
	app = express(),
	PORT = process.env.PORT || 3100;

app.use( express.static( pathUtils.resolve( __dirname, "client" ) ) );

http.createServer(app).listen( PORT, function() {
    console.log('Express server listening on port ' + PORT);
    console.log('http://localhost:' + PORT);
} );