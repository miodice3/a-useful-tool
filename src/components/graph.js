import React from 'react';
import ReactApexChart from 'react-apexcharts';


function Graph(props){

    // const forecasted = props.forecasts.map(forecast => (forecast.intensity.forecasted))
    if (props.forecasted) {
      console.log("props.forecasted was apparently true")
      console.log(props)
    } else {
      console.log("props.forecasted was apparently false")
      console.log(props)
    }
    // debugger

    // debugger

    const series = [{
        name: 'Forecasted',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Actual',
        data: [11, 32, 45, 32, 34, 52, 41]
      }];

    const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }

    return(
        <div>
            <h2>graph</h2>

            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default Graph;