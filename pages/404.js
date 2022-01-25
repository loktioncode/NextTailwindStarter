import Link from 'next/link'
import Image from 'next/image'


export default function Custom404() {
  return (
    <div class="bg-blue-600 relative overflow-hidden h-screen">


      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class=" opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-coolGray-400">
            <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
            <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
            <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
            <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
          </svg>
        </div>
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Page not Found
          </h1>
          <p class="font-extrabold text-8xl my-22 text-white animate-bounce">
            404
          </p>
        </div>
        <Link href="/">
          <a href="#" className="mb-12 font-medium text-white hover:text-black">
            ← Back to home
          </a>
        </Link>
      </div>
      <div>

      </div>
    </div>
  )
}