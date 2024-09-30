<template>
  <!-- Footer -->
  <div className="footer">
    <hr>
    <div className="footer-content">
        <div className="footer1">
            <ul>
                <li>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                </li>
            </ul>
        </div> 
        <div className="footer2">
            <ul>
                <li className="oc"><p><b>OUR COMPANY</b></p></li>
                <li><a href="/"><p>Home</p></a></li>
                <li><a href=""><p>About Us</p></a></li>
                <li><a href="#"><p>Frequently Asked Questions</p></a></li>
                <li><a href=""><p>Policy & Privacy</p></a></li>
            </ul>
        </div>
        <div className="footer3">
            <ul>
                <li className="hs"><p><b>QUICK LINKS</b></p></li>
                <li><a href=""><p>Terms and Condition</p></a></li>
                <li><a href=""><p>404</p></a></li>
                <li><a href=""><p>Services</p></a></li>
                <li><a href=""><p>Projects</p></a></li>
            </ul>
        </div>
        <div className="footer4">
            <ul>
                <li className="cu"><p><b>CONTACT</b></p></li>
                <li><a href="mailto:jobs@gmail.com"><p>jobs@gmail.com</p></a></li>
                <li><a href="tel:+000000000"><p>+1(000)-(000)-(0000)</p></a></li>
                <li>
                  <p> Toronto, Ontario</p>
                </li>
                <li><p> Mon-Fri 8am-6pm</p></li>
            </ul>
        </div>
          <!-- Copyright -->
        <div className="footer-bottom">
            <p className="copyright">Copyright &copy; 2024 | AugustusEjike. All Rights Reserved</p>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

/* FOOTER */
.footer{
    display: grid;
    grid-template-columns: 1fr;
}

/* FOOTER CONTENT */
.footer .footer-content{
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1em 1em 1em 1em;
}
.footer .footer-content .footer1, .footer2, .footer3, .footer4{
    padding: 0em 1em 1em 1em;
}
/* FOOTER 1 */
.footer .footer-content .footer1{
    grid-column: 1/-1;
}
.footer .footer-content .footer1 ul li{
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 50px);
}
.footer .footer-content .footer1 ul li a{
    text-decoration: none;
    color: #7F7F7F;
    font-size: 20px;
}
/* FOOTER 2 */
.footer .footer-content .footer2 ul li{
    list-style-type: none;
    padding-top: 1em;
}
.footer .footer-content .footer2 ul .oc{
    color: white;
    font-size: 14px;
}
.footer .footer-content .footer2 ul li a{
    text-decoration: none;
    color: #7F7F7F;
    font-size: 14px;
}
/* FOOTER 3 */
.footer .footer-content .footer3 ul li{
    list-style-type: none;
    padding-top: 1em;
}
.footer .footer-content .footer3 ul .hs{
    color: white;
    font-size: 14px;
}
.footer .footer-content .footer3 ul li a{
    text-decoration: none;
    color: #7F7F7F;
    font-size: 14px;
}
/* FOOTER 4 */
.footer .footer-content .footer4 ul li{
    list-style-type: none;
    padding-top: 1em;
}
.footer .footer-content .footer4 ul .cu p{
    color: black;
    font-size: 14px;
}
.footer .footer-content .footer4 ul li a{
    text-decoration: none;
    color: #7F7F7F;
    font-size: 14px;
}
.footer .footer-content .footer4 ul li p{
    color: #7F7F7F;
    font-size: 14px;
}

/* FOOTER BOTTOM */
.footer .footer-content .footer-bottom{
    grid-column: 1/-1;
    padding: 4em 0em 0em 1em;
}
.footer .footer-content .footer-bottom p{
    color: #7F7F7F;
    font-size: 14px;
}


</style>