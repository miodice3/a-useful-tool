import ReactApexChart from 'react-apexcharts';

function VehicleGraph(props){

      let seriesB = [{
        name: `${props.vehicle_a_fuel_type} gas car selected: g co2/mi`,
        data: [0, 0]
      }, {
        name: 'Auto B, not yet implemented',
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
        // debugger
        if (props.vehicle_a.vehicle_a_fuel_type !== "Electricity"){
            seriesB[0].data = props.forecasts.map(()=>(Math.round(props.vehicle_a.vehicle_a_emissions)))
        } else if (props.vehicle_a.vehicle_a_fuel_type === "Electricity") {
            seriesB[1].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.vehicle_a.vehicle_a_emissions)))
        }
        optionsB.xaxis.categories = props.forecasts.map(forecast=>forecast.from)
        console.log(seriesB)
      }

    return(
        <div>
            <ReactApexChart options={optionsB} series={seriesB} type="area" height={350} />
        </div>
    )
}

export default VehicleGraph;