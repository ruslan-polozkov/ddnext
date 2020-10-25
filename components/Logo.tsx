import React from "react"
// import Link from "next/link";
import useTranslation from '../hooks/useTranslation'

const Logo = () => {
  const { locale } = useTranslation()

  return (
    <div className="logo" lang={locale}>
      <a href="/">
        <img src={"/img/logo.png"} alt="Dominoes" style={{marginRight: "1rem"}}/>
        <span>Dominoes</span>
      </a>
    </div>
  )
}

export default Logo
