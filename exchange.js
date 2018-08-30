var FIBOS = require("fibos.js");
var conf = require('./config.js')
var config = {
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    priKey: conf.priKey,
    httpEndpoint: "http://to-rpc.fibos.io:8870",
    verbose: false,
}
var fibos_client = FIBOS({
    chainId: config.chainId,
    keyProvider: config.priKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
})

let ctx = fibos_client.contractSync("eosio.token");
var result = ctx.exchangeSync(conf.account, `1.0000 EOS@eosio`, `0.0000 FO@eosio`, `exchange EOS to FO`, {
    authorization: conf.account
});
console.log(result);
