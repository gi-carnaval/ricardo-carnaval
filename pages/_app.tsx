import { useEffect, useRef } from 'react'
import '../src/styles/globals.scss'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { repositoryName } from 'src/services/prismicio'
import { Montserrat } from '@next/font/google'
import { Header } from '@/components/organism/Header'
import Footer from '@/components/organism/Footer'
import { useRouter } from 'next/router'
import { NavMenuHeaderRef } from '@/components/organism/NavMenuHeader'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const navMenuRef = useRef<NavMenuHeaderRef>(null)

  useEffect(() => {
    const handleRouteChange = () => {
      navMenuRef.current?.closeMenu()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <main className={montserrat.className}>
          <Header ref={navMenuRef} />
          <div
            onClick={() => navMenuRef.current?.closeMenu()}
            className="top-24 relative"
          >
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
