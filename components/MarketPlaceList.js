
import React, { useState, Fragment } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import MarketPlaceListStyle from '../styles/marketplacelist.module.css'
import LoadingPageContent from './LoadingPageContent'

const MarketPlaceList = (props) => {

    const sellNftWidgetUrl = "https://cloudflare-ipfs.com/ipfs/bafybeigfwpsphinbvdbkdeamxz2pcex5pe5liuyjavjjwnsc5xrgususci?contract=0x877253AA0180b476932A022122a1e2268b3f7c8f&chainId=4&listingId=";

    return (

        <div className={MarketPlaceListStyle.MarketPlaceList} onClick={() => alert("nftLIST CLICK")}>
            {props.nftListData.length === 0 ? (
                <LoadingPageContent />
            ) : (
                props.nftListData.map(nft => (
                    <div className='p-3'>
                        <iframe
                        
                            src={sellNftWidgetUrl+nft.token_id}
                            width="400px"
                            height="500px"
                            // style="max-width:100%;"
                            frameborder="0"
                            className=''
                        />
                        {/* <CollectionCard key={nft.id} name={nft.name} id={nft.token_id} image={(nft.image_url === null) ? '/images/1.jpg' : nft.image_url} traits={nft.traits} /> */}
                    </div>
                ))

            )}
        </div>
    );

}

export default MarketPlaceList;
