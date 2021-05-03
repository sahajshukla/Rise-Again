import React, { useRef,useState } from 'react'
import './trial.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
      e.preventDefault()
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
      }
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push('/')
      }
      catch{
        setError('Failed to create an account')
      }
      setLoading(false)
    }
  return (
    <>
    <Card>
      <Card.Body className= 'Card1'>
        <h2 className="banner"> Sign Up </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id = 'email' className= 'email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type = 'email' ref = {emailRef} required />
          </Form.Group>
          <Form.Group id = 'password' className="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type = 'password' ref = {passwordRef} required />
          </Form.Group>
          <Form.Group id = 'password-confirm' className= "password">
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control type = 'password' ref = {passwordConfirmRef} required />
          </Form.Group>
          <Button disabled = {loading} className="banner" type = "submit">
           Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className = 'w-100 text-center mt-2'>
    Already have an account? <Link className='links' to= '/Login'>Log In</Link>
    </div>
    </>
  )
}
