import React, { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const HowItWorks = ({ address }) => {
  const [loading, setLoading] = useState(false);
  const getSomeSol = async () => {
    if (address) {
      setLoading(true);
      try {
        const resp = await axiosInstance.post("", {
          recipient_address: address,
        });
        setLoading(false);

        if (resp) {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  };
  return (
    <div className="how-wrapper" id="how">
      <h2>How It Works</h2>
      <p>
        This project runs on solana devnet and as such you will need a solana
        wallet to mint an nft. No problem if you dont have a solana wallet, you
        can create one quickly with phantom wallet
      </p>
      <div className="steps">
        <dl>
          <dt>This application is optimised for desktop</dt>
          <dd>
            Because you will need to connect to your solana wallet, using a
            laptop is the most convinient way to access this app, but if your
            device can connect to your solana wallet then this should run
            smoothly
          </dd>
        </dl>
        <dl>
          <dt>Download Phantom Wallet</dt>
          <dd>
            If you dont have a solana wallet you can download
            <a href="https://phantom.app/">Phantom wallet</a> and create a
            solana wallet in less than 5 minutes
          </dd>
        </dl>
        <dl>
          <dt>Connect your Wallet</dt>
          <dd>
            Scroll back up, you should see a button that ask you to connect
            wallet, after its connected go to 
             <span className="inst">
               settings <i class="fa-solid fa-gear"></i> --> Change Network
            </span>
            and change it to devnet
          </dd>
        </dl>
        <dl>
          <dt>Get some sol on devnet</dt>
          <dd>
            Click on button below to get some sol on your wallet, these are fake
            sol and only available on the devnet dont get too excited. After few
            seconds you should get some sol, enough for you to be able to mint
            OG.Add more funds to your account if you couldnt successfully mint OG 
          </dd>
        </dl>
      </div>
      {!loading && (
        <button onClick={getSomeSol} disabled={address ? false : true}>
          Get some sol
        </button>
      )}
      {loading && <i class="fa fa-spinner" aria-hidden="true"></i>}
    </div>
  );
};

export default HowItWorks;
