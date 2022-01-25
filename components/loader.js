import Link from 'next/link'


function Loader(props) {
    return <div>

        <div className="dark-custom flex flex-row overflow-hidden shadow-sm lg:flex-column">
            <div className="mt-16 flex items-center justify-center flex-1 ">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>

            </div>

        </div>

    </div>;
}



export default Loader;
