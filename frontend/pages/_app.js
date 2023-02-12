import '../styles/globals.css'
import  dynamic from 'next/dynamic';
import '@solana/wallet-adaptter-react-ui/styles.css';
import { useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletConnectProvider } from "@solana/wallet-adapter-walletconnect";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

function MyApp({ Component, pageProps }) {
  const WalletConnectionProvider = dynamic(
    () => import('../context/walletConnectProvider'),
    { ssr: false },
  )
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  )
}

export default MyApp
