import React from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return (
    <Head>
      <title>Dominoes game</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="title" content="Dominoes game" />
      <meta name="apple-itunes-app" content='app-id=1434957889, affiliate-data=myAffiliateData, app-argument=dominoes.com'/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
    </Head>
  )
}

export default Index
