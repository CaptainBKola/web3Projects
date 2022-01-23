// deploy code will go here

const HDWalletProvider = require("@truffle/hdwallet-provider");
const  Web3 =  require("web3");
const {interface,bytecode} =require('./compile')
provider = new  HDWalletProvider('walk alone culture gaze gospel opinion casual crucial history beach sport hip',
'https://rinkeby.infura.io/v3/1f965d5f73764029b52872c3d1538d86'
);

const web3 = new Web3(provider)

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy contract from",  accounts[0])
   const result =  await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments : ["first contract deployed"]})
    .send({gas: "1000000", from : accounts[0]});
    console.log("Contract deployed to ",  result.options.address);
    provider.engine.stop()
} 
deploy()
