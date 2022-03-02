import React, { useState, useEffect } from "react";
import "./App.css";
import heroImage from "./assets/NFTART.png";
import CandyMachine from "./CandyMachine";
import About from "./Pages/About";
import Header from "./Pages/Header";
import HowItWorks from "./Pages/How";
import MintedNfts from "./Pages/MintedNfts";
// Constants
// const TWITTER_HANDLE = "_buildspace";
// const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [userWalletAddress, setUserWallet] = useState(null);
  const [amountOfMinted, setAmountofMinted] = useState();
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
    <button className="mint-button" onClick={connectWallet}>
      Connect to Wallet
    </button>
  );

  const handleMinted = (candyInfo) => {
    setAmountofMinted(() => candyInfo?.state?.itemsRedeemed);
  };

  return (
    <>
      <Header wallet={userWalletAddress} />
      <div className="App">
        <div className="container">
          <div className="left_hero">
            <h2>MINT OG NFT</h2>
            <p className="sub-text">
              This is a dapp deployed to the solana devnet to mint NFT, I
              created a graphic you can mint as nft on the devnet Get your
              original goat NFTs created by larrycoal.First edition of the OG
              available to be minted
            </p>
            {userWalletAddress && (
              <CandyMachine
                walletAddress={window.solana}
                updateMintedItems={handleMinted}
              />
            )}
            {!userWalletAddress && renderConnectWalletButton()}
          </div>
          <div className="right_hero">
            <img src={heroImage} alt="header logo" height="350px" />
          </div>
        </div>
      </div>
      <MintedNfts mintedCount={amountOfMinted} />
      <HowItWorks address={userWalletAddress} />
      <About/>
      <div className="footer">
        Made with love &copy;2022 larrycoal
      </div>
    </>
  );
};

export default App;
