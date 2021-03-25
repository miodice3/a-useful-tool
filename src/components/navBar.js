import React, {Component} from 'react';
import DarkMode from './DarkMode';
import { connect } from 'react-redux';

class NavBar extends Component{

    render(){
        let class_settings= this.props.darkMode ? "navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar fixed-top navbar-expand-lg navbar-light bg-light fixed-top"
        
        return (
            <nav className={class_settings}>
            <div class="container">
                <a class="navbar-brand" href="/">A Useful Tool</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/nationalgrid">Britain's National Grid Data</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/vehicles">Compare Vehicle Emissions from US's Federal Database</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/pev">Ebikes and PEVs Estimates</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/pev"><DarkMode /></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    
    }
}

function mapStateToProps(state){
    return {
        darkMode: state.darkMode.darkMode
    }  
}


export default connect(mapStateToProps)(NavBar);