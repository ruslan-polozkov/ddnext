import Header from "../components/Header";
import Footer from "../components/Footer";
import React from 'react'
import Head from 'next/head'
// import useTranslation from '../hooks/useTranslation'

import './../styles/sass/layout.scss'

interface Props {
  titleKey: string
}

const Layout: React.FC<Props> = ({  children }) => {
  // const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Dominoes game</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="title" content="Dominoes game" />
        <meta name="apple-itunes-app" content='app-id=1434957889, affiliate-data=myAffiliateData, app-argument=dominoes.com'/>
        <link href="/fonts/fonts.css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}

export default Layout
