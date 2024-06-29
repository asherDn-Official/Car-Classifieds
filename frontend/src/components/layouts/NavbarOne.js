import React from "react";

export default function Header() {
  return (
    <div>
      {/* <!------------------------------------------------Desktop Verison--------------------------------------------> */}
      <div className="newNavbarswidthflex">
        <div className="firstnavbarwidthdiv">
          <div className="fordesktop">
            {/* <!----------------------------------First Navbar-------------------------------> */}
            <div className="NavbARDIV">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
              </label>
              <label className="NavbarLOGO">
                <img src="./images/Group 1.png" alt="" />
              </label>
              <ul>
                <li>
                  <a href="https://revnitro.com/">Home</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Blog</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Forum</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Course</a>
                </li>
                <li>
                  <a href="#">Classified</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
            {/* <!------------------------------First Navbar--------------------------->
          <!------------------------------Second Navbar---------------------------> */}
            <div className="secondnavbar">
              <div className="secondnavbarflexcontents">
                <div>
                  <a className="itemsinsecond" href="">
                    About
                  </a>
                </div>
                <div>
                  <a className="itemsinsecond" href="">
                    Sell your bike
                  </a>
                </div>
                <div>
                  <a className="itemsinsecond" href="">
                    Buy used bike
                  </a>
                </div>
                <div>
                  <a className="itemsinsecond" href="">
                    My Wishlist
                  </a>
                </div>
                <div>
                  <a className="itemsinsecond" href="">
                    My Account
                  </a>
                </div>
              </div>
            </div>
            {/* <!------------------------------Second Navbar---------------------------> */}
          </div>
        </div>
      </div>
      {/* <!------------------------------------------------Desktop Verison-------------------------------------------->

    <!------------------------------------------------Mobile Verison-------------------------------------------->
    <!------------------------------------------First Navbar----------------------------------------------------> */}
      <div className="mobilefelesvccdwidth">
        <div className="mobilevsesiosdnwidthhdiv">
          <div className="formobile">
            <div className="navbarDivsa">
              <div className="dropdown">
                <div className="dropdownflexconcept">
                  <div>
                    <button className="dropbtn" onclick="myFunctionsasas()">
                      <span className="namechangingsection">Home</span> &nbsp;
                      <i className="fa fa-caret-down"></i>
                    </button>
                  </div>
                  <div>
                    <img src="./images/Group 64.png" alt="" />
                  </div>
                </div>

                <div className="dropdown-content" id="myDropdown">
                  <a href="https://revnitro.com/">Blog</a>
                  <a href="https://revnitro.com/">Forum</a>
                  <a href="https://revnitro.com/">Course</a>
                  <a href="https://revnitro.com/">Classified</a>
                  <a href="https://revnitro.com/">Shop</a>
                  <a href="https://revnitro.com/">Team</a>
                </div>
              </div>
            </div>

            {/* <!------------------------------------------First Navbar----------------------------------------------------> */}

            {/* <!------------------------------------------Second Navbar----------------------------------------------------> */}
            {/* <!-- Simulate a smartphone / tablet --> */}
            <div className="mobile-container">
              {/* <!-- Top Navigation Menu --> */}
              <div className="topnav">
                <a href="#home" className="active">
                  &nbsp;
                </a>
                <div id="myLinks">
                  <a className="borrderbottomline" href="#news">
                    About
                  </a>
                  <a className="borrderbottomline" href="#contact">
                    Sell your bike
                  </a>
                  <a className="borrderbottomline" href="#about">
                    Buy used bike
                  </a>
                  <a className="borrderbottomline" href="#news">
                    My Wishlist
                  </a>
                  <a className="borrderbottomline" href="#contact">
                    My Account
                  </a>
                </div>
                <a
                  href="#"
                  className="icon"
                  onclick="myFunction12()"
                >
                  <i className="fa fa-bars"></i>
                </a>
              </div>

              {/* <!-- End smartphone / tablet look --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
