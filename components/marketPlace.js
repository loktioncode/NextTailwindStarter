
import React, { useState, Fragment } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import NftListStyle from '../styles/nftListStyle.module.css'
import LoadingPageContent from './LoadingPageContent'

const NftList = (props) => {

    return (

        <div className={NftListStyle.nftListStyle} onClick={() => alert("Chikugrafter")}>
            {props.nftListData.length === 0 ? (
                <LoadingPageContent />
            ) : (
                props.nftListData.map(nft => (
                    <div onClick={() => props.setSelectedNft(nft.token_id)}>
                        <iframe
                            src="https://cloudflare-ipfs.com/ipfs/bafybeigfwpsphinbvdbkdeamxz2pcex5pe5liuyjavjjwnsc5xrgususci?contract=0x877253AA0180b476932A022122a1e2268b3f7c8f&chainId=4&listingId=${nft.token_id}"
                            width="350px"
                            height="500px"
                            className='auctionWidget dark-custom'
                            frameborder="0"
                            darkMode="true"
                        />
                    </div>
                ))

            )}
        </div>
    );

}

export default MarketPlaceList;
