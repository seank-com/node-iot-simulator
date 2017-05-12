'use strict';

//
// Author: Sean Kelly
// Copyright (c) 2016 by Microsoft. All rights reserved.
// Licensed under the MIT license.
// See LICENSE file in the project root for full license information.
//

// When running in production, forever doesn't set the working directory
// correctly so we need to adjust it before trying to load files from the
// requires below. Since we know we are run as the node user in production
// this is an easy way to detect that state.
//console.log("Running as " + process.env.USER + "(" + process.getuid() + ") in process " + process.pid + " with a cwd of " + process.cwd());

var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World 2\n");
});

server.listen(3000);
console.log("Server running at http://localhost:3000/");

// process.on('SIGTERM', function() {
//   console.log('SIGTERM');
//   process.exit(1);
// });
//
// process.on('SIGINT', function() {
//   console.log('SIGINT');
//   process.exit(2);
// });
//
// process.on('SIGBREAK', function() {
//   console.log('SIGBREAK');
//   process.exit(3);
// });
//
// process.on('exit', (code) => {
//   console.log(`About to exit with code: ${code}`);
// });
//
// setInterval(function () {
//     console.log("doing something on " + process.env.HOSTNAME);
//   }, 5000);
