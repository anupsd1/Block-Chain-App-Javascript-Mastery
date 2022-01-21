// https://eth-ropsten.alchemyapi.io/v2/v07NR1gY4NvRexDUj9EfIjWq7MXL8ykC

// Plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/v07NR1gY4NvRexDUj9EfIjWq7MXL8ykC',
      accounts: [ '4fb6c0e478a557c5297b535914475380013d7941d1c7342e9ec083ea94f8f295' ]
    }
  }
}