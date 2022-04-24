import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import BoatLoader from '../boat-loader'

const LazyVoxelDog = dynamic(() => import('../boat'), {
  ssr: false,
  loading: () => <BoatLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Philosophy" />
        <meta
          name="google-site-verification"
          content="pTcWxvKyDZBf8Z-0d5MBb89eFm58lx-nv9pvYxZW2XE"
        />
        <meta name="author" content="Karwan M.A." />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Ship of Theseus" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Ship of Theseus</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
