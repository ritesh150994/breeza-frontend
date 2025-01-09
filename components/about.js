import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./about.module.css";
import about1 from "./../assets/images/about1.jpg";
import point from "./../assets/images/point.svg";
import about2 from "./../assets/images/about2.jpg";

const About = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    const handleTabResize = () => {
      setIsTab(window.innerWidth <= 1023); // Tab breakpoint
    };

    handleResize(); // Check on initial render
    handleTabResize();
    window.addEventListener("resize", handleResize); // Listen for screen resizes
    window.addEventListener("resize", handleTabResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleTabResize);
    };
  }, []);

  return (
    <section
      id="about"
      className={`${styles.content} ${className} ${isMobile ? styles.mobileContent : ""
        }`}
    >
      <div
        className={`${styles.aboutHeaderParent} ${isMobile ? styles.mobileHeaderParent : ""
          }`}
      >
        <div className={styles.aboutHeader}>
          <div
            className={`${styles.aboutTitle} ${isMobile ? styles.mobileAboutTitle : ""
              }`}
          >
            <div className={styles.aboutContent}>
              <Image
                className={styles.aboutContentChild}
                src={point}
                loading="lazy"
                width={isMobile ? 30 : 40}
                height={isMobile ? 30 : 40}
                alt=""
              />
              <div className={styles.about}>ABOUT</div>
            </div>
            <h3
              className={`${styles.visionMotivationSuccessContainer} ${isMobile ? styles.mobileVision : ""
                }`}
            >
              {isMobile || isTab ? (
                <span className={isMobile ? styles.mobileText : styles.tabText}>VISION. MOTIVATION. SUCCESS</span>
              ) : (
                <>
                  <p className={styles.vision}>VISION</p>
                  <p className={styles.vision}>MOTIVATION</p>
                  <p className={styles.vision}>SUCCESS</p>
                </>
              )}
            </h3>

          </div>
          <Image
            className={styles.imageIcon}
            src={about1}
            loading="lazy"
            width={isMobile ? 500 : 982}
            height={isMobile ? 300 : 437}
            alt=""
          />
        </div>
        <div className={styles.vision1}>
          <div className={styles.visionContent}>
            {!isMobile && !isTab && (
              <div
              className={`${styles.imageParent} ${isMobile || isTab ? styles.mobileImageParent : ""}`}
            >
              <Image
                className={styles.imageIcon1}
                src={about2}
                width={isMobile || isTab ? 500 : 620}
                height={isMobile || isTab ? 300 : 438}
                alt=""
              />
              <div className={styles.frameChild} />
            </div>
            )}
            <div
              className={`${styles.theSuccessOf} ${isMobile || isTab ? styles.mobileSuccessText : ""
                }`}
            >
              {isMobile || isTab ? (
                <>
                  Whether ground up, fit out, corporate, hospitality or retail, each
                  real estate project starts with a Vision. It is that Vision that
                  drives success factors. At Breeza Consulting we take the time to
                  understand your Vision, and provide strategic guidance to achieve
                  what success means to you.
                </>
              ) : (
                <>
                  The success of every project is due to the combined efforts of
                  each member of the team. And teams are most successful when they
                  are motivated to work as a coordinated and collaborative unit.
                  Breeza Consulting will help you build and lead a high performing
                  team to successfully realise your Vision.
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fitOut}>
        <div className={styles.whetherGroundUpContainer}>
        {isTab && (
              <div
              className={`${styles.imageParent} ${isMobile || isTab ? styles.mobileImageParent : ""
                }`}
            >
              <Image
                className={styles.imageIcon1}
                src={about2}
                width={isMobile || isTab ? 500 : 620}
                height={isMobile || isTab? 300 : 438}
                alt=""
              />
              <div className={styles.frameChild} />
            </div>
            )}
          <p className={styles.vision}>
          {isMobile || isTab ? (
              <>
                The success of every project is due to the combined efforts of
                each member of the team. And teams are most successful when they
                are motivated to work as a coordinated and collaborative unit.
                Breeza Consulting will help you build and lead a high performing
                team to successfully realise your Vision.
              </>
            ) : (
              <>
                Whether ground up, fit out, corporate, hospitality or retail, each
                real estate project starts with a Vision. It is that Vision that
                drives success factors. At Breeza Consulting we take the time to
                understand your Vision, and provide strategic guidance to achieve
                what success means to you.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
