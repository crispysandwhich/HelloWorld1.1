// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17; // by default I should have the experimental ABIENCODER 


import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; 
// import "./DeWave.sol";

contract DePortalFactory is ERC721 {
  uint256 public totalChannels;
  uint256 totalNftSupply;
  address public owner;


  struct Channel {
    uint256 id;
    string name;
    uint256 cost;
  }


  mapping(uint256 => Channel) public channels;
  mapping(uint256 => mapping(address => bool)) public hasJoined;

  modifier onlyOwner() {
    require(msg.sender == owner, 'sorry GTFO');
    _;
  }

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
    owner = msg.sender;
  }

  function createChannel (string memory _name, uint256 _cost) public payable {
    totalChannels++;
    channels[totalChannels] = Channel(totalChannels, _name, _cost);
  }

  function mint(uint256 _id) public payable {
    require(_id != 0);
    require(_id <= totalChannels);
    require(hasJoined[_id][msg.sender] == false);
    require(msg.value >= channels[_id].cost);

    // joins channel
    hasJoined[_id][msg.sender] = true;

    totalNftSupply++;
    _safeMint(msg.sender, totalNftSupply);

  }

  function getChannel(uint256 _id) public view returns(Channel memory) {
    return channels[_id];
  }

  function withdraw() public onlyOwner {
    (bool success, ) = owner.call{value: address(this).balance}("");
    require(success); 
  }

}