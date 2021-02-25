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

      let seriesB = [{
        name: 'g co2 / mi @ 25 mpg',
        data: [356, 356, 356, 356, 356, 356, 356]
      }, {
        name: 'FREEZE g co2 / mi @ 21.7 mpg',
        data: [409, 409, 409, 409, 409, 409, 409]
      }, {
        name: 'min g co2 / mi tsla m3 rwd base',
        data: [21, 21, 21, 21, 21, 21, 21]
      }, {
        name: 'max g co2 / mi tsla m3 rwd base',
        data: [51, 51, 51, 51, 51, 51, 51]
      }, {
        name: 'FREEZE g co2 / mi tsla m3 rwd base',
        data: [34, 34, 34, 34, 34, 34, 34]
      }];

    let optionsB = {
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
            <ReactApexChart options={optionsB} series={seriesB} type="area" height={350} />
        </div>
    )
}

export default Graph;