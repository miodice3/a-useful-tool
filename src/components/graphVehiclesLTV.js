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
          curve: 'straight'
        },
        xaxis: {
          type: 'numeric',
          categories: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000, 20500, 21000, 21500, 22000, 22500, 23000, 23500, 24000, 24500, 25000, 25500, 26000, 26500, 27000, 27500, 28000, 28500, 29000, 29500, 30000, 30500, 31000, 31500, 32000, 32500, 33000, 33500, 34000, 34500, 35000, 35500, 36000, 36500, 37000, 37500, 38000, 38500, 39000, 39500, 40000, 40500, 41000, 41500, 42000, 42500, 43000, 43500, 44000, 44500, 45000, 45500, 46000, 46500, 47000, 47500, 48000, 48500, 49000, 49500, 50000, 50500, 51000, 51500, 52000, 52500, 53000, 53500, 54000, 54500, 55000, 55500, 56000, 56500, 57000, 57500, 58000, 58500, 59000, 59500, 60000, 60500, 61000, 61500, 62000, 62500, 63000, 63500, 64000, 64500, 65000, 65500, 66000, 66500, 67000, 67500, 68000, 68500, 69000, 69500, 70000, 70500, 71000, 71500, 72000, 72500, 73000, 73500, 74000, 74500, 75000, 75500, 76000, 76500, 77000, 77500, 78000, 78500, 79000, 79500, 80000, 80500, 81000, 81500, 82000, 82500, 83000, 83500, 84000, 84500, 85000, 85500, 86000, 86500, 87000, 87500, 88000, 88500, 89000, 89500, 90000, 90500, 91000, 91500, 92000, 92500, 93000, 93500, 94000, 94500, 95000, 95500, 96000, 96500, 97000, 97500, 98000, 98500, 99000, 99500, 100000, 100500, 101000, 101500, 102000, 102500, 103000, 103500, 104000, 104500, 105000, 105500, 106000, 106500, 107000, 107500, 108000, 108500, 109000, 109500, 110000, 110500, 111000, 111500, 112000, 112500, 113000, 113500, 114000, 114500, 115000, 115500, 116000, 116500, 117000, 117500, 118000, 118500, 119000, 119500, 120000, 120500, 121000, 121500, 122000, 122500, 123000, 123500, 124000, 124500, 125000, 125500, 126000, 126500, 127000, 127500, 128000, 128500, 129000, 129500, 130000, 130500, 131000, 131500, 132000, 132500, 133000, 133500, 134000, 134500, 135000, 135500, 136000, 136500, 137000, 137500, 138000, 138500, 139000, 139500, 140000, 140500, 141000, 141500, 142000, 142500, 143000, 143500, 144000, 144500, 145000, 145500, 146000, 146500, 147000, 147500, 148000, 148500, 149000, 149500]
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

      let kg_vehicle_a = parseInt(props.vehicle_a.kgweight ? props.vehicle_a.kgweight : 0);
      let kg_vehicle_b = parseInt(props.vehicle_b.kgweight ? props.vehicle_b.kgweight : 0);

      let mileage = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000, 20500, 21000, 21500, 22000, 22500, 23000, 23500, 24000, 24500, 25000, 25500, 26000, 26500, 27000, 27500, 28000, 28500, 29000, 29500, 30000, 30500, 31000, 31500, 32000, 32500, 33000, 33500, 34000, 34500, 35000, 35500, 36000, 36500, 37000, 37500, 38000, 38500, 39000, 39500, 40000, 40500, 41000, 41500, 42000, 42500, 43000, 43500, 44000, 44500, 45000, 45500, 46000, 46500, 47000, 47500, 48000, 48500, 49000, 49500, 50000, 50500, 51000, 51500, 52000, 52500, 53000, 53500, 54000, 54500, 55000, 55500, 56000, 56500, 57000, 57500, 58000, 58500, 59000, 59500, 60000, 60500, 61000, 61500, 62000, 62500, 63000, 63500, 64000, 64500, 65000, 65500, 66000, 66500, 67000, 67500, 68000, 68500, 69000, 69500, 70000, 70500, 71000, 71500, 72000, 72500, 73000, 73500, 74000, 74500, 75000, 75500, 76000, 76500, 77000, 77500, 78000, 78500, 79000, 79500, 80000, 80500, 81000, 81500, 82000, 82500, 83000, 83500, 84000, 84500, 85000, 85500, 86000, 86500, 87000, 87500, 88000, 88500, 89000, 89500, 90000, 90500, 91000, 91500, 92000, 92500, 93000, 93500, 94000, 94500, 95000, 95500, 96000, 96500, 97000, 97500, 98000, 98500, 99000, 99500, 100000, 100500, 101000, 101500, 102000, 102500, 103000, 103500, 104000, 104500, 105000, 105500, 106000, 106500, 107000, 107500, 108000, 108500, 109000, 109500, 110000, 110500, 111000, 111500, 112000, 112500, 113000, 113500, 114000, 114500, 115000, 115500, 116000, 116500, 117000, 117500, 118000, 118500, 119000, 119500, 120000, 120500, 121000, 121500, 122000, 122500, 123000, 123500, 124000, 124500, 125000, 125500, 126000, 126500, 127000, 127500, 128000, 128500, 129000, 129500, 130000, 130500, 131000, 131500, 132000, 132500, 133000, 133500, 134000, 134500, 135000, 135500, 136000, 136500, 137000, 137500, 138000, 138500, 139000, 139500, 140000, 140500, 141000, 141500, 142000, 142500, 143000, 143500, 144000, 144500, 145000, 145500, 146000, 146500, 147000, 147500, 148000, 148500, 149000, 149500]

      //TODO: invert logic, remove first evaluation
      if (props.forecasts === undefined) {
      } else {
        if (props.vehicle_a.vehicle_fuel_type !== "Electricity"){
          series[0].data = mileage.map((miles)=> (Math.round(miles * props.vehicle_a.vehicle_emissions / 1000)) + kg_vehicle_a)

        } else if (props.vehicle_a.vehicle_fuel_type === "Electricity") {          
          let total_forecast_a = props.forecasts.map(forecast=>forecast.intensity.forecast)
          let summed_forecast_a = total_forecast_a.reduce(reducer)
          let avg_g_mile_a = (Math.round(summed_forecast_a / total_forecast_a.length))

          series[0].data = mileage.map((miles)=> (Math.round(miles * avg_g_mile_a/props.vehicle_a.vehicle_emissions / 1000)) + kg_vehicle_a)
        }
      }

      //TODO: evaluate if needed
      if (props.forecasts === undefined) {
      } else {
        if (props.vehicle_b.vehicle_fuel_type !== "Electricity"){
          series[1].data = mileage.map((miles)=> (Math.round(miles * props.vehicle_b.vehicle_emissions / 1000)) + kg_vehicle_b)

        } else if (props.vehicle_b.vehicle_fuel_type === "Electricity") {
          let total_forecast = props.forecasts.map(forecast=>forecast.intensity.forecast)
          let summed_forecast = total_forecast.reduce(reducer)
          let avg_g_mile = (Math.round(summed_forecast / total_forecast.length))

          series[1].data = mileage.map((miles)=> (Math.round(miles * avg_g_mile/props.vehicle_b.vehicle_emissions / 1000)) + kg_vehicle_b)
        }
      }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default VehicleGraph;