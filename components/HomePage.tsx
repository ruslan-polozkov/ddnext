// import SliderMy from "../components/SliderMy";
import Link from "next/link";
import React, { useEffect, useState } from "react"
import useTranslation from '../hooks/useTranslation'

// import Slider from "react-slick"

const HomePage = () => {
  const { locale, t } = useTranslation()
  const [accordionState, accordionSetState] = useState("01")
  console.log(locale)

  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }

  // const settingsSlider = {
  //   speed: 500,
  //   slidesToScroll: 1,
  //   slidesToShow: 3,
  //   arrows: true,
  //   dots: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: true,
  //   focusOnSelect: true,
  //   cssEase: "linear",
  //   touchMove: true,
  //   responsive: [
  //     {
  //       breakpoint: 9999,
  //       settings: "unslick"
  //     },
  //     {
  //       breakpoint: 720,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ]
  // }

  function accordionStateChange(event:any) {
    accordionSetState(event.target.closest(".list_item").dataset.advantagesItem)

    const slidersArr = document.querySelectorAll(".inner_slides .list_item")
    const menuArr = document.querySelectorAll(".context_list .list_item")

    menuArr.forEach(item => item.classList.remove("active"))
    slidersArr.forEach(item => {
      if (item.getAttribute("data-slider-item") === accordionState) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })

    event.target.closest(".list_item").classList.add("active")
  }

  function highLight () {
    const menuArr = document.querySelectorAll(".advantages .context_list .list_item")

    if (!menuArr.length || menuArr.length === 15) return;

    const slideArr = document.querySelectorAll('.advantages .inner_slides .list_item')
    // @ts-ignore
    const active = [...menuArr].find(item => item.classList.contains('active'))
    const activeIndex = +active.getAttribute('data-advantages-item')
    // @ts-ignore
    const nextElem = [...menuArr].find(item => (+item.getAttribute('data-advantages-item') - 1) === activeIndex)

    slideArr.forEach(item => item.classList.remove('active'))

    if (menuArr.length === +active.getAttribute('data-advantages-item')) {
      menuArr[0].classList.add('active')
      slideArr[0].classList.add('active')
    } else {
      nextElem.classList.add('active')
      slideArr[activeIndex].classList.add('active')
    }

    active.classList.remove('active')
  }

  useEffect(() => {
    if (window.innerWidth >= 721) {
      setInterval(highLight, 5000)
      console.log('window inner width')
    }
  }, [])

  // @ts-ignore
  return (
    <div className="wrapper">
      <article className="hero" style={bgImage}>
        <div className="shadow"></div>
        <div className="global-container">
          <div className="hero_inner">
            <div className="inner_content">
              <h1 className="content_title">{t("main-title")}</h1>
              <p className="content_text">{t("main-text")}</p>
              <div className="content_img">
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
            <div className="inner_img">
              <img src='/img/phone-domino.png' alt="Domino" />
            </div>
          </div>
        </div>
      </article>
      <article className="about">
        <div className="global-container">
          <div className="about_inner">
            <div className="inner_img">
              <img src="/img/domino-box.jpg" alt="Domino" />
            </div>
            <div className="inner_content">
              <h2 className="content_title">
                <span>{t("twoTitle")}</span>
              </h2>
              <p className="content_text">{t("twoText")}</p>
              <div className="content_link">
                <a href={locale === "ru" ? "ru/istoriya-domino" : "/history-of-dominoes"}>{t("twoAnchor")}</a>
                <img src='/img/right-arrow.png' alt="Dominoes" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="banner" style={bgImage}>
        <div className="shadow"></div>
        <div className="global-container">
          <div className="banner_inner">
            <div className="inner_title">{t("banner.banner-title")}</div>
            <div className="inner_img">
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
      </article>

      <article className="game-list">
        <div className="global-container">
          <div className="list_inner">
            {/*<SliderMy />*/}
          </div>
        </div>
      </article>
      <article className="strategy" style={{ backgroundColor: "#fafafa" }}>
        <div className="global-container">
          <div className="strategy_inner">
            <div className="inner_img">
              <img src="/img/domino-strategy.jpg" alt="Domino" />
            </div>
            <div className="inner_content">
              <h2 className="content_title">
                <span>{t("strategiya-v-domino.strategy-title")}</span>
              </h2>
              <p className="content_text">{t("strategiya-v-domino.strategy-text")}</p>
              <div className="content_link">
                {locale === "ru" ? <Link
                  href="/[lang]/strategiya-v-domino" as={`/${locale}/strategiya-v-domino`}>
                  <a target="_blank">{t("strategiya-v-domino.strategy-anchor")}</a>
                </Link> : <Link
                  href="/[lang]/how-to-play-dominoes" as={`/${locale}/how-to-play-dominoes`}>
                  <a target="_blank">{t("strategiya-v-domino.strategy-anchor")}</a>
                </Link>}
                <img src="/img/right-arrow.png" alt="Dominoes" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="advantages">
        <div className="global-container">
          <div className="advantages_inner">
            <div className="inner_context">
              <div className="context_title">
                <span>{t("advantages.context_title")}</span>
              </div>
              <div className="context_text">{t("advantages.context_text")}</div>
              <ul className="context_list slick-center-wrap">
                {/*<Slider> {...settingsSlider}>*/}
                  <li
                    className="list_item active"
                    data-advantages-item="01"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src="/img/advantage-1.jpg"
                      alt={t("advantages.context_list_item_txt_01")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_01")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="02"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src="/img/advantage-2.jpg"
                      alt={t("advantages.context_list_item_txt_02")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_02")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="03"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src="/img/advantage-3.jpg"
                      alt={t("advantages.context_list_item_txt_03")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_03")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="04"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src="/img/advantage-4.jpg"
                      alt={t("advantages.context_list_item_txt_04")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_04")}
                    </span>
                  </li>
                  <li
                    className="list_item"
                    data-advantages-item="05"
                    onClick={accordionStateChange}
                  >
                    <img
                      className="item_pic"
                      src="/img/advantage-1.jpg"
                      alt={t("advantages.context_list_item_txt_05")}
                    />
                    <span className="item_txt">
                      {t("advantages.context_list_item_txt_05")}
                    </span>
                  </li>
                {/*</Slider>*/}
              </ul>
            </div>

            <div className="inner_slides">
              <ul className={"slides_list "}>
                <li className="list_item active" data-slider-item="01">
                  <img
                    src="/img/advantage-1.jpg"
                    alt={t("advantages.context_list_item_txt_01")}
                  />
                </li>
                <li className="list_item" data-slider-item="02">
                  <img
                    src="/img/advantage-2.jpg"
                    alt={t("advantages.context_list_item_txt_02")}
                  />
                </li>
                <li className="list_item" data-slider-item="03">
                  <img
                    src="/img/advantage-3.jpg"
                    alt={t("advantages.context_list_item_txt_03")}
                  />
                </li>
                <li className="list_item" data-slider-item="04">
                  <img
                    src="/img/advantage-4.jpg"
                    alt={t("advantages.context_list_item_txt_04")}
                  />
                </li>
                <li className="list_item" data-slider-item="05">
                  <img
                    src="/img/advantage-1.jpg"
                    alt={t("advantages.context_list_item_txt_05")}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default HomePage