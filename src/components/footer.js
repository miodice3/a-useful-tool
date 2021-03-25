import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    let class_settings = this.props.darkMode ? "py-5 bg-dark" : "py-5 bg-light"
    let sub_class_settings = this.props.darkMode ? "m-0 text-center text-white" : "m-0 text-center text-dark"

    return (
      <footer class={class_settings}>
        <div class="container">
          <p class={sub_class_settings}>A Useful Tool 2021</p>
          <div class={sub_class_settings}>
            Questions? <a href="https://www.linkedin.com/in/michael-iodice-0158/">Contact Developer</a>
          </div>
        </div>
      </footer>
    )
  }

}

function mapStateToProps(state){
  return {
      darkMode: state.darkMode.darkMode
  }
}

export default connect(mapStateToProps)(Footer)