
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import Link from 'next/link'


export default function Hero() {
    const [show, setShow] = useState(false);
    const { address } = useWeb3();


    return (
        <>
            <div class="hero min-h-screen">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="text-center hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">
                            Welcome to my Web 3.0 powered page.
                        </h1>
                        <p class="mb-5">
                            This is a DEMO site created using Next.JS, TailWind and Thirdweb SDK
                            to access ETH Blockchain
                        </p>

                        {/* {(address != null || 'undefined') ? <></> : <Link href="/dashboard">
                            <a class="btn bg-blue-600 hover:bg-blue-700 focus:ring-blue-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg" src="#learnmore">View MY NFT Collection</a>
                        </Link>} */}
                        <Link href="/dashboard">
                            <a className="btn bg-blue-600 shadow-md  rounded-lg" src="#learnmore">View MY NFT Collection</a>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
