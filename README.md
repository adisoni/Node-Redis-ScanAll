# Redis-ScanAll
A simple and easy to use node.js module for scanning all elements in a Redis database. Works like the redis 'KEYS' command but with added features and without the disadvantages. 

## Sample Usage
```
var redis = require("redis");

var client = redis.createClient();

client.on();

var redisScan = require('index.js');
options = {
  nextIndex: ;          \\default value 0
  listofResults: ;      \\default value []
  count: ;              \\default value 10
  prohibitedItems: ;    \\default value []
  quit: ;               \\default value true
  clientName: ;         \\default value client
  callback: ;           \\default value console.log(data)
}
redisScan.scanAll(options)
```
