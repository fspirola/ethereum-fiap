
        
    const args = process.argv.slice(2)
    const Web3 = require('web3');
    const web3 = new Web3(new
    Web3.providers.HttpProvider('http://localhost:8545'));
    if(!args[0]){
    console.log('Passe um endereço para consulta')
    return
    }
    web3.eth.getBalance(args[0])
    .then(balance => {
    console.log(`Saldo de ${args[0]}: ` + web3.utils.fromWei(balance))
    })
    .catch( err => console.error(err))


    var from = eth.accounts[0]

    var result = { 
        acctBal: web3.fromWei(eth.getBalance(from).toString(), "ether"),
        hash: eth.sendTransaction({from:from,to:address,value:web3.toWei(value)}),
        tx: eth.getTransaction(hash)
    }

    return result;
