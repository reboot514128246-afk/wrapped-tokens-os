const Web3 = require('web3');
const web3 = new Web3();
console.log('oracle:', web3.utils.keccak256('org.coinbase.stakedToken.exchangeRateOracle'));
console.log('rate:', web3.utils.keccak256('org.coinbase.stakedToken.exchangeRate'));
console.log('masterMinter:', web3.utils.keccak256('fiatToken.masterMinter'));
console.log('pauser:', web3.utils.keccak256('fiatToken.pauser'));
console.log('blacklister:', web3.utils.keccak256('fiatToken.blacklister'));
