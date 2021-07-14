import React, {useState} from 'react'
import { AxisModel, Category, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective} from'@syncfusion/ej2-react-charts';
import axios from 'axios'
import './trial.css'
import Plot from 'react-plotly.js';
import {Sidebar} from './sidebar.js';
import {Line, Bar} from 'react-chartjs-2';
import {Diary} from './diary.js';
import {Card, Button, Alert} from 'react-bootstrap'
import { Link, useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import FetchQuote from "./quoteFetcher";
import './dashboard.css';
import Dashboard from "./Dashboard.js";

var count_arr = [];

export default class FinalScore extends React.Component {
  chartRef = React.createRef();
  state = {
    data:[]
  };
  componentDidMount() {
    axios.get('http://localhost:5000/score')
      .then(res => {
        this.setState({data:res.data});

      })
    }

  render() {
    for(var i = 0; i <= this.state.data.length - 1; i++) {
      count_arr.push(i)
      }
    console.log(count_arr);
    const data = {
      labels: count_arr,
      datasets: [
        {
          label: "Feeling intensity",
          data: this.state.data,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        }]
      }

    return (
      <>
      <ul>
      {/*{this.state.data.map(score => <li>{score}</li>)}*/}
      So, this is how you have been feeling, my friend!
      </ul>
      {/*< Dashboard/>*/}
      < Line data={data}/>

    </>

    )
  }
};
