import Web3 from 'web3';
import VotingContractABI from './VotingContractABI.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const contractAddress = 'CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(VotingContractABI, contractAddress);

export default contract;
