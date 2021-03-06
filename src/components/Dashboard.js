import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import { Link, useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import FetchQuote from "./quoteFetcher";
import './dashboard.css';
import {Sidebar} from './sidebar.js'
import {Diary} from './diary.js'
//import {entries, storeEntry, removeEntry} from './diary.js'
export default function Dashboard() {
  const [error, setError] = useState("")
  const{currentUser, logout} = useAuth()
  const history = useHistory()
  async function handleLogout(){
    setError()
    try{
      await logout
      history.push('/login')
      setError()
    }
    catch{
      setError('Failed to log out')

    }
  }

  async function handleAnalytics(){
    setError()
    try{
      //await logout()
      history.push('/Analytics')
      setError()
    }
    catch{
      setError('Failed to load Analytics')

    }
  }

  async function handlePage(){
    setError()
    try{
      //await logout()
      history.push('/Diary')
      setError()
    }
    catch{
      setError('Failed to load Diary')

    }
  }


  return (
    <>
    <Sidebar width={300} height={"100vh"}>
      <div className='lines'>
          <p className='links'> MENU </p>
          <p className= 'links'><Button className= 'links' variant= 'link'  onClick={handlePage}> Diary </Button></p>
          <p className= 'links'><Button className= 'links' variant= 'link'  onClick={handleAnalytics}> Analytics </Button></p>
          <p className= 'links'><Button className= 'links' variant= 'link'  onClick={handleLogout}> Log Out </Button></p>
        </div>
        </Sidebar>
    <div className='main-div'>
      <FetchQuote/>
    </div>
    </>
)
}
