import collectionCard from '../styles/collectionCard.module.css'
import Image from 'next/image'



export default function CollectionCard({ id, name, traits, image }) {
    return (
        // apply style from styles
        <div className={collectionCard.CollectionCard}>

            <img
                src={image} // Route of the image file
                className={collectionCard.nftImage}
                alt="Nft image">
            </img>
            <div className={collectionCard.details}>
                <div className={collectionCard.name} >
                    {name} <div className={collectionCard.id} >.#{id}</div>
                </div>
                <div className={collectionCard.priceContainer} >
                    <Image
                        className={collectionCard.wethImage}
                        src='/images/assets/weth.png' // Route of the image file
                        height={30} // Desired size with correct aspect ratio
                        width={20} // Desired size with correct aspect ratio
                        alt="weth logo"
                    />
                    <div className={collectionCard.price} >{traits[0]?.value}</div>
                </div>

            </div>

        </div>

    )
}