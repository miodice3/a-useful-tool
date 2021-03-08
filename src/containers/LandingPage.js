import React, { PureComponent } from 'react';
import powerplant from '../images/powerplant.png';
import testcycle from '../images/testcycle.png';

class LandingPage extends PureComponent {

       render() {

        return (
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                {/* <img class="d-block w-100" src="https://www.renk-ag.com/fileadmin/Branchen_und_Kompetenzen/Branchen/Energieerzeugung/Kraftwerk/renk-branche-kraftwerk-anlage-teaser.jpg" alt="First slide"/> */}
                                <img class="d-block w-100" src={powerplant} alt="First slide"/>
                                <div class="carousel-caption d-none d-md-block">
                                <h5><a style={{textDecoration: "none", color: 'white'}} href="/nationalgrid">Realtime Emissions</a></h5>
                                <p>Using data from UK's National Power Grid</p>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                {/* <img class="d-block w-100" src="https://img.drivemag.net/media/default/0001/87/wltp-nedc-test-cycles-front-3398-default-large.jpeg " alt="Second slide"/> */}
                                <img class="d-block w-100" src={testcycle} alt="Second slide"/>
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