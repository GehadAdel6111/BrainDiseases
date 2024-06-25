document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <div id="footer" class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Detection of Alzheimer's</a></li>
                            <li><a href="#">Brain tumor detection</a></li>
                            <li><a href="#">Brain storke detection</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3 id="about">Modarators</h3>
                        <ul>
                            <li><a href="#">Professor Alaa Al-Ghamri</a></li>
                            <li><a href="#">Engineer Amr Abdel-Al</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Students</h3>
                        <ul>
                            <li><a href="#">Gehad Adel</a></li>
                            <li><a href="#">Batol Hesham</a></li>
                            <li><a href="#">Arwa Yahya</a></li>
                            <li><a href="#">Eman Abdel-Qader</a></li>
                            <li><a href="#">Hassan Diab</a></li>
                            <li><a href="#">Khaled Mohammad</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-12 item social">
                        <a href="#"><i class="icon ion-social-facebook"></i></a>
                        <a href="#"><i class="icon ion-social-twitter"></i></a>
                        <a href="#"><i class="icon ion-social-instagram"></i></a>
                        <a href="#"><i class="icon ion-social-linkedin"></i></a>
                        <p class="copyright">FCI-ZU © 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>`;
    
    // Insert the footer HTML into the document
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
