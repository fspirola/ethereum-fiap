function tx() {
    tx = {
        nonce: eth.getTransactionCount(eth.accounts[1]),
        from: eth.accounts[1],
        to: "0xcff3c005f0541d6903f35429946d84ed825985df",
        gas: "21000",
        gasPrice: web3.toWei(2,'gwei'),
        value: web3.toWei(0.001)
        }

        signedTx = personal.signTransaction(tx, 'Fs315928');

        eth.sendRawTransaction(signedTx.raw);
        console.log(eth.sendRawTransaction(signedTx.raw));

}

