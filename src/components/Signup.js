import React, { useRef,useState } from 'react'
import './trial.css'
import {auth} from '../firebase';
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
      e.preventDefault()
      sendData()
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
      }
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push('/dashboard')
      }
      catch{
        setError('Failed to create an account')
      }
      setLoading(false)
    }

    async function sendData(){
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setEmail(user.email);
            const response = axios.post('http://localhost:5000/user', {email:user.email})
          }
        })
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
