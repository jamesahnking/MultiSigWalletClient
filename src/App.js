import React, { useEffect, useState } from 'react';
import { getWeb3, getMultiSigWallet } from './utils.js';
import Header from './Header.js';
import NewTransfers from './NewTransfer.js';
import TransferList from './TransferList.js';

function App() {
  // define the state
  // store web3 instance/ setWeb3 provider
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [multiSigWallet, setMultiSigWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] =  useState(undefined);
  const [transfers, setTransfers] =  useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 =  await getWeb3(); 
      const accounts = await web3.eth.getAccounts();
      const multiSigWallet = await getMultiSigWallet(web3);
      const approvers = await multiSigWallet.methods.getApprovers().call();
      const quorum = await multiSigWallet.methods.quorum().call();     
      const transfers = await multiSigWallet.methods.getTransfers().call(); 

      setWeb3(web3);
      setAccounts(accounts);
      setMultiSigWallet(multiSigWallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  },[]);


// create transfer - modify data
  // const createTransfer = transfer => {
  //   multiSigWallet.methods
  //     .createTransfer(transfer.amount, transfer.to)
  //     .send({from: accounts[0]});
  // }
  const createTransfer = async (transfer) => {
    await multiSigWallet.methods.createTransfer(transfer.amount, transfer.to).send({from: accounts[0]});
    setTransfers(transfers);
  }

  
  // approve transfer - modify data
  const approveTransfer = async (transferId) => {
    multiSigWallet.methods.approveTransfer(transferId).send({from: accounts[0]});  
    const transfers = await multiSigWallet.methods.getTransfers().call();
    setTransfers(transfers);
  }


  if (
    typeof web3 === 'undefined'
    || typeof accounts === 'undefined'
    || typeof multiSigWallet === 'undefined'
    || approvers.length === 0
    || typeof quorum === 'undefined'
  
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Multisig Wallet</h1>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfers createTransfer = {createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer}/>
    </div>
  );
}

export default App;
