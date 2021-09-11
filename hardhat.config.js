require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString()
const projectId = ""

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}` ,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    
  }
}