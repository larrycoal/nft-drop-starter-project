import React, { useState, useEffect } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import CandyMachine from "./CandyMachine";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [userWalletAddress, setUserWallet] = useState(null);
  const checkIfSolana = async () => {
    try {
      const { solana } = window;

      if (solana && solana.isPhantom) {
        console.log("Phantom wallet found");

        const response = await solana.connect({ onlyIfTrusted: true });

        console.log("solana address", response.publicKey.toString());
        setUserWallet(response.publicKey.toString());
      } else {
        alert("Please download phantom solana wallet");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfSolana();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const connectWallet = async () => {
    const { solana } = window;

    const response = await solana.connect();
    setUserWallet(response.publicKey.toString());
  };

  const renderConnectWalletButton = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 The Goat</p>
          <p className="sub-text">NFT drop for the goat</p>
          {!userWalletAddress && renderConnectWalletButton()}
          {userWalletAddress && <CandyMachine walletAddress={window.solana} />}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
