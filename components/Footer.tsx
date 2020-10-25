import React from "react";
import Logo from "../components/Logo";
import useTranslation from '../hooks/useTranslation'
import Link from "next/link";
const Footer = () => {
  const { locale, t } = useTranslation()
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <footer className="footer" style={bgImage}>
      <div className="shadow"></div>
      <div className="global-container">
        <div className="footer_inner">
          <div className="inner_column logotype">
            <div className="column_inner">
              <div className="inner_logo">
                <Logo />
              </div>
              <div className="inner_desc">{t("footer.footer-logo-desc")}</div>
            </div>
          </div>
          <div className="inner_column btns">
            <div className="column_inner">
              <div className="inner_img">
                <div className="img img_apple">
                  <div className="img img_apple">
                    <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                      <img src={locale === 'ru' ? '/img/logo-app-store.png' : '/img/apptest.svg'} alt="Dominoes" />
                    </a>
                  </div>
                  <div className="img img_google">
                    <a href="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
                      <img src={locale === 'ru' ? '/img/logo-gplay.png' : '/img/google-play-badge.png'} alt="Dominoes" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_column navi">
            <div className="column_inner">
              <ul>
                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/istoriya-domino" as={`/${locale}/istoriya-domino`}>
                    <a target="_blank">{t("header.header-about")}</a>
                  </Link> : <Link
                    href="/[lang]/history-of-dominoes" as={`/${locale}/history-of-dominoes`}>
                    <a target="_blank">{t("header.header-about")}</a>
                  </Link>}
                </li>
                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/domino-online" as={`/${locale}/domino-online`}>
                    <a target="_blank">{t("header.header-types-domino-online")}</a>
                  </Link> : <Link
                    href="/[lang]/dominoes-online" as={`/${locale}/dominoes-online`}>
                    <a target="_blank">{t("header.header-types-domino-online")}</a>
                  </Link>}
                </li>
                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/domino-klassicheskoe" as={`/${locale}/domino-klassicheskoe`}>
                    <a target="_blank">{t("header.header-types-domino-klassicheskoe")}</a>
                  </Link> : <Link
                    href="/[lang]/dominoes-rules" as={`/${locale}/dominoes-rules`}>
                    <a target="_blank">{t("header.header-types-domino-klassicheskoe")}</a>
                  </Link>}
                </li>
                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/domino-5" as={`/${locale}/domino-5`}>
                    <a target="_blank">{t("header.header-types-domino-5")}</a>
                  </Link> : <Link
                    href="/[lang]/all-fives-dominoes" as={`/${locale}/all-fives-dominoes`}>
                    <a target="_blank">{t("header.header-types-domino-5")}</a>
                  </Link>}
                </li>
                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/domino-bloc" as={`/${locale}/domino-bloc`}>
                    <a target="_blank">{t("header.header-types-domino-bloc")}</a>
                  </Link> : <Link
                    href="/[lang]/blocks-dominoes" as={`/${locale}/blocks-dominoes`}>
                    <a target="_blank">{t("header.header-types-domino-bloc")}</a>
                  </Link>}
                </li>

                <li>
                  {locale === "ru" ? <Link
                    href="/[lang]/strategiya-v-domino" as={`/${locale}/strategiya-v-domino`}>
                    <a target="_blank">{t("header.header-strategy")}</a>
                  </Link> : <Link
                    href="/[lang]/how-to-play-dominoes" as={`/${locale}/how-to-play-dominoes`}>
                    <a target="_blank">{t("header.header-strategy")}</a>
                  </Link>}
                </li>
              </ul>
            </div>
            <div className="column_inner">
              <ul>
                <li>
                  <a href="http://loppipoppi.com/privacy-policy" target="_blank">Privacy Policy</a>
                </li>
                <li>
                  <a href="http://loppipoppi.com/terms-of-use" target="_blank">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer