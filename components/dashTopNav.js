import Image from 'next/image'

import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"



const DashboardNav = (props) => {
    const {disconnectWallet} = useWeb3();
    const { switchNetwork } = useSwitchNetwork();

    return (
        <>
            <div class="navbar  shadow-lg bg-neutral text-neutral-content ">
                <div class="flex-1 px-2 mx-2">
                    <span class="text-lg font-bold">
                        Cryptoowl
                    </span>
                </div>
                <div class="flex-none hidden px-2 mx-2 lg:flex">
                    <div class="flex items-stretch">
                        <a class="btn btn-ghost btn-sm rounded-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            {props.address}

                        </a>


                        <a class="btn btn-ghost btn-sm rounded-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            ChainId: {props.chainId}

                        </a>
                    </div>
                </div>

                <div class="dropdown flex-none dropdown-left">
                    <button class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a onClick={() => switchNetwork(4)}>Switch to Rinkeby</a>
                        </li>

                        <li>
                            <a onClick={() => switchNetwork(1)}>Switch Main Net</a>
                        </li>
                        <li>
                            <a onClick={disconnectWallet} className='group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Disconnect</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>)

}

export default DashboardNav

