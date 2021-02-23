

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <div className="navbar-brand">Carbon Intensity Forecaster</div>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="/inputs">inputs</a></li>
                    <li><a href="/calculator">calculator</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;