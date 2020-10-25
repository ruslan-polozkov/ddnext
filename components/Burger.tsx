import React from "react"

// @ts-ignore
const Burger = ({ onClick }) => {
  return (
    <div className="header_burger" onClick={onClick}>
      <div className="burger_icon" />
    </div>
  )
}

export default Burger
