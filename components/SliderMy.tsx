import React from "react"
// @ts-ignore
import Slider from "react-slick"
import Link from "next/link";
import useTranslation from '../hooks/useTranslation'

const SliderMy = () => {
  const { locale, t } = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_01")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_01")}</div>
            <div className="inner_link">
              {locale === "ru" ? <Link
                href="/[lang]/domino-bloc" as={`/${locale}/domino-bloc`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link> : <Link
                href="/[lang]/blocks-dominoes" as={`/${locale}/blocks-dominoes`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link>}
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_02")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_02")}</div>
            <div className="inner_link">
              {locale === "ru" ? <Link
                href="/[lang]/domino-klassicheskoe" as={`/${locale}/domino-klassicheskoe`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link> : <Link
                href="/[lang]/dominoes-rules" as={`/${locale}/dominoes-rules`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link>}
            </div>
          </div>
        </div>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_03")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_03")}</div>
            <div className="inner_link">
              {locale === "ru" ? <Link
                href="/[lang]/domino-5" as={`/${locale}/domino-5`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link> : <Link
                href="/[lang]/all-fives-dominoes" as={`/${locale}/all-fives-dominoes`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link>}
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              {t("slider.slider_item_title_04")}
            </div>
            <div className="inner_text">{t("slider.slider_item_text_04")}</div>
            <div className="inner_link">
              {locale === "ru" ? <Link
                href="/[lang]/domino-online" as={`/${locale}/domino-online`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link> : <Link
                href="/[lang]/dominoes-online" as={`/${locale}/dominoes-online`}>
                <a target="_blank">{t("slider.slider_item_more")}</a>
              </Link>}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderMy
