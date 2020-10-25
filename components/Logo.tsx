import React from "react"
import Link from "next/link";
import useTranslation from '../hooks/useTranslation'

const Logo = () => {
  const { locale } = useTranslation()

  return (
    <div className="logo" lang={locale}>
      <Link href="/">
        {/*<Img fixed={data.image.childImageSharp.fixed} alt="Domino" />*/}
        <span>Dominoes</span>
      </Link>
    </div>
  )
}

export default Logo
