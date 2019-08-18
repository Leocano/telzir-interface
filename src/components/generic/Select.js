import React from 'react'

const Select = props => {
  const options = props.options.map((option, i) => {
    return {...option, key: i}
  })
  return (
    <div className='select is-fullwidth'>
      <select value={props.selectedValue} onChange={props.onChange}>
        {options.map(({ value, name, key }) => {
          return <option key={key} value={value}>{name}</option>
        })}
      </select>
    </div>
  )
}

export default Select
