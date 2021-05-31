import React, {useState} from 'react'
import axios from 'axios'
import './trial.css'



export default class FinalScore extends React.Component {
  state = {
    results:[]
  };
  componentDidMount() {
    axios.get('http://localhost:5000/score')
      .then(res => {
        this.setState({results: res.data});
      })
  }

  render() {
    return (
      <ul>
        { this.state.results.map(score => <li>{score}</li>)}
      </ul>
    )
  }
};
