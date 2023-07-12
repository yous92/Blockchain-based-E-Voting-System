# Blockchain based E-Voting System
It is a simple decentralized blockchain based e-voting system created as a project for the Software Architecture course at the Higher National School of Computer Science. Teammates include myself, Gouasmia Malak, Touhar Afnan and Sahbi Ouael.

## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network localhost scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. 

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```
Install MetaMask extension (https://metamask.io/download.html) and make sure to have some Ether to test the application locally.

## Technologies Used:
- Metamask
- hardhat
- Visual Studio Code


## Languages used:

- Solidity/ether.js (for writing/connecting the Blockchain contract)
- React.js (front-end)
- ExpressJS/Node.js (back-end)

## Screenshots of the app:

Homepage of the application:
![](screenshots/homepage.PNG)

Voter login with MataMask:

![](screenshots/voter_login.PNG)

List of candidates for the election:

![](screenshots/candidate_list.PNG)

Successful voting scenario:

![](screenshots/successful_voting.PNG)
