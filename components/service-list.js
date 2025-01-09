import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./service-list.module.css";

const ServiceList = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    // Check if the viewport is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set your desired breakpoint
    };

    const handleResizeMob = () => {
      setIsSmallMobile(window.innerWidth <= 430); // Set to 430px
    };

    const handleTabResize = () => {
      setIsTab(window.innerWidth <= 1023); // Mobile breakpoint
    };

    const handleCustomResize = () => {
      setIsCustom(window.innerWidth <= 1090); // Mobile breakpoint
    };


    // Initialize on component mount
    handleResize();
    handleResizeMob();
    handleTabResize();
    handleCustomResize

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeMob);
    window.addEventListener("resize", handleTabResize);
    window.addEventListener("resize", handleCustomResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeMob);
      window.removeEventListener("resize", handleTabResize);
      window.removeEventListener("resize", handleCustomResize);
    };
  }, []);

  return (
    <div className={[styles.serviceList, className].join(" ")}>
      <div className={styles.serviceItems}>
        {/* {!isTab && (
          <div className={styles.upperChild}>
            <div className={styles.segment}></div>
            <div className={styles.segment}></div>
            <div className={styles.segment}></div>
          </div>
        )} */}
        {isTab && <div className={styles.horizontalLine}></div>} {/* Line only for mobile */}
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.strategicProjectPlanningParent}>
          <div className={styles.customLine}></div>
            <div className={styles.strategicProjectPlanning}>
              Strategic Project Planning
            </div>
            <div className={styles.reviewOfPortfoliositesContainer}>
              <ul className={styles.reviewOfPortfoliositesD}>
                <li className={styles.reviewOfPortfoliosites}>
                  Review of portfolio/site(s).
                </li>
                <li className={styles.reviewOfPortfoliosites}>
                  Due diligence review of site(s) against { <br />} requirements.
                </li>
                <li className={styles.reviewOfPortfoliosites}>Capex spend planning.</li>
                <li className={styles.reviewOfPortfoliosites}>
                  Impact on real estate operations.
                </li>
                <li className={styles.reviewOfPortfoliosites}>
                  Scope definition & development.
                </li>
                <li className={styles.reviewOfPortfoliosites}>
                  Timeline strategy and phasing.
                </li>
                <li className={styles.reviewOfPortfoliosites}>
                  Procurement Strategy.
                </li>
              </ul>
            </div>
            <div className={styles.customLine}></div>
          </div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.clientRepresentativeParent}>
            <div className={styles.customLine}></div>
            <div className={styles.clientRepresentative}>
              Client Representative
            </div>
            <div className={styles.stakeholderManagementProcurContainer}>
              <ul className={styles.reviewOfPortfoliositesD}>
                <li className={styles.reviewOfPortfoliosites}>
                  Stakeholder management.
                </li>
                <li className={styles.reviewOfPortfoliosites}>
                  Procurement & contracts management.
                </li>
                <li className={styles.reviewOfPortfoliosites}>Design management.</li>
              </ul>
            </div>
            <div className={styles.customLine}></div>
          </div>
        </div>
        <div className={styles.horizontalLine}></div> {/* Line between second and third sections */}
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.projectLeadershipParent}>
            <div className={styles.customLine}></div>
            <div className={styles.projectLeadership}>Project Leadership</div>
            <div className={styles.teamLeadershipStrategicContainer}>
              <ul className={styles.reviewOfPortfoliositesD}>
                <li className={styles.reviewOfPortfoliosites}>Team leadership.</li>
                <li className={styles.reviewOfPortfoliosites}>Strategic guidance.</li>
                <li className={styles.reviewOfPortfoliosites}>Unifying teams.</li>
                <li className={styles.reviewOfPortfoliosites}>Collaboration.</li>
                <li className={styles.reviewOfPortfoliosites}>
                  Coordinated efforts.
                </li>
              </ul>
            </div>
            <div className={styles.customLine}></div>
          </div>
        </div>
        <div className={styles.horizontalLine}></div> {/* Line below the last section */}

      </div>
      {/* {!isTab && (
        <div className={styles.bottomChild}>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
          <div className={styles.segment}></div>
        </div>
      )} */}
      {/* <div className={styles.frameDiv}>
        <div className={styles.lineDiv} />
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.lineDiv} />
      </div> */}
    </div>
  );
};

ServiceList.propTypes = {
  className: PropTypes.string,
};

export default ServiceList;
