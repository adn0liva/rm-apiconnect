
import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dictionary from '../../Dictionary'

const ErrorPage = (props) => {
  const { errorNumber } = props
  return (
    <div className='main-container mt-5'>
      <Row className='justify-content-md-center'>
        <Col md={6} xs={12}>
          <Card border='danger'>
            <Card.Body>
              <Card.Title>{Dictionary.errorPage}</Card.Title>
              <Card.Text>{Dictionary.somethingWrong}</Card.Text>
            </Card.Body>
            <Card.Img variant='bottom' src={`https://http.cat/${errorNumber}.jpg`} />
            <Card.Footer>
              <Link to='/' className='btn btn-sm btn-info'>{Dictionary.goHomeUrDrunk}</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ErrorPage