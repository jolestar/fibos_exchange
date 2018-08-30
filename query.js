var FIBOS = require("fibos.js");
var conf = require("./config.js");
var config = {
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    priKey: conf.privKey,
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
var rs = fibos_client.getTableRowsSync(true, "eosio.token", conf.account, "accounts");
console.log(rs);
