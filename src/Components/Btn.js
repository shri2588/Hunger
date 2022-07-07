import React from 'react'
import { Button } from 'react-bootstrap'
import '../ComponentCss/BtnCss.css'

const Btn = (props) => {
  return (
    <div>
        <Button className="readmore-btn">{ props.value }</Button>
    </div>
  )
}

export default Btn