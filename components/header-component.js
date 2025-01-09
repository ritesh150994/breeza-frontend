import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import styles from "./header-component.module.css";
import logo from "./../assets/images/logo.svg";
import whiteLogo from "./../assets/images/whiteLogo.svg";

const HeaderComponent = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef({}); // To store section offsets for active tab calculation
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 925);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    
      // Determine the active section
      const scrollPosition = window.scrollY + 300; // Adjust for header height
      let currentSection = null; // Default to home if no section matches
    
      Object.keys(sectionsRef.current).forEach((section) => {
        const { top, bottom } = sectionsRef.current[section];
    
        // If we're at the last section, ensure it becomes active at the end
        if (section === "contact" && scrollPosition >= top) {
          currentSection = section;
        } else if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = section;
        }
      });
    
      setActiveTab(currentSection);
    };
    

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Store section positions
    const sections = ["home", "about", "services", "team", "contact"];
    const updatedSections = {};
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        updatedSections[id] = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    });    
    sectionsRef.current = updatedSections;
  }, [isMenuOpen]);

  const handleNavigationClick = (sectionId) => {
    setActiveTab(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 120; // Adjust as needed for your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (isMobile && isMenuOpen) {
      // Close the menu and restore scrolling
      setIsMenuOpen(false);
      document.body.style.overflow = ""; // Reset overflow style
    }
  };

  useEffect(() => {
    // if(!isMobile) return;
    if (isMenuOpen) {
      // Scroll to top when opening the menu
      window.scrollTo(0, 0);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Restore scroll position when closing the menu
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPositionRef.current);
    } else {
      // Save current scroll position and disable scrolling
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
    }
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`${styles.rectangleParent} ${
        isScrolled ? styles.scrolledHeader : ""
      } ${className}`}
    >
      <div className={styles.headerParent}>
      <div className={styles.layer1Wrapper}>
        <Image
          className={styles.layer1Icon}
          src={logo}
          loading="lazy"
          width={381}
          height={54}
          alt="Logo"
        />
      </div>
      {isMobile ? (
        <>
          <button
            className={styles.hamburgerMenu}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className={styles.mobileMenu} id="mobile-menu">
              <div className={styles.mobileMenuHeader}>
                <Image
                  src={whiteLogo}
                  alt="Logo"
                  width={120}
                  height={40}
                  className={styles.mobileMenuLogo}
                />
                <button
                  className={styles.closeButton}
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                >
                  ✕
                </button>
              </div>
              <nav className={styles.mobileNav}>
                {["home", "about", "services", "team", "contact"].map((tab) => (
                  <div
                    key={tab}
                    className={`${styles.mobileNavItem} ${activeTab === tab ? "" : ""
                      }`}
                    onClick={() => handleNavigationClick(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className={styles.navigation}>
          <nav className={styles.copyright}>
            {["home", "about", "services", "team", "contact"].map((tab) => (
              <div
                key={tab}
                className={`${styles[tab]} ${
                  activeTab === tab ? styles.activeTab : ""
                }`}
                onClick={() => handleNavigationClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  className: PropTypes.string,
};

export default HeaderComponent;
