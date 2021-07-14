import React, { useRef,useState } from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import './trial.css'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase';
import UserDetails from './forms'
import {Component} from 'react';
import axios from 'axios';
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const history = useHistory()

    async function handleSubmit(e){
      e.preventDefault()
      try{
        setError('')
        sendData()
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/dashboard")
        setLoading(true)
      }
      catch{
        setError('Failed to log in')
      }
      setLoading(false)
    }

    async function sendData(){
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setEmail(user.email)
            const response = axios.post('http://localhost:5000/user', {email:user.email})
          }
        })
    }

  return (
    <>
      <Card>
      <Card.Body className='Card1'>
        <h2 className="banner">  Log In </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id = 'email' className="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type = 'email' className="email" ref = {emailRef} required />
          </Form.Group>
          <Form.Group id = 'password' className="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type = 'password' ref = {passwordRef} frequired />
          </Form.Group>
          <Button className="banner" disabled = {loading}  type = "submit">
           Log In
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Link className = 'links' to = "/forgot-password">Forgot Password?</Link>
        </div>
      </Card.Body>
    </Card>
    <div className = 'w-100 text-center mt-2'>
      Need a new account? <Link className='links' to='/Signup'> Sign Up </Link>
    </div>
  </>
  )

}
