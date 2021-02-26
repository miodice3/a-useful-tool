

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <div className="navbar-brand"><a href="/">An Informative Tool</a></div>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="/nationalgrid">UK's Nationl Grid Forecast</a></li>
                    <li className="active"><a href="/vehicleselection">Vehicle Selection</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;