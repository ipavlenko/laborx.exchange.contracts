const secrets = require('./secrets')
const HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = secrets.mnemonic

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    live: {
      network_id: 1 // Ethereum public network
      // optional config values
      // host - defaults to 'localhost'
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io')
      },
      network_id: 3
    },
    demo: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'http://192.168.10.6:8545')
      },
      network_id: 135744, // 0x21240
      gas: 4700000,
      gasPrice: 0x01
    },
    stage: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://parity.tp.ntr1x.com:8545')
      },
      network_id: 88, // 0x21240
      gas: 4700000,
      gasPrice: 0x01
    },
    ganache: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545')
      },
      network_id: 5777, // 0x21240
      gas: 4700000,
      gasPrice: 0x01
    },
    testrpc: {
      network_id: 'default'
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    }
  }
}
