import React,{useState,useEffect} from "react";
import {Card, Alert} from 'react-bootstrap';
import './dashboard.css';
import './trial.css'



function FetchQuote() {
  const [quote,setQuote] = useState('');
  const [loading,setLoading] = useState(true);
  const [author,setAuthor]= useState('');
  const [imgSrc,setImgSrc] = useState('');

    useEffect(()=>{
      fetch('http://quotes.rest/qod.json?category=inspire')
      .then(res=> res.json())
      .then(data=>{
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      fetch('https://api.unsplash.com/photos/random?client_id=L0iYE0zWZjDqn7qj4S-GbZSCu6y834CNrwlG_pVr6Q8')
      .then(photo=>photo.json())
      .then(new_file =>{
        setImgSrc(new_file['urls']['small'])
      })
})
    },[])


      return(
    <>
    <Card>
    <Card.Body className='Card1'>
    <h5 size = '12'>{quote}</h5>
    <p>- {author}</p>
    <img src =  {imgSrc} className = "imageClass"></img>
    </Card.Body>
  </Card>

    </>
)
}

export default FetchQuote
