import React from 'react';
import {Bar, Line} from 'react-chartjs-2';

const colorPicker=['#B21F00','#C9DE00','#2FDE00','#00A6B4','#6800B4'];
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      // backgroundColor: 'rgba(75,192,192,1)',
      backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 5)]),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class ChartsBar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <Bar
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>    
          <div className="col-md-6 col-12">
            <Line
              data={{
                datasets: [
                  {
                    data: state,
                    label: "Activity",
                    borderColor: "#3333ff",
                    fill: true,
                    backgroundColor: "#CAA6DB",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}