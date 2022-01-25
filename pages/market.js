import React, { useContext, useState, useEffect } from 'react';
import LoadingPageContent from '../components/LoadingPageContent'
import Link from 'next/link'
import MarketPlaceList from '../components/MarketPlaceList'
import Main from '../components/Main'
import Layout from '../components/layout'

import { NftContext } from '../components/config/state';
import axios from 'axios'


export default function MaketPlace() {

    const [nftData, setNftData] = useContext(NftContext);
    const [selectedNft, setSelectedNft] = useState(0)



    useEffect(() => {
        // const getMyNfts = async () => {
        //     const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS}`)
        //     // alert(openseaData.data.assets)
        //     // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
        //     setNftData(openseaData.data.assets)
        // }

        const getMyNfts = async () => {
            const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0570408Ba92aC0F8C3a19C0890f9a3829CFf4804`)
            // alert(openseaData.data.assets)
            // window.sessionStorage.set('openseaData', JSON.stringify(openseaData));
            setNftData(openseaData.data.assets)
        }

        return getMyNfts();
    }, [])



    return (
        <Layout page="market">
            <div className='ml-60 mr-60 pt-10 z-0'>
                <label class="relative block">
                    <span class="sr-only">Search NFT's</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
            </div>

            <div className='pt-16' >
                {
                    nftData.length > 0 && (
                        <div >
                            <MarketPlaceList nftListData={nftData} setSelectedNft={setSelectedNft} />
                        </div>
                    )
                }

            </div>
        </Layout>
    )


}