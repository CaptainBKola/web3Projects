pragma solidity ^0.4.17;

contract Account{
string public balance;

function Account( string initialBalance) public {
    
    balance = initialBalance;
}

function setAmount (string amount) public {
 balance = amount;
}

function getAmount() public view returns(string){
    return balance;

}

}
