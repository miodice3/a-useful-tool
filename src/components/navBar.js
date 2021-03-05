function NavBar() {
        return (
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">An Informative Tool</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/nationalgrid">Britain's National Grid Data</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/vehicles">Compare Vehicle Emissions from US's Federal Database</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }

  export default NavBar;


  