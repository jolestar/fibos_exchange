var FIBOS = require("fibos.js");
var conf = require('./config.js');
var config = {
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    priKey: conf.eosPriKey,
    httpEndpoint: "http://mainnet.genereos.io",
    verbose: false,
}
var eos_client = FIBOS({
    chainId: config.chainId,
    keyProvider: config.priKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
})
let eosaccount = conf.eosAccount; // 你的 EOS 账户名
let value = "1.0000" + " EOS"; //兑换 EOS 数量
let ctx = eos_client.contractSync("eosio.token");
let memo = conf.account; //填入你的fibso 账号
let result = ctx.transferSync(eosaccount, "fiboscouncil", value, memo);
console.log(result);
