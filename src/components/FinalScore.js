import React, {useState} from 'react'
import { AxisModel, Category, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective} from'@syncfusion/ej2-react-charts';
import axios from 'axios'
import './trial.css'
import Plot from 'react-plotly.js';
import {Line, Bar} from 'react-chartjs-2';


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
    return (
      <>
      <ul>
        {this.state.data.map(score => <li>{score}</li>)}
      </ul>
      <ChartComponent id='charts'>
      <Inject services={[LineSeries, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={this.state.data} xName='x' yName='y' type='Line'/>
      </SeriesCollectionDirective>
    </ChartComponent>

    </>

    )
  }
};
