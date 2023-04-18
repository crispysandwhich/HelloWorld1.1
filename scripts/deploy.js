const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const NAME = 'ghostieve'
  const SYMBOL = 'gh0st'
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const dePortalContractFactory = await hre.ethers.getContractFactory("DePortalFactory");
  const dePortalContract = await dePortalContractFactory.deploy(NAME, SYMBOL);
  await dePortalContract.deployed();

  console.log("dePortalPortal address: ", dePortalContract.address);

  const CHANNEL_NAMES = ['DOGE','SHIB','KOI', 'lounge', 'DevBox' ]
  const COST = [tokens(.2), tokens(.1), tokens(.3), tokens(.4), tokens(.5)]

  for(var i = 0; i < CHANNEL_NAMES.length; i++) {
    const transaction = await dePortalContract.connect(deployer).createChannel(CHANNEL_NAMES[i], COST[i])
    await transaction.wait()

    console.log('Created a channel named: ', CHANNEL_NAMES[i])
  }


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