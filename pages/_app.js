import '../styles/global.css'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { DAppProvider } from "@usedapp/core";

import { NftProvider } from '../components/config/state';




export default function App({ Component, pageProps }) {


  const supportedChainIds = [1, 4, 137];

  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...", // Your magic api key
      chainId: 1, // The chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };
  const config = {};

  return (
    <div data-theme="dark">
      <NftProvider>
        <DAppProvider config={config}>
          <ThirdwebWeb3Provider
            supportedChainIds={supportedChainIds}
            connectors={connectors}>

            <Component {...pageProps} />

          </ThirdwebWeb3Provider>
        </DAppProvider>
      </NftProvider>
    </div>
  )
}
