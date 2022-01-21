1. https://faucet.egorfine.com/
provides us with test ethereum in wallet

2. After running deploy command -
npx hardhat run scripts/deploy.js --network ropsten
We get the contractAddress and a new file is generated Trasactions.json in artifacts/contracts.
This is called an ABI. It is a contract Application Binary Interface. That is the standard way to interact with contracts in the ethereum ecosystem (both from outside of the blockchain and contract to contract interactions)
3. We copy that file on client side in react.
4. We are going to use React Context API around our entire application that is going to only serve the purpose of connecting to the blockchain. 
All the logic is going to be written in TransactionContext.js
