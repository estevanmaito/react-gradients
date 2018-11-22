import React from 'react'

const GradientColorInfo = ({ color }) => {
  const style = {
    display: 'block',
    color: `#${color}`,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '16px',
    textAlign: 'center'
  }

  return <span style={style}>{color}</span>
}

export default GradientColorInfo