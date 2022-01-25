
import React, { useState, Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import MainStyle from '../styles/mainStyle.module.css'
import Image from 'next/image'
import Link from 'next/link'



const Main = (props) => {

    const [activeNft, setActiveNft] = useState(props.nftListData[0])
    const [open, setOpen] = useState(true)
    const [mint, setMintButton] = useState(false)

    const cancelButtonRef = useRef(null)

    useEffect(() => {
        setActiveNft(props.nftListData[props.selectedNft])
    }, [props.nftListData, props.selectedNft])



    const alert = <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        COMING SOON
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">

                                            backend services still in development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                            <Link href="/dashboard">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Proceed
                                </button>
                            </Link>

                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>;

    if (mint) {
        alert
    }

    return (

        <div className={MainStyle.main} >
            <div className={MainStyle.mainContent}>
                <div className={MainStyle.nftHighlight}>
                    <div className={MainStyle.nftContainer}>
                        <Image
                            className={MainStyle.selectedNft}
                            src={activeNft.image_url}
                            height={250}
                            width={250}
                            alt="Your Name"
                        />
                    </div>

                </div>
                <div className={MainStyle.nftDetails} style={{ color: '#fff' }}>

                    <div className={MainStyle.title}>{activeNft.name} <span className={MainStyle.itemNumber}>~#{activeNft.token_id} </span>

                    </div>
                    <div className="flex">
                        <div className='flex-initial w-14'>
                            <Image
                                src='/images/assets/weth.png' // Route of the image file
                                height={50} // Desired size with correct aspect ratio
                                width={30} // Desired size with correct aspect ratio
                                alt="weth logo"
                            />
                        </div>
                        <div className='flex-initial w-14 ' ><p className='text-5xl font-semibold' >{activeNft.traits[0]?.value}</p></div>
                    </div>


                    <div className={MainStyle.owner}>
                        <div className={MainStyle.ownerImageContainer}>
                            <Image
                                className={MainStyle.selectedNft}
                                src={activeNft.owner.profile_img_url}
                                alt="owner avatar"
                                height={70}
                                width={70}
                            />
                        </div>
                        <div className={MainStyle.ownerDetails}>
                            <div className={MainStyle.ownerNameAndHandle}>
                                <div className='text-blue-400'>{activeNft.owner.address}</div>
                                <div className={MainStyle.ownerHandle, 'text-blue-400'}>@loktioncode</div>
                            </div>


                        </div>
                        <div className={MainStyle.ownerDetails}>
                            <div className={MainStyle.ownerNameAndHandle}>
                                <a  class="btn py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                        </path>
                                    </svg>
                                    Mint NFT
                                </a>
                            </div>
                            <div className={MainStyle.ownerLink, ' hover:bg-grey-600 pl-12'}>
                                <Image
                                    src='/images/more.svg' // Route of the image file
                                    height={30} // Desired size with correct aspect ratio
                                    width={30} // Desired size with correct aspect ratio
                                    alt="Your Name"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );

}

export default Main;
