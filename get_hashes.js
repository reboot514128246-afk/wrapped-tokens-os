const { ethers } = require("hardhat");

async function main() {
  const oracle = ethers.utils.id("org.coinbase.stakedToken.exchangeRateOracle");
  const rate = ethers.utils.id("org.coinbase.stakedToken.exchangeRate");
  const impl = ethers.utils.id("org.zeppelinos.proxy.implementation");
  const admin = ethers.utils.id("org.zeppelinos.proxy.admin");

  console.log("Oracle Position:", oracle);
  console.log("Rate Position:", rate);
  console.log("Implementation Position:", impl);
  console.log("Admin Position:", admin);
}

main();
