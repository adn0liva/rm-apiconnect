import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

const FormLoggin = (props) => {
  const { loginSubmit } = props
  const userObject = { email: '', password: ''}
  const [formWithError, setErrorMessage] = useState(0)
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm(() => loginSubmit(values), userObject, setErrorMessage)
  return (
    <Card>
      <Card.Body>
        <h3>Log In</h3>
        {formWithError === 1 && (
          <Alert variant='warning'>
            Please Complete the form
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={handleChange} 
              value={values.email}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange} 
            value={values.password}
            />
          </Form.Group>
          {/* <Form.Group controlId='formBasicChecbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group> */}
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
} 

export default FormLoggin
