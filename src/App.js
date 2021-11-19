import React, { useEffect, useState } from 'react';
import { getWeb3, getMultiSigWallet } from './utils.js';
import { createTheme, ThemeProvider, Box } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import TransferList from './components/TransferList.js';
import{ Typography } from "@material-ui/core";


/* Instatiate the custm theme tweaks*/
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: purple
  },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
  }
});


function App() {

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
  },[transfers]);


  // 
  const createTransfer = async (transfer) => {
    await multiSigWallet.methods.createTransfer(transfer.amount, transfer.to).send({from: accounts[0]});
    setTransfers(transfers);
  }
  
  const approveTransfer = async (transferId) => {
    multiSigWallet.methods.approveTransfer(transferId).send({from: accounts[0]});  
    const transfers = await multiSigWallet.methods.getTransfers().call();
    setTransfers(transfers);
  }

  // Loading app condition
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
    <ThemeProvider theme={theme}>
      <Layout quorum={quorum} 
              createTransfer={createTransfer} 
              approvers={approvers} 
              getAccounts={accounts} 
              web3={getWeb3}
              >
    
          <TransferList transfers={transfers} approveTransfer={approveTransfer} getAccounts={accounts} 
/>
          {transfers.length === 0 &&
          <Box sx={{ textAlign: 'center' }}>
          <Typography var>
              No Transfers Yet.
          </Typography>
          </Box>
    }
      </ Layout>
    </ThemeProvider>

  );
}

export default App;

