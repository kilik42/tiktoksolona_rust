import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletConnectProvider } from "@solana/wallet-adapter-walletconnect";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React from "react";
import {useMemo} from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

// const network = clusterApiUrl("devnet");
// const endpoint = network;


const WalletConnectProvider = ({children}) => {
    const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
    const wallets = useMemo(() => [ new PhantomWalletAdapter(), []]);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
export default WalletConnectProvider;

// const MainView = () => {
//     const wallet = useWallet();
//     const connection = useConnection();
//     const { setVisible } = useWalletModal();
    
//     return (
//         <div className="mainView">
//         <div className="walletInfo">
//             <div className="walletName">{wallet.name}</div>
//             <div className="walletAddress">{wallet.publicKey?.toBase58()}</div>
//         </div>
//         <div className="walletButtons">
//             <WalletMultiButton />
//             <WalletDisconnectButton />
//         </div>
//         </div>
//     );
//     }
