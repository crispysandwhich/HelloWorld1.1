// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17; // by default I should have the experimental ABIENCODER 


import "hardhat/console.sol";

contract DeWave {

  uint256 totalUsers;

  struct User {
    uint256 id;
    uint256 username;
    address userWallet;
  }

  struct Message {
    uint256 id;
    string message;
    uint256 time;
    address sender;
  }

  User[] public users;
  Message[] public messages;

  constructor() {
    console.log('Deployed a second contract');
  }

  function sendMessage(string memory _message) public {
    console.log('the current message is', _message);


    messages.push(Message(1, _message, block.timestamp, msg.sender));

  }

  function getTotalUsers() public view returns(uint256) {
    return totalUsers;
  }

}