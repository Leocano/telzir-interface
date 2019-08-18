import React from 'react'

const Field = ({ label, children }) => {
  return (
    <div className='field'>
      {label ? <label className='label'>{label}</label> : null}
      <div className='control'>
        {children}
      </div>
    </div>
  )
}

export default Field
