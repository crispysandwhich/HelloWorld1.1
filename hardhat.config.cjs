require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: process.env.API_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
