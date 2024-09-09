import Link from "next/link";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const handleMenuToggle = () => {
    setActive(!active);
  };
  const handleMenuClose = () => {
    setActive(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/images/nasir-ahmed.pdf"; // Specify the correct path to your PDF file
    link.download = "nasir-ahmed.pdf"; // Set the name of the downloaded file
    link.click();
  };
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
              <button className="menu-bar-btn" onClick={handleMenuToggle}>
                <img src="/assets/images/icons/menu.svg" alt="" />
              </button>
            </div>
            <div className={`navbar-side ${active ? "active" : ""}`}>
              <div className="navbar-side-item">
                <button className="menu-close-btn" onClick={handleMenuClose}>
                  <img src="/assets/images/icons/close.svg" alt="" />
                </button>
                <div className="mobile-logo mobile-logo-2">
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
                      <a href="#about" onClick={handleMenuClose}>
                        About Nasir
                      </a>
                    </li>
                    <li>
                      <a href="#courses" onClick={handleMenuClose}>
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="#experience" onClick={handleMenuClose}>
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="#project" onClick={handleMenuClose}>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#work_process" onClick={handleMenuClose}>
                        Work Process
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-file-list">
                  <ul>
                    <li>
                      <a onClick={handleDownload}>
                        <img src="/assets/images/icons/file.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:ahmednasir007.an@gmail.com">
                      <img src="/assets/images/icons/mail.svg" alt="" />
                      </a>
               
                    </li>
                  </ul>
                </div>
                <div className="nav-social-media">
                  <h4>nasir-ahmed03</h4>
                  <ul className="social-media-list">
                    <li>
                      <a href="https://www.linkedin.com/in/nasir-ahmed03/">
                        <img src="/assets/images/icons/linkedin1.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@nasir-ahmed03">
                        <img src="/assets/images/icons/medium.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/nasir-ahmed03">
                        <img src="/assets/images/icons/behance.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/nasir_ahmed03">
                        <img src="/assets/images/icons/instragram.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
