import React, { PureComponent} from 'react';

class MfgWeight extends PureComponent {

  state = {
    mfgWeight: undefined
  }

  mfgWeight = (event) => {
    this.setState({
      mfgWeight: parseInt(event.target.value)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.mfgWeight){
      this.props.updateMfgWeight(this.state.mfgWeight)
    }
  }

  render(){
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
            Input weight of CO2 used to mfg automobile in KG
        </label><br/>
        <input type="text"
        pattern="[0-9]*"
        onChange={this.mfgWeight}
        value={this.state.mfgWeight}
        placeholder="12500"
        /><br/>
        <button type="submit">Submit Weight</button>
        <br/><br/>
      </form>
    )
  }

}

export default MfgWeight