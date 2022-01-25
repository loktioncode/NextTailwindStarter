import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'
import NavBar from "./NavBar";
import Footer from './Footer'
import navButtons from "./config/buttons";

const name = 'Elisha Bere'
export const siteTitle = 'Cryptoowl'

export default function Layout({ children, login }) {
  const { asPath, pathname } = useRouter();

  const button = <button class="btn btn-square btn-ghost pr-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>;

  return (
    <div >

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {
        (asPath === "/dashboard") ? <></> : <NavBar navButtons={navButtons} colorSwitch={button} />
      }

      <main className='dark-custom'>{children}</main>
      <Footer />
    </div>

  )
}
