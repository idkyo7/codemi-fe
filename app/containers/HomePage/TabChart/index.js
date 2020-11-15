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

function TabChart() {
  const options = {
    backgroundColor: "#4185f5",
    height: 260,
    axisY: {
      labelFontSize: 0,
      labelFontColor: "#4185f5"
    },
    axisX: {
      labelFontSize: 0,
      labelFontColor: "#4185f5"
    },
    data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPointWidth: 10,
      dataPoints: [
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
        { label: "",  y: 10, color: "#8eb6f9"  },
        { label: "", y: 15, color: "#8eb6f9"  },
        { label: "", y: 25, color: "#8eb6f9"  },
        { label: "",  y: 30, color: "#8eb6f9" },
      ]
    }
    ]
  }
  return (
    <div className="p-3 bg-blue">
      <div className="top-container">
        <div className="title-section">
          <p className="main-title active">Active Users Right Now</p>
          <p className="main-content active">479</p>
          <p className="time-content">Page views per minute</p>
        </div>
      </div>
      <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
      <div className="col-md-6 mt-3 select-container">
      </div>
    </div>
  );
}


export default TabChart;
