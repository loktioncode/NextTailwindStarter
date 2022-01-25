
import React, { useState, Fragment } from 'react';
import CollectionCard from './CollectionCard';
import Link from 'next/link'
import NftListStyle from '../styles/nftListStyle.module.css'
import LoadingPageContent from './LoadingPageContent'

const NftList = (props) => {

    return (

        <div className={NftListStyle.nftListStyle} onClick={() => alert("nftLIST CLICK")}>
            {props.nftListData.length === 0 ? (
                <LoadingPageContent />
            ) : (
                props.nftListData.map(nft => (
                    <div onClick={() => props.setSelectedNft(nft.token_id)}>
                        <CollectionCard key={nft.id} name={nft.name} id={nft.token_id} image={(nft.image_url === null) ? '/images/1.jpg' : nft.image_url} traits={nft.traits} />
                    </div>
                ))

            )}
        </div>
    );

}

export default NftList;
