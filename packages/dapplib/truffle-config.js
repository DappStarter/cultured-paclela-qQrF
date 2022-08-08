require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind around gloom glimpse force search'; 
let testAccounts = [
"0x35655ca0d495496472e198cd4cc50d305ff63b9f17689ab31c9a918f05232778",
"0x61c44aafffee1a25b5165cc920f7ec3044b1d8de9364c39946df445d8ff2330f",
"0xbf398c46d572e08527ab9ec81a6ee358aeafaed5eae49f647ddf1de019414585",
"0x8137a9ec211e44b3b231b0e02babad414bb359d2ed12019bc82ecfb50f751611",
"0xc802c585aacd78789046c9eabf0d80c1d9b11d67bd32b524c8845d9ffe2eeb12",
"0x9cb04e2e8499cf2c23cd9b241ff0a36d3c630ad612ecb360fc9e94c939a46678",
"0x382c90c7913013d1e09b69847429d2eb402f34b987df8130711ecb780078136f",
"0xfbb6033091bc2f61aedae0ae3f9c83b8b25186c20fd27b9120467560dfa22890",
"0x354ea7837db69feb8bb559f7bce509bffea1d6d48dd2acbe299bed7ce6da66a8",
"0x2bedfc80beebc147f523ed2e6aedc67f5230d57454fca12ce0a47bd4c3e00516"
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
            version: '^0.8.0'
        }
    }
};

