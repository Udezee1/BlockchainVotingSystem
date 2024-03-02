import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import VotingContract from './contracts/VotingContract';
import PollList from './components/PollList';

function App() {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        async function init() {
            // Initialize Web3
            // Initialize contract instance
            // Get user accounts
        }
        init();
    }, []);

    return (
        <div className="App">
            <h1>Decentralized Voting System</h1>
            <PollList contract={contract} accounts={accounts} />
        </div>
    );
}

export default App;
