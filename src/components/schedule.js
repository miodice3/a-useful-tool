

function Schedule(props) {
    return (
  
        <div>
          from: {props.forecast.from} <br />
          to: {props.forecast.to} <br />

          forecasted {props.forecast.intensity.forecast} grams / kwh: , index: {props.forecast.intensity.index}<br />
          actual: {props.forecast.intensity.actual}<br /><br />
        </div>
    );
  }
  
  export default Schedule;