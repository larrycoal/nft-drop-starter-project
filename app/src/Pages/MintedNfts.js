import React, { useEffect, useState } from "react";
import nft0 from "../assets/assets/0.png";
import nft1 from "../assets/assets/1.png";
import nft2 from "../assets/assets/2.png";
import nft3 from "../assets/assets/3.png";
import nft4 from "../assets/assets/4.png";
import nft5 from "../assets/assets/5.png";
import nft6 from "../assets/assets/6.png";
import nft7 from "../assets/assets/7.png";
import nft8 from "../assets/assets/8.png";

const allNft = [
  {
    name: "ORIGINAL_GOAT 0",
    description:
      "This is Original goat 0 has distinct feature and part of larrycoal nft collections 1",
    nft: nft0,
  },
  {
    name: "ORIGINAL_GOAT 1",
    description:
      "This is Original goat 1 has distinct feature and part of larrycoal nft collections 1",
    nft: nft1,
  },
  {
    name: "ORIGINAL_GOAT 2",
    description:
      "This is Original goat 2 has distinct feature and part of larrycoal nft collections 1",
    nft: nft2,
  },
  {
    name: "ORIGINAL_GOAT 3",
    description:
      "This is Original goat 3 has distinct feature and part of larrycoal nft collections 1",
    nft: nft3,
  },

  {
    name: "ORIGINAL_GOAT 4",
    description:
      "This is Original goat 4 has distinct feature and part of larrycoal nft collections 1",
    nft: nft4,
  },
  {
    name: "ORIGINAL_GOAT 5",
    description:
      "This is Original goat 5 has distinct feature and part of larrycoal nft collections 1",
    nft: nft5,
  },
  {
    name: "ORIGINAL_GOAT 6",
    description:
      "This is Original goat 6 has distinct feature and part of larrycoal nft collections 1",
    nft: nft6,
  },
  {
    name: "ORIGINAL_GOAT 7",
    description:
      "This is Original goat 7 has distinct feature and part of larrycoal nft collections 1",
    nft: nft7,
  },
  {
    name: "ORIGINAL_GOAT 8",
    description:
      "This is Original goat 8 has distinct feature and part of larrycoal nft collections 1",
    nft: nft8,
  },
];

const MintedNfts = ({ mintedCount }) => {
  const [currentMintednft, setCurrentMintedNft] = useState([]);

  useEffect(() => {
    const temp = allNft.splice(0, mintedCount);
    setCurrentMintedNft(() => temp);
  }, [mintedCount]);

  const rendernftCards = () => {
    return currentMintednft.map((nft, idx) => (
      <div className="nft-container" key={idx}>
        <img src={nft.nft} alt={nft.description} height="150px" />
        <h3>{nft.name}</h3>
        <p>{nft.description}</p>
      </div>
    ));
  };
  return (
    <div className="minted-wrapper">
      <h2>Minted NFTs</h2>
      {currentMintednft.length > 0 ? (
        <div className="nft-wrapper">{rendernftCards()}</div>
      ) : (
        <div className="no-minted">
          <p>Please Connect your wallet</p>
        </div>
      )}
    </div>
  );
};

export default MintedNfts;
