// Execute and deploy contract
const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  // Address of the smart contract deployed on the blockchain
  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();