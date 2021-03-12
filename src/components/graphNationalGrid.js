import ReactApexChart from 'react-apexcharts';

function NationalGridGraph(props){

    let series = [{
        name: 'Forecasted',
        data: [0, 0]
      }, {
        name: 'Actual',
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
          text: "Grams CO2 per kW h",
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
      }

    return(
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default NationalGridGraph;