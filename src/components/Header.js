import React from 'react'
import { Row, Col } from 'reactstrap'

const Header = () => (
  <Row className="Header">
    <Col sm="12" className="text-center">
      <h1 style={{ fontWeight: '800' }}>Gradients</h1>
      <h4>A React + gradients experiment</h4>
      <p>The amazing color combinations you see below were made by <a rel="noopener noreferrer" href="https://dribbble.com/shots/3380672-Sketch-Gradients-Freebie" target="_blank">Alexander Zaytsev</a>, 
        and you can <strong>copy these values into your CSS code by
        clicking on every color</strong>.</p>
    </Col>
  </Row>
)

export default Header
