import React, { useContext, useState, useEffect } from 'react';
import LoadingPageContent from '../components/LoadingPageContent'
import Link from 'next/link'
import NftList from '../components/NftList'
import Main from '../components/Main'
import Layout from '../components/layout'
import DashboardNav from '../components/dashTopNav'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { NftContext } from '../components/config/state';
import axios from 'axios'


export default function Dashboard() {

  const { address, chainId } = useWeb3();
  const [email, setEmail] = useState("");
  // const [nftData, setNftData] = useState([]);
  const [nftData, setNftData] = useContext(NftContext);
  const [selectedNft, setSelectedNft] = useState(0)



  useEffect(() => {
    // const getMyNfts = async () => {
    //   const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS}`)
    //   // alert(openseaData.data.assets)
    //   // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
    //   setNftData(openseaData.data.assets)
    // }

    // return getMyNfts();
    // alert("---->",nftData.name);
    const getMyNfts = async () => {
      const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0570408Ba92aC0F8C3a19C0890f9a3829CFf4804`)
      // alert(openseaData.data.assets)
      // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
      setNftData(openseaData.data.assets)
    }
    return getMyNfts;
  }, [])



  // If a wallet is connected, show disconnect and switch network options
  if (address) {
    return (
      <Layout dashboard>
        <DashboardNav address={address} chainId={chainId} />
        <div >
          {
            nftData.length > 0 && (
              <div data-theme="dark">
                <Main nftListData={nftData} selectedNft={selectedNft} onScroll={() => alert("HALALALA")} />
                <NftList nftListData={nftData} setSelectedNft={setSelectedNft} />
              </div>
            )
          }

        </div>
      </Layout>
    )
  }
  return (
    <>
      <LoadingPageContent page={'dashboard'} />
    </>

  )
}