import React, { useContext } from 'react';
import { Fragment, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import axios from 'axios'


export default function MetaMaskSignIn() {

    const { address, chainId, connectWallet, disconnectWallet } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [email, setEmail] = useState("");

    const [selectedNft, setSelectedNft] = useState(0)
    const router = useRouter()
 


   

    useEffect(() => {
        router.prefetch('/dashboard')
    }, [])

    // If a wallet is connected, show disconnect and switch network options
    if (address) {
        router.push('/dashboard')
    }


    return (
        <>

            <div class="w-full h-screen font-sans bg-cover bg-landscape login-bg">

                <div class="container flex items-center justify-center flex-1 h-full mx-auto">
                    <Link href="/">
                        <img
                            className="mb-12 h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                            alt="Workflow"
                        />
                    </Link>
                    <div class="w-full max-w-lg">
                        <div class="leading-loose">

                            <div class="max-w-sm p-10 m-auto bg-white bg-opacity-5 rounded shadow-xl shadow-blue-500/50">
                                <div>
                                    <button
                                        onClick={() => connectWallet("injected")}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                                        </span>
                                        MetaMask Sign in
                                    </button>
                                    <br></br>
                                    <button
                                        onClick={() => connectWallet("walletconnect")}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                                        </span>
                                        Wallet Connect
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-16 text-center text-sm text-gray-600">
                                <Link href="/">
                                    <a href="#" className="font-medium text-md text-white hover:text-blue-500">
                                        ← Back to home
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}