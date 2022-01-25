import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from '../components/hero'
import ShowcaseCollection from '../components/showcase'

// import NProgress from 'nprogress'

// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`)
//   NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())



export default function Home() {
  return (
    <Layout home>
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <ShowcaseCollection />
    </Layout>
  )
}
