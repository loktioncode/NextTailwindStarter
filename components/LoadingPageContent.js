import Link from 'next/link'
import Loader from './Loader'

function LoadingPageContent(props) {
    return <div>
        <section className="p-4 lg:p-8 loader dark-custom " >
       
            <div className=" mx-auto space-y-12">
            { (props.page === 'dashboard') && <p className="mt-16 text-center text-lg text-white"> PLEASE CONNECT YOUR WALLET TO ACCESS YOUR DASHBOARD</p>}
                <Loader />
                <div>
                    <p className="mt-16 text-center text-sm text-gray-600">
                        {
                            (props.page === 'dashboard') && <Link href="/login">
                                <a href="#" className="font-medium text-white hover:text-blue-500">
                                    ← Go to Login Page
                                </a>
                            </Link>
                        }
                    </p>
                </div>
            </div>

        </section>


    </div>;
}



export default LoadingPageContent;
