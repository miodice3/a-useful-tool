import ReactApexChart from 'react-apexcharts';

function VehicleGraph(props){

      let series = [{
        name: `${props.vehicle_a.selectedYear} ${props.vehicle_a.selectedManufacturer} ${props.vehicle_a.selectedModel} - ${props.vehicle_a.vehicle_fuel_type}`,
        data: [0, 0]
      }, {
        name: `${props.vehicle_b.selectedYear} ${props.vehicle_b.selectedManufacturer} ${props.vehicle_b.selectedModel} - ${props.vehicle_b.vehicle_fuel_type}`,
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
          type: 'numeric',
          categories: [0, 18750, 37500, 56250, 75000, 93750, 112500, 131250, 150000]
        },
        title: {
          text: "Lifetime kg CO2",
          align: 'center',
          style:{fontSize: 25}
        },
        tooltip: {
          x: {
            format: 'numeric'
          },
        },
      }

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let mileage = [0, 18750, 37500, 56250, 75000, 93750, 112500, 131250, 150000]

      if (props.forecasts === undefined) {
      } else {
        if (props.vehicle_a.vehicle_fuel_type !== "Electricity"){
          series[0].data = mileage.map((miles)=> (Math.round(miles * props.vehicle_a.vehicle_emissions / 1000)))

        } else if (props.vehicle_a.vehicle_fuel_type === "Electricity") {          
          let total_forecast_a = props.forecasts.map(forecast=>forecast.intensity.forecast)
          let summed_forecast_a = total_forecast_a.reduce(reducer)
          let avg_g_mile_a = (Math.round(summed_forecast_a / total_forecast_a.length))

          series[0].data = mileage.map((miles)=> (Math.round(miles * avg_g_mile_a/props.vehicle_a.vehicle_emissions / 1000)))
        }
      }

      if (props.forecasts === undefined) {
      } else {
        if (props.vehicle_b.vehicle_fuel_type !== "Electricity"){
          series[1].data = mileage.map((miles)=> (Math.round(miles * props.vehicle_b.vehicle_emissions / 1000)))

        } else if (props.vehicle_b.vehicle_fuel_type === "Electricity") {
          let total_forecast = props.forecasts.map(forecast=>forecast.intensity.forecast)
          let summed_forecast = total_forecast.reduce(reducer)
          let avg_g_mile = (Math.round(summed_forecast / total_forecast.length))

          series[1].data = mileage.map((miles)=> (Math.round(miles * avg_g_mile/props.vehicle_b.vehicle_emissions / 1000)))
        }
      }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default VehicleGraph;