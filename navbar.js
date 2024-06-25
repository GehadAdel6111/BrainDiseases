document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top z-3">
        <div class="container-fluid">
            <div>
                <img src="./Images/artificial-intelligence.png" alt>
                <a class="navbar-brand" href="./index.html">Brain</a>
            </div>
            <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"
                            href="#">Why brain</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="scrollToTargetSection2()">About</a>
                    </li>
                </ul>
                <div class="d-flex" role="search">
                    <a href="./Login.html" target="_blank" class="login"><button class="btn-outline-success"
                            type="button"><b></b></button></a>
                </div>
            </div>
        </div>
    </nav>`;
    
    // Insert the navbar HTML into the document
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
