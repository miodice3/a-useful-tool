import ReactApexChart from 'react-apexcharts';

function VehicleGraph(props){

      let series = [{
        name: `${props.vehicle_a.selectedYear ? props.vehicle_a.selectedYear : "Select Year"}
         ${props.vehicle_a.selectedManufacturer ? props.vehicle_a.selectedManufacturer : ""}
         ${props.vehicle_a.selectedModel ? props.vehicle_a.selectedModel : ""}
         ${props.vehicle_a.vehicle_fuel_type ? props.vehicle_a.vehicle_fuel_type : ""}`,
        data: [0, 0]
      }, {
        name: `${props.vehicle_b.selectedYear ? props.vehicle_b.selectedYear : "Select Year"}
        ${props.vehicle_b.selectedManufacturer ? props.vehicle_b.selectedManufacturer : ""}
        ${props.vehicle_b.selectedModel ? props.vehicle_b.selectedModel : ""}
        ${props.vehicle_b.vehicle_fuel_type ? props.vehicle_b.vehicle_fuel_type : ""}`,
       data: [0, 0]
      }];

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
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z"]
        },
        title: {
          text: "Grams CO2 per mile driven",
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
        if (props.vehicle_a.vehicle_fuel_type !== "Electricity"){
            series[0].data = props.forecasts.map(()=>(Math.round(props.vehicle_a.vehicle_emissions)))
        } else if (props.vehicle_a.vehicle_fuel_type === "Electricity") {
            series[0].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.vehicle_a.vehicle_emissions)))
        } 
        options.xaxis.categories = props.forecasts.map(forecast=>forecast.from)
      }

      if (props.forecasts === undefined) {
      } else {
        if (props.vehicle_b.vehicle_fuel_type !== "Electricity"){
            series[1].data = props.forecasts.map(()=>(Math.round(props.vehicle_b.vehicle_emissions)))
        } else if (props.vehicle_b.vehicle_fuel_type === "Electricity") {
        series[1].data = props.forecasts.map(forecast=>(Math.round(forecast.intensity.forecast/props.vehicle_b.vehicle_emissions)))
      }
      options.xaxis.categories = props.forecasts.map(forecast=>forecast.from)
    }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default VehicleGraph;