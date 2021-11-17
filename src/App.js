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
  // define the state
  // store web3 instance/ setWeb3 provider
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [multiSigWallet, setMultiSigWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] =  useState(undefined);
  const [transfers, setTransfers] =  useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
// account change constants
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  useEffect(() => {
    const init = async () => {
      const web3 =  await getWeb3(); 
      const accounts = await web3.eth.getAccounts();
      const multiSigWallet = await getMultiSigWallet(web3);
      const approvers = await multiSigWallet.methods.getApprovers().call();
      const quorum = await multiSigWallet.methods.quorum().call();     
      const transfers = await multiSigWallet.methods.getTransfers().call(); 
      // const defaultAccount = await web3.eth.getAccounts([0]);

      setWeb3(web3);
      setAccounts(accounts);
      setMultiSigWallet(multiSigWallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  },[transfers]);


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			
      console.log('MetaMask Here!');
				accountChangedHandler(accounts[0]);
				getAccountBalance(accounts[0]);
				console.log(accounts[0])
			
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
  }}


  // get balace
    const accountChangedHandler = (newAccount) => {
        // ethers.utils.getAddress returns a checksum address (mixed case)
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount);
      }
    


  	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(balance);
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};


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
    <ThemeProvider theme={theme}>
      <Layout quorum={quorum} createTransfer={createTransfer} approvers={approvers} getAccount={accounts}>
          {/* <Quorum quorum={quorum} />  */}
          {/* <Approvers approvers={approvers}  />
          <NewTransfers createTransfer={createTransfer}/> */}
          <TransferList transfers={transfers} approveTransfer={approveTransfer}/>
          {transfers.length === 0 &&
          <Box sx={{ textAlign: 'center' }}>
          <Typography>
              User Balance {userBalance}
          </Typography>
          </Box>
}
      </ Layout>
    </ThemeProvider>

  );
}

export default App;

