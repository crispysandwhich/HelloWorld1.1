const main = async () => {
  const [owner, user] = await hre.ethers.getSigners()
  const DePortalContractFactory = await hre.ethers.getContractFactory("DePortal");
  const dePortalContract = await DePortalContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1")
  });
  await dePortalContract.deployed();

  console.log("Contract deployed to:", dePortalContract.address);

  // Reading contract Balance
  let contractBalance = await hre.ethers.provider.getBalance(dePortalContract.address)
  console.log(hre.ethers.utils.formatEther(contractBalance))
  
  // Get total messages number
  await dePortalContract.getAllMessages();

  let messageTrx = await dePortalContract.createAMessage('What is life')

  await messageTrx.wait()

  await dePortalContract.getAllMessages()
  
  messageTrx = await dePortalContract.connect(user).createAMessage('Creating a message')
  
  await messageTrx.wait()
  
  // Returns array of messages;
  let x = await dePortalContract.getAllMessages()
  console.log(x)

  contractBalance = await hre.ethers.provider.getBalance(dePortalContract.address)
  console.log(hre.ethers.utils.formatEther(contractBalance))


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
  
};

runMain();