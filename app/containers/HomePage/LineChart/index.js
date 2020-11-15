/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import { Form } from 'react-bootstrap';
import CanvasJSReact from 'utils/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import './styles.css';

function LineChart() {
  const options = {
    animationEnabled: true,
    title:{
    },
    axisX: {
      valueFormatString: "MMM",
      lineDashType: "dot",
      lineThickness: 1,
    },
    axisY: {

    },
    data: [{
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "line",
      dataPoints: [
        { x: new Date(2017, 0), y: 500 },
        { x: new Date(2017, 1), y: 500 },
        { x: new Date(2017, 2), y: 400 },
        { x: new Date(2017, 3), y: 450 },
        { x: new Date(2017, 4), y: 490 },
        { x: new Date(2017, 5), y: 500 },
      ]
    }]
  }
  return (
    <div className="p-3 bg-white">
      <div className="title-container">
        <div className="title-section">
          <p className="main-title active">Users</p>
          <p className="main-content active">58K</p>
          <p className="small-content">58%</p>
          <p className="time-content">Last 7 Days</p>
        </div>
        <div className="title-section">
          <p className="main-title">Users</p>
          <p className="main-content">58K</p>
          <p className="small-content red">58%</p>
          <p className="time-content">Last 7 Days</p>
        </div>
        <div className="title-section">
          <p className="main-title">Users</p>
          <p className="main-content">58K</p>
          <p className="small-content">58%</p>
          <p className="time-content">Last 7 Days</p>
        </div>
        <div className="title-section">
          <p className="main-title">Users</p>
          <p className="main-content">58K</p>
          <p className="small-content">58%</p>
          <p className="time-content">Last 7 Days</p>
        </div>
      </div>
      <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
      <div className="col-md-2 mt-3 select-container">
        <Form.Group>
          <Form.Control size="sm" as="select">
            <option>Last 7 days</option>
          </Form.Control>
        </Form.Group>
      </div>
    </div>
  );
}


export default LineChart;
