import React, { useState } from 'react'
import Link from 'next/link'
import LanguageMenu from "../components/LanguageMenu";
import useTranslation from '../hooks/useTranslation'

const Navigation = () => {
  const { locale, t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            {locale === "ru" ? <Link
              href="/[lang]/istoriya-domino" as={`/${locale}/istoriya-domino`}>
              <a target="_blank">{t("header.header-about")}</a>
            </Link> : <Link
              href="/[lang]/history-of-dominoes" as={`/${locale}/history-of-dominoes`}>
              <a target="_blank">{t("header.header-about")}</a>
            </Link>}
          </li>
          <li
            onMouseOver={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span className="item_title">
              {t("header.header-types")}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
              </svg>
            </span>
            <div className="item_menu">
              <div className="menu_item">
                {locale === "ru" ? <Link
                  href="/[lang]/domino-online" as={`/${locale}/domino-online`}>
                  <a target="_blank">{t("header.header-types-domino-online")}</a>
                </Link> : <Link
                  href="/[lang]/dominoes-online" as={`/${locale}/dominoes-online`}>
                  <a target="_blank">{t("header.header-types-domino-online")}</a>
                </Link>}
              </div>
              <div className="menu_item">
                {locale === "ru" ? <Link
                  href="/[lang]/domino-klassicheskoe" as={`/${locale}/domino-klassicheskoe`}>
                  <a target="_blank">{t("header.header-types-domino-klassicheskoe")}</a>
                </Link> : <Link
                  href="/[lang]/dominoes-rules" as={`/${locale}/dominoes-rules`}>
                  <a target="_blank">{t("header.header-types-domino-klassicheskoe")}</a>
                </Link>}
              </div>
              <div className="menu_item">
                {locale === "ru" ? <Link
                  href="/[lang]/domino-5" as={`/${locale}/domino-5`}>
                  <a target="_blank">{t("header.header-types-domino-5")}</a>
                </Link> : <Link
                  href="/[lang]/all-fives-dominoes" as={`/${locale}/all-fives-dominoes`}>
                  <a target="_blank">{t("header.header-types-domino-5")}</a>
                </Link>}
              </div>
              <div className="menu_item">
                {locale === "ru" ? <Link
                  href="/[lang]/domino-bloc" as={`/${locale}/domino-bloc`}>
                  <a target="_blank">{t("header.header-types-domino-bloc")}</a>
                </Link> : <Link
                  href="/[lang]/blocks-dominoes" as={`/${locale}/blocks-dominoes`}>
                  <a target="_blank">{t("header.header-types-domino-bloc")}</a>
                </Link>}
              </div>
            </div>
          </li>
          <li className="list_item">
            {locale === "ru" ? <Link
              href="/[lang]/strategiya-v-domino" as={`/${locale}/strategiya-v-domino`}>
              <a target="_blank">{t("header.header-strategy")}</a>
            </Link> : <Link
              href="/[lang]/how-to-play-dominoes" as={`/${locale}/how-to-play-dominoes`}>
              <a target="_blank">{t("header.header-strategy")}</a>
            </Link>}
          </li>
        </ul>
      </nav>
      <LanguageMenu />
    </div>
  )
}

export default Navigation
