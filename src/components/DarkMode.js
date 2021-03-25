import React from 'react';
import toggleDarkMode from '../actions/toggleDarkMode'
import { connect } from 'react-redux';

class DarkMode extends React.Component {

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.toggleDarkMode()
    }

    render(){
        let value = this.props.darkMode ? "Turn off Dark Mode" : "Turn on Dark Mode"
        return(
            <form onClick={this.handleSubmit}>
                <input type="button" value={value}></input>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        toggleDarkMode: () => dispatch(toggleDarkMode())
    }  
}

function mapStateToProps(state){
    return {
        darkMode: state.darkMode.darkMode
    }  
}


export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)