

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
                    <a class="navbar-brand">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                    <li class="active"><a href="/inputs">inputs</a></li>
                    <li><a href="/calculator">calculator</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;