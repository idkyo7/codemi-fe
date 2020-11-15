/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children, useState, useEffect } from 'react';
import axios from 'axios';
import CanvasJSReact from 'utils/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import './styles.css';

function TabChart() {

  const [apiData, setApiData] = useState("");

    
  useEffect(() => {
      (async () => {
          const result = await axios.get(
              "https://covid19.mathdro.id/api/"
          );
          setApiData(result.data);
      })();
  }, []);
 
  const options = {
    backgroundColor: "#4185f5",
    height: 260,
    axisY: {
      labelFontSize: 12,
      labelFontColor: "#fff"
    },
    axisX: {
      labelFontSize: 12,
      labelFontColor: "#fff"
    },
    data: [
    {
      type: "column",
      dataPointWidth: 10,
      dataPoints: [
        { label: "Confirmed",  y: apiData ? apiData.confirmed.value : 0, color: "#8eb6f9"  },
        { label: "Deaths",  y: apiData ? apiData.deaths.value : 0, color: "#8eb6f9"  },
        { label: "Recovered",  y: apiData ? apiData.recovered.value : 0, color: "#8eb6f9"  },
      ]
    }
    ]
  }
  if(!apiData) {
    return <p>Loading</p>;
  }
  return (
    <div className="p-3 bg-blue">
      <div className="top-container">
        <div className="title-section">
          <p className="main-title active">Recovered Users Right Now</p>
          <p className="main-content active">{apiData.recovered.value}</p>
          <p className="time-content">Page views per minute</p>
        </div>
      </div>
      <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
      <div className="col-md-12 mt-3 select-container">
        <p className="text-right report-text">
          <span className="mr-3">
            Real Time Report 
          </span>
          &gt;
          </p>
      </div>
    </div>
  );
}


export default TabChart;
