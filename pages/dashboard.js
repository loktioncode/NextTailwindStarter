import { useState, useEffect } from 'react'
import LoadingPageContent from '../components/LoadingPageContent'
import Link from 'next/link'
import NftList from '../components/NftList'
import Main from '../components/Main'
import Layout from '../components/layout'
import DashboardNav from '../components/dashTopNav'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import axios from 'axios'


export default function Dashboard() {
  const { address, chainId } = useWeb3();

  const [email, setEmail] = useState("");
  const [nftData, setNftData] = useState([]);
  const [selectedNft, setSelectedNft] = useState(0)



  useEffect(() => {

    // Prefetch the dashboard page
    // router.prefetch('/dashboard')
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0570408Ba92aC0F8C3a19C0890f9a3829CFf4804')
      // alert(openseaData.data.assets)
      setNftData(openseaData.data.assets)
    }

    return getMyNfts()
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
                <Main nftListData={nftData} selectedNft={selectedNft} />
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
      <LoadingPageContent />
    </>

  )
}