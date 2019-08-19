import React from 'react'

const Section = props => {
  const className = props.className ? 'section ' + props.className : 'section'
  return <div className={className}>{props.children}</div>
}

export default Section
