import React from 'react'

const Input = props => {
  return (
    <input className='input' type={props.type} value={props.value} onChange={props.onChange} />
  )
}

export default Input
