import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Dictionary from '../Dictionary'

const FormLoggin = (props) => {
  const { loginSubmit, toggleSignUp } = props
  const userObject = { email: '', password: '' }
  const [formWithError, setErrorMessage] = useState(0)
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm(() => loginSubmit(values), userObject, setErrorMessage)
  return (
    <Card>
      <Card.Header>
        {Dictionary.logIn}
        <Button
          className='float-right'
          onClick={() => toggleSignUp()}
        >Sign up</Button>
      </Card.Header>
      <Card.Body>
        {formWithError === 1 && (
          <Alert variant='warning'>
            {Dictionary.pleaseCompleteForm}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>{Dictionary.emailAddress}</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder={Dictionary.emailAddress}
              onChange={handleChange} 
              value={values.email}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>{Dictionary.password}</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder={Dictionary.password}
              onChange={handleChange} 
              value={values.password}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            {Dictionary.submit}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default FormLoggin
