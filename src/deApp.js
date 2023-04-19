import { ethers } from 'ethers';

// ABI
import DePortal from './abis/DePortalFactory.json'

// Contract Address
const contractAddress = '0x80eB8BaE2dC52806EAbfc0981137C63BF968F06d'

const provider = new ethers.providers.Web3Provider(window.ethereum)

const dePortal = new ethers.Contract(contractAddress, DePortal, provider);

const DEFAULT_SEND_OPTIONS = {
  gas: 6000000
};


const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

// Create Channel
export async function createChannel(name, cost) {
  console.log(name, cost, 'in db')
  const account = await handleConnect()
  const signer = provider.getSigner()
  console.log(signer, 'in db')

  const transaction = await dePortal.connect(signer).createChannel(name, tokens(cost))
  await transaction.wait()
  return getChannels()
}

// Mint / Join channel
export async function mintAccess(channelID) {



}

// Get channel by ID

// Get channels
export async function getChannels() {
  const channels = []
  const totalChannels = await dePortal.totalChannels()

  for(let i = 1; i <= totalChannels; i++) {
    const channel = await dePortal.getChannel(i)
    channels.push(channel)
  }

  return channels

}

export async function handleConnect() {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const account = ethers.utils.getAddress(accounts[0])
  return account
}


