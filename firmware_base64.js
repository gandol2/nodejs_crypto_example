var sys = require('sys');
var base64_encode = require('base64').encode;
var Buffer = require('buffer').Buffer;

var buf = new Buffer('hello world');

sys.print(base64_encode(buf));

/* Output: aGVsbG8gd29ybGQ= */