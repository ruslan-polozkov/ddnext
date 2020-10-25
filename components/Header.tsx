import React, { useState, useEffect } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Burger from "./Burger"

const Header = () => {
  const [open, setOpen] = useState(false)

  const setOpenedHeaderState = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const header = document.querySelector(".header")
    const burger = document.querySelector(".header_burger")
    const toUp = document.querySelector('.up-container')

    // @ts-ignore
    open ? header.classList.add("opened") : header.classList.remove("opened")
    // @ts-ignore

    open ? burger.classList.add("open") : burger.classList.remove("open")
    open ? document.documentElement.classList.add('scroll-hidden') : document.documentElement.classList.remove('scroll-hidden')

    if (toUp && open) {
      toUp.classList.add('dnone')
    } else {
      // @ts-ignore

      toUp?.classList.remove('dnone')
    }
  })

  useEffect(() => {
    const header = document.querySelector(".header")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
            // @ts-ignore

        header.classList.add("active")
      } else {
            // @ts-ignore

        header.classList.remove("active")
      }

      if (window.scrollY > 500) {
            // @ts-ignore

        header.classList.add("fixed")
      } else {
            // @ts-ignore

        header.classList.remove("fixed")
      }
    })
  })

  return (
    <header className="header">
      <div className="global-container">
        <div className="header_inner">
          <Logo />
          <Navigation />
          <Burger onClick={setOpenedHeaderState} />
        </div>
      </div>
    </header>
  )
}

export default Header
