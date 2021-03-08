import React, { PureComponent } from 'react';
import powerplant from '../images/powerplant.png';
import testcycle from '../images/testcycle.png';

class LandingPage extends PureComponent {

    render() {

        return (
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-interval="false" style={{background: "white", transitionDuration: ".6"}}>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style={{opacity: ".65"}} class="d-block w-100" src={powerplant} alt="First slide"/>
                            <div class="carousel-caption d-none d-md-block">
                            <h5><a style={{textDecoration: "none", color: 'white'}} href="/nationalgrid">Realtime Emissions</a></h5>
                            <p style={{color: 'white'}}>Using data from UK's National Power Grid</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img style={{opacity: ".65"}} class="d-block w-100" src={testcycle} alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block">
                            <h5><a style={{textDecoration: "none", color: 'white'}} href="/vehicles">US Federal Emissions</a></h5>
                            <p style={{color: 'white'}}>Select any two cars to compare emissions data</p>
                            </div>
                        </div>
                    </div>

                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
            </div>

        )
    }
}

export default LandingPage