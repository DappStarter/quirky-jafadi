require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name release machine slow good end army gas'; 
let testAccounts = [
"0x892fad648702264bf621c21572af775321c6433d394c817e2d0558d7749a16d5",
"0xd61bcec21cab86bfb3b317fbeadb5481f791958d21355ecacb55ffa78bccd656",
"0x8ea061b1b13489d4ad25cef20b133a29695b5350df3db01cdb55390e72f701a3",
"0x233569659c88dadca060c523d43fbe8d2e50a179d73c04d3db26d3dfc1df7819",
"0x13d2f167f3a65befbcd814115cc709cc1db10432efd5e0fc95c7102eefc3cae4",
"0x51483ec49d34e4580f84b21606daa6a5d370bdd37a248fe18398c3f5c03e69ae",
"0x8fb85a69c31735999b1fe64510f6c8af5f1c0790bd28a9ddeb8695004b9851de",
"0x8b53fe08d20b3b86a356e6e7e3ade3007a855e29310f1a46920073dd70becb3f",
"0x0ffbf65b28398163103bc39c02ae71585b9e907497a3b6e0a1f2b92ec532b891",
"0xb98dfe60efcd61b2e0fc88f6e3328fc696c81d5d49af9e8681537af958485e7f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
