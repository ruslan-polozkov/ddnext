import React, { useState } from "react"
// @ts-ignore
import Slider from "react-slick"
import useTranslation from '../hooks/useTranslation'

const SliderAdvantages = () => {
  const [accordionState, accordionSetState] = useState("01")
  const { t } = useTranslation()
  const settings = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  }

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

  // @ts-ignore
  return (
    <ul className="context_list slick-center-wrap">
      {/*
        // @ts-ignore*/}
      <Slider {...settings}>
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
      </Slider>
    </ul>
  )
}

export default SliderAdvantages
