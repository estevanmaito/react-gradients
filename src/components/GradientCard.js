import React from 'react'
import { Col, Card, CardBody, CardText } from 'reactstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import GradientColorInfo from './GradientColorInfo.js'

const GradientCard = ({ colors }) => {
  const gradient = colors.map(color => `#${color}`)

  return (
    <Col sm="6" lg="3">
      <Card>
        <CopyToClipboard text={`background-image: linear-gradient(135deg, ${gradient});`}>
          <div 
            className="card-img-top" 
            style={{
              width: '100%',
              height: '200px',
              backgroundImage: `linear-gradient(135deg, ${gradient})`
            }}
          />
        </CopyToClipboard>
        <CardBody>
          <CardText>
            {colors.map((color, i) => (
              <GradientColorInfo
                key={i}
                color={color}
              />
            ))}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GradientCard