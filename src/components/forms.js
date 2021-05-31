import React, {Component} from 'react'
import './trial.css'
import axios from 'axios'
class EssayForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      essay: null,
      feelings: null
    }
    }

  handleSubmit = (event) =>{
    event.preventDefault();
    const data = this.state;
    console.log(data)
    const response = axios.post('http://localhost:5000/feelings', data)
    .then(res => {console.log(res)}).catch(error=>{console.log(error)})
    alert("response subitted")
  }
  handleInputChange = (event) =>{
    //console.log(event)
    //console.log(event.target.name)
    //console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const {essay} = this.state
    const {feelings} = this.state
    return(
      <div className = 'Card1'>
      <h2 className = 'banner'> How do you feel today, friend?</h2>
      <form onSubmit = {this.handleSubmit}>
      <p><input className = 'input1' type = 'text' placeholder = 'Let your feelings flow. It will all just be here' name = 'essay' onChange = {this.handleInputChange} /></p>
      <p><input className= 'radio1' type = 'radio' value = 'Happy' name = 'feelings' onChange = {this.handleInputChange} /> Happy! </p>
      <p><input className= 'radio1' type = 'radio' value = 'Neutral' name = 'feelings' onChange = {this.handleInputChange}/> Neutral </p>
      <p><input className= 'radio1' type = 'radio' value = 'Sad' name = 'feelings' onChange = {this.handleInputChange}/> Sad</p>
      <p><input className= 'radio1' type = 'radio' value = 'Envious' name = 'feelings' onChange = {this.handleInputChange}/> Envious </p>
      <p><input className= 'radio1' type = 'radio' value = 'Angry' name = 'feelings' onChange = {this.handleInputChange}/> Angry </p>
      <p><input className= 'radio1' type = 'radio' value = 'Depressed' name = 'feelings' onChange = {this.handleInputChange}/> Depressed </p>
      <p><input className= 'radio1' type = 'radio' value = 'Helpless' name = 'feelings' onChange = {this.handleInputChange}/> Helpless </p>
      <p><input className= 'radio1' type = 'radio' value = 'Unsure' name = 'feelings' onChange = {this.handleInputChange}/> Unsure </p>
      <p><button className = 'banner'> Save </button></p>
      </form>
      </div>
    )
  }
}

export default EssayForm
