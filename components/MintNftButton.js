import { useEthers } from "@usedapp/core";
import React, { useState } from "react";


export const MintNftButton = () => {
    const [loading, setLoading] = useState(false);
    const { account } = useEthers();
  

    async function mintSwordFromAPI() {
        alert("minting")
        // setLoading(true);

        await fetch("/api/mint_sword", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                account,
                type: "gold",
            }),
        });

        setLoading(false);
       
    }

    return (
        <>
            <button
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                isDisabled={account}
                onClick={() => mintSwordFromAPI()}
                isLoading={loading}
            >
                Mint NFT
            </button>
        </>
    );
};