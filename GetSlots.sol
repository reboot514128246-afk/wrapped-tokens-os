pragma solidity 0.6.12;
contract GetSlots {
    bytes32 public constant oracle = keccak256("org.coinbase.stakedToken.exchangeRateOracle");
    bytes32 public constant rate = keccak256("org.coinbase.stakedToken.exchangeRate");
}
