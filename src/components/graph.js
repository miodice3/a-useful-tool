import React from 'react';
import ReactApexChart from 'react-apexcharts';


function Graph(props){
   
    let series = [{
        name: 'Forecasted',
        data: [0, 0, 0, 0, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0, 0, 0, 0]
      }
      // {
      //   name: 'test',
      //   data: [0, 0, 0, 0, 0, 0, 0]
      // }
    ];

    let options = {
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
        yaxis: {
          text: "Grams of co2"
        },
        title: {
          text: "Grams co2 per kWh",
          align: 'center',
          style:{fontSize: 25}
        },
        tooltip: {
          x: {
            // format: 'dd/MM/yy HH:mm'
            format: 'yy/MM/dd HH:mm'
          },
        },
      }

      if (props.forecasts === undefined) {
        console.log("AA")
        console.log(props.forecasts)
      } else {
        console.log("BB")
        console.log(props.forecasts)
        // debugger
        series[0].data = props.forecasts.map(forecast=>forecast.intensity.forecast)
        series[1].data = props.forecasts.map(forecast=>forecast.intensity.actual)
        // series[2].data = props.forecasts.map(forecast=>forecast.intensity.actual+25)
        options.xaxis.categories = props.forecasts.map(forecast=>forecast.from)
        // debugger
      }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default Graph;