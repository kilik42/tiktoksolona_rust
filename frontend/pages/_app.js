import '../styles/globals.css'
import  dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletConnectProvider } from "@solana/wallet-adapter-walletconnect";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
