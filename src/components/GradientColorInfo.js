import React from 'react';

const GradientColorInfo = (props) => {
  const style = {
    display: 'block',
    color: `#${props.color}`,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '16px',
    textAlign: 'center'
  }

  return <span style={style}>{props.color}</span>
}

export default GradientColorInfo;