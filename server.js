'use strict';

var AlexaAppServer = equire('alexa-app-server');

var server = new AlexaAppServer ({
	httpsEnabled: false,
	port: process.env.port || 80;
});

server.start();
