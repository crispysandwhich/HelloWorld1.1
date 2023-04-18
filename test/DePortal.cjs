const { expect } = require('chai')

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("DePortalFactory", function () {
  let dePortal

  const NAME = 'Ghostieve'
  const SYMBOL = 'gh0st'

  beforeEach(async () => {
    // Setup Accounts
    [deployer, user] = await ethers.getSigners()

    // Launch smart contract
    const DePortal = await ethers.getContractFactory('DePortalFactory')
    dePortal = await DePortal.deploy(NAME, SYMBOL)

    // Create a channel
    const transaction = await dePortal.connect(deployer).createChannel("general", tokens(1))
    await transaction.wait()

  })


  describe("deployment", function () {

    it("sets the name", async () => {
      let result = await dePortal.name()
      expect(result).to.equal(NAME)
    })

    it("sets the symbol", async () => {
      let result = await dePortal.symbol()
      expect(result).to.equal(SYMBOL)
    })

    it("sets the owner", async () => {
      let result = await dePortal.owner()
      expect(result).to.equal(deployer.address)
    })


  })


  describe("creating channels", function() {

    it("returns total channels", async () => {
      let result = await dePortal.totalChannels()
      expect(result).to.be.equal(1)
    })

    it("resturns channel attributes", async () => {
      const channel = await dePortal.getChannel(1)
      expect(channel.id).to.be.equal(1)
      expect(channel.name).to.be.equal("general")
      expect(channel.cost).to.be.equal(tokens(1))

    })

  })

  describe("joining channels", function() {

    const ID = 1;
    const AMOUNT = ethers.utils.parseUnits("1", 'ether')

    beforeEach(async () => {
      const transaction = await dePortal.connect(user).mint(ID, {value: AMOUNT});
      await transaction.wait()
    })

    it('joins the user', async () => {
      const result = await dePortal.hasJoined(ID, user.address);
      expect(result).to.be.equal(true)
    })

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(dePortal.address)
      expect(result).to.be.equal(AMOUNT)
    })

  })

  describe("withdrawing", () => {

    const ID = 1;
    const AMOUNT = ethers.utils.parseUnits("10", 'ether')
    let balanceBefore

    beforeEach(async () => {
      balanceBefore = await ethers.provider.getBalance(deployer.address)

      let transaction = await dePortal.connect(user).mint(ID, {value: AMOUNT})
      await transaction.wait()

      transaction = await dePortal.connect(deployer).withdraw()
      await transaction.wait()

    })

    it("updates the owner balance", async () => {
      const balanceAfter = await ethers.provider.getBalance(deployer.address)
      expect(balanceAfter).to.be.greaterThan(balanceBefore)
    })

    it('updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(dePortal.address)
      expect(result).to.equal(0)
    })

  })


})