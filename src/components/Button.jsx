import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type="submit" onClick={props.btnClick} className={`btn ${props.className}`} aria-label={props.ariaLabel}>{props.ariaLabel}</button>
    </>
  )
}

export default Button
