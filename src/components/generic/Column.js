import React from 'react'

const Column = (props) => {
  const className = props.className ? 'column ' + props.className : 'column'
  return <div className={className}>{props.children}</div>
}

export default Column
