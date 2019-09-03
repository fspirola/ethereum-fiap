function deposit(address, value) {

    var from = eth.accounts[0]

    var acctBal = web3.fromWei(eth.getBalance(from).toString(), "ether");

    console.log("Saldo atual: " + acctBal);

    console.log("Transferindo");

    eth.sendTransaction({from:from,to:address,value:web3.toWei(value)});

    console.log(" Enviado: " + value + " para " + address);

    console.log("Novo Saldo: " + (web3.fromWei(eth.getBalance(from).toString(), "ether")));
    }
    