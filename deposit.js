function deposit(address, value) {

    eth.sendTransaction({from:eth.accounts[0],to:address,value:web3.toWei(value)});
    
    console.log(" Enviando: " + value + " para " + address);

    console.log(eth.getBalance(address));
    }
    