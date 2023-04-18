import { ethers } from 'ethers';

// ABI
import DePortal from './abis/DePortalFactory.json'

// Contract Address
const contractAddress = '0x9A676e781A523b5d0C0e43731313A708CB607508'

const provider = new ethers.providers.Web3Provider(window.ethereum)

const dePortal = new ethers.Contract(contractAddress, DePortal, provider);


// Create Channel

// Mint / Join channel

// Get channel by ID


