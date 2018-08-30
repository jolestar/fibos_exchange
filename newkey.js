var FIBOS = require("fibos.js");
var prikey = FIBOS.modules.ecc.randomKeySync();
var pubkey = FIBOS.modules.ecc.privateToPublic(prikey);
console.log(prikey);
console.log(pubkey);
