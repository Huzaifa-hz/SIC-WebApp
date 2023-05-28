import React from 'react'
import PropTypes from 'prop-types'
import './BasicButton.css'
import {Link} from 'react-router-dom'


export default function BasicButton(props) {
  return (
    <div>
    <button className='btn'>{props.text}</button>
    </div>
    
  )
}
// Button.PropTypes={btnStyle:PropTypes.object,
//                   text:PropTypes.string  }









