import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const colorPicker=['#B21F00','#C9DE00','#2FDE00','#00A6B4','#6800B4'];
const newCols = ['#501800','#4B5000','#175000','#003350','#35014F'];
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 5)]),
      hoverBackgroundColor: newCols.map(() => newCols[Math.round(Math.random() * 5)]),
      // backgroundColor: [
      //   '#B21F00',
      //   '#C9DE00',
      //   '#2FDE00',
      //   '#00A6B4',
      //   '#6800B4'
      // ],
      // hoverBackgroundColor: [
      // '#501800',
      // '#4B5000',
      // '#175000',
      // '#003350',
      // '#35014F'
      // ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class ChartsPie extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Pie
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
          <div className="col-md-6">
            <Doughnut
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
        </div>
      </div>
    );
  }
}