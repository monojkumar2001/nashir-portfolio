import Link from "next/link";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-menu">
        <div className="container">
          <div className="menu-wrapper">
            <div className="navbar-menu-mobile">
              <div className="mobile-logo">
                <Link href="/">
                  <a>
                    <img src="/assets/images/icons/logo.svg" alt="" />
                  </a>
                </Link>
              </div>
              <button className="menu-bar-btn">
                <img src="/assets/images/icons/menu.svg" alt="" />
              </button>
            </div>
            <div className="navbar-side">
              <button className="menu-close-btn">
                <img src="/assets/images/icons/close.svg" alt="" />
              </button>
              <div className="mobile-logo">
                <Link href="/">
                  <a>
                    <img src="/assets/images/icons/logo.svg" alt="" />
                  </a>
                </Link>
              </div>
              <div className="menu-user-name">
                <h2>Nasir Ahmed</h2>
                <span>Product Designer</span>
              </div>

              <div className="navbar-list-items">
                <div className="menu-user-name menu-user">
                  <h2>Menu</h2>
                </div>
                <ul className="nav-link-list">
                  <li>
                    <a href="#about">About Nasir</a>
                  </li>
                  <li>
                    <a href="#courses">Courses</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                  <li>
                    <a href="#work_process">Work Process</a>
                  </li>
                </ul>
              </div>
              <div className="nav-file-list">
                <ul>
                  <li>
                    <a href="#example.pdf">
                      <img src="/assets/images/icons/file.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/mail.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-social-media">
                <h4>
                nasir-ahmed03
                </h4>
                <ul className="social-media-list">
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/linkedin1.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/medium.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/behance.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/instragram.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
