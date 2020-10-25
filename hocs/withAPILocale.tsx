import React from 'react'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import Error from 'next/error'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { isLocale, Locale } from '../translations/types'
import { LocaleProvider } from '../context/LocaleContext'

interface LangProps {
  locale?: Locale
  translations?: { [key: string]: string }
}

export default (namespace: string) => (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ locale, translations, ...pageProps }) => {
    console.log('namespace', namespace)
    console.log('locale', locale)
    console.log('translations', translations)
    console.log('...pageProps', {...pageProps})
    if (!locale) {
      return <Error statusCode={404} />
    }
    if (!translations) {
      return <Error statusCode={500} />
    }
    return (
      <LocaleProvider lang={locale} translations={translations} namespace={namespace}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {}
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx)
    }
    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps }
    }
    console.log('ctx.query.lang', ctx.query.lang)
    const url = process.env.NODE_ENV === 'production' ? 'https://gracious-jepsen-1b6f55.netlify.app/' : 'http://localhost:3000'
    const translations = await fetch(`${url}/api/${ctx.query.lang}?namespace=${namespace}`).then(data => data.json())
    return { ...pageProps, locale: ctx.query.lang, translations }
  }

  WithLocale.displayName = `withAPILang(${getDisplayName(WrappedPage)})`

  return WithLocale
}
