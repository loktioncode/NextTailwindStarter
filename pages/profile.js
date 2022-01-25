import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEthers } from "@usedapp/core";
import { MintNftButton } from "../components/MintNftButton";
// import { PunkList } from "../components/PunkList";
// import { Wallet } from "../components/Wallet";
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks";
import { useRouter } from 'next/router'


const MintPunks = () => {

  const { address } = useWeb3();

  return (
    < >
      <div>
        <h1>thirdweb SDK Example</h1>


        {address && (
          <>
            <Wallet />

            <div >
              <p>Get your own Nft</p>
              <MintNftButton />
            </div>


          </>
        )
        }
      </div>

   
    </>
  );
};

export default MintPunks;