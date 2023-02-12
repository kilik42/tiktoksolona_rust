import '../styles/globals.css'
import  dynamic from 'next/dynamic';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect, useState } from 'react';
// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletConnectionProvider } from "@solana/wallet-adapter-walletconnect";
// import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import WalletConnectProvider from '../context/WalletConnectProvider';
function MyApp({ Component, pageProps }) {
  const WalletConnectionProvider = dynamic(
    () => import('../context/WalletConnectProvider'),
    { ssr: false },
  )
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  )
}

export default MyApp
