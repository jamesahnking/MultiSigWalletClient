import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import MultiSigWallet from './contracts/MultiSigWallet.json';

// Connect to the ethereum network through web3
const getWeb3 = () => 
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      try {
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch(error) {
        reject(error);
      }
    }
    reject('Install Metamask');
  });

// Bring in ABI so we can interact and do stuff   
const getMultiSigWallet = async web3 => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = MultiSigWallet.networks[networkId];
  return new web3.eth.Contract(
    MultiSigWallet.abi,
    deployedNetwork && deployedNetwork.address,
  );
};

export { getWeb3, getMultiSigWallet }; 




