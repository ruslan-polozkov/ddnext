import useTranslation from "../hooks/useTranslation";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

const LanguageMenu = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)
  const { locale: localeCurrent } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  const handleLocaleChange = React.useCallback(
    (e: any) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.closest(".menu_item").dataset.value}`))
    },
    [router]
  )


  return (
    // <div className ="language_menu">
    //   <select value={locale.lang} onChange={handleLocaleChange}>
    //     {locales.map(locale => (
    //       <option key={locale} value={locale}>
    //         {languageNames[locale]}
    //       </option>
    //     ))}
    //   </select>
    // </div>


    <div
      className={isOpen ? "language_menu open" : "language_menu"}
      data-name={locale}
      onClick={toggleOpen}
    >
      <div className="menu_active">
        <div
          className="active_item active"
        >
          <img src={localeCurrent === "en" ? "/img/us.png" : "/img/ru.png"} alt={localeCurrent} />
          <span>
            {languageNames[localeCurrent]}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="menu_list">
        <div
          className="menu_item"
          data-value={localeCurrent === "en" ? "ru" : "en"}
          onClick={e => handleLocaleChange(e)}
        >
          <img src={localeCurrent === "en" ? "/img/ru.png" : "/img/us.png"} alt={localeCurrent} />
          <span>{localeCurrent === "en" ? languageNames["ru"] : languageNames["en"]}</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu