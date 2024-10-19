import React from 'react'

export default function Buttons(props) {
  return (
   <div>

    <button className={`mybutton ${props.buttonstyle}`}>
        <span>{props.text}</span>
    </button>

   </div>
  )
}
