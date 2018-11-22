import React from 'react'
import GradientCard from './GradientCard.js'
import { Row } from 'reactstrap'

const GradientList = ({ gradients }) => (
  <Row>
    {gradients.map((gradient, i) => (
      <GradientCard
        key={i}
        colors={gradient}
      />
    ))}
  </Row>
)

export default GradientList