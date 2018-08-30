var http = require('http');
var conf = require('./config.js');

var httpClient = new http.Client();
var httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";
var account = conf.account
var pubKey = conf.pubKey
var rep = httpClient.post(httpServerHost, {
            json: {
                    account: account,
                    pubkey: pubKey
            }
}).json()
console.log(rep);
