import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <section className="footer" id="footer">
        <div className="container">
          <div className="scroll-top-btn" onClick={scrollToTop}>
            <img src="/assets/images/icons/top-arrow.svg " alt="" />
          </div>
          <div className="footer-wrapper">
            <div className="footer-left">
              <h1>
                Nasir
                <br /> Ahmed
              </h1>
              <a href="mailto:ahmednasir007.an@gmail.com">
                ahmednasir007.an@gmail.com
              </a>
            </div>
            <div className="footer-right">
              <Link href={"https://nasirahmed.design"}>
                <a className="footer-user-title">nasirahmed.design</a>
              </Link>
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
      </section>
    </>
  );
}
export default Footer;
