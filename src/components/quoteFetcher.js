import React,{useState,useEffect} from "react";
import {Card, Alert} from 'react-bootstrap';
import './dashboard.css';




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
        setImgSrc(data.contents.quotes[0].background);
        setAuthor(data.contents.quotes[0].author);

})
    },[])
      return(
    <>
    <Card>
    <Card.Body className='Card1'>
    <h2>{quote}</h2>
    <p>- {author}</p>
    <img className= "images1" src={imgSrc} />
    </Card.Body>
  </Card>
    </>
)
}
export default FetchQuote
