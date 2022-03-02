import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.blockchainapi.com/v1/solana/wallet/airdrop",
  headers: {
    APIKeyID: process.env.APIKeyID || "giuEalbEe8qpjFP",
    APISecretKey: process.env.APISecretKey || "pHlaYbHVotDZaAw",
  },
});


