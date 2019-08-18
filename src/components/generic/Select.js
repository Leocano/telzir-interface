import React from 'react'

const Select = (props, { selectedValue, onChange }) => {
  const options = props.options.map((option, i) => {
    return {...option, key: i}
  })
  return (
    <div className='select'>
      <select value={selectedValue} onChange={onChange}>
        {options.map(({ value, name, key }) => {
          return <option key={key} value={value}>{name}</option>
        })}
      </select>
    </div>
  )
}

export default Select
