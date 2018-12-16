import React from 'react'
import ReactDOM from 'react-dom';
import { ResponsiveLine } from '@nivo/line';

var numPoints = 5000

var data = [
  {
    "id": "sine curve",
    "data": [
    ]
  }
];


var t0 = performance.now();

var i;
for (i = 0; i < numPoints; i++) {
  data[0].data.push(
      {
        "x": i,
        "y": Math.sin(Math.PI * i / numPoints),
      },
  
  )
};

var t1 = performance.now();

ReactDOM.render((
    <div style={{ height: '500px'}}>
      <ResponsiveLine
          data={data}
      />
  </div>
), document.getElementById('app'))

var t2 = performance.now();

console.log("Number of points: " + numPoints)
console.log("Data generated in: " + (t1 - t0) + " milliseconds.")
console.log("Chart rendered in: " + (t2 - t1) + " milliseconds.")
