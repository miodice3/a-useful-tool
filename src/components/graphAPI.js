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
        name: `${props.vehicle_a_fuel_type}gas car selected: g co2/mi`,
        data: [0, 0]
      }, {
        name: 'gas car selected: FREEZE g co2 / mi @ 25 mpg',
        data: [0, 0]
      }, {
        name: 'tsla m3 rwd base: min g co2 / mi',
        data: [0, 0]
      }, {
        name: 'freeze & dirty electric: tsla m3 rwd base: max g co2 / mi',
        data: [0, 0]
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
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z"]
        },
        title: {
          text: "Grams co2 per mile driven, using estimate co2 emissions",
          align: 'center',
          style:{fontSize: 25}
        },
        tooltip: {
          x: {
            format: 'yy/MM/dd HH:mm'
          },
        },
      }

      if (props.forecasts === undefined) {
      } else {

        series[0].data = props.forecasts.map(forecast=>forecast.intensity.forecast)
        series[1].data = props.forecasts.map(forecast=>forecast.intensity.actual)
        options.xaxis.categories = props.forecasts.map(forecast=>forecast.from)

        if (props.vehicle_a_fuel_type !== "Electricity"){
            seriesB[0].data = props.forecasts.map(()=>(Math.round(props.vehicle_a_emissions)))
        } else if (props.vehicle_a_fuel_type === "Electricity") {
            seriesB[2].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.mpkwh)))
        }
        // seriesB[1].data = props.forecasts.map(()=>(Math.round(8887/props.gasfreeze)))
        //8887gr/gal diesel office transportation and air quality EPA-420-F-14-040
        //10180gr/gal diesel office transportation and air quality EPA-420-F-14-040
        // seriesB[2].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.mpkwh)))
        // seriesB[3].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.mpkwhfreeze)))
        optionsB.xaxis.categories = props.forecasts.map(forecast=>forecast.from)
        console.log(seriesB)
      }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
            {/* this should eventually update based off vehicle selection, props change from parent. */}
            {/* fuel price calcs https://www.fueleconomy.gov/ws/rest/fuelprices */}
            <ReactApexChart options={optionsB} series={seriesB} type="area" height={350} />
            *8,887gr CO2/gal reg fuel,  10,180gr CO2/gal diesel, CO2/mi methodology used: EPA-420-f-14-040
        </div>
    )
}



export default Graph;