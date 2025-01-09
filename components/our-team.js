import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./our-team.module.css";
import point from "./../assets/images/point.svg";

const OurTeam = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Mobile 
    const handleTabResize = () => setIsTab(window.innerWidth <= 1023);

    // Initial check and resize listener
    handleResize();
    handleTabResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleTabResize);

    // Cleanup on unmount
    return () =>{
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleTabResize);
    }
  }, []);

  return (
    <div className="fullTeam">
      {/* {isMobile && <div className={styles.theMoneyIsContainer}>
        {["The money?", "Is it what our parents wanted?", "To provide for those we care about?", "Is it what we’re good at?", "Is it a passion?"].map((text, index) => (
          <p key={index} className={styles.theMoney}>
            <b>{text}</b>
          </p>
        ))}
        <p className={styles.whateverTheReason}>
          Whatever the reason, we all want to focus on what we are driven to do.
          I’m driven to lead teams with honesty and transparency, fostering an
          environment where everyone feels empowered to bring their best to
          realize the team’s objectives. Most importantly, I’m driven to do
          what I do, so that you can focus on what you are driven to do.
        </p>
      </div>} */}

      <section id="team" className={`${styles.teamContentParent} ${className}`}>
        <div className={styles.teamContentWrapper}>
          <div className={styles.teamContent}>
            <Image
              className={styles.teamContentChild}
              src={point}
              loading="lazy"
              width={40}
              height={40}
              alt="Point"
            />
            <div className={styles.ourTeam}>Why Breeza</div>
          </div>
        </div>

        <div className={isMobile ? styles.teamMemberMobile : styles.teamMember}>
          <div className={styles.memberDetails}>
            <div className={styles.memberInfo}>
              <div className={styles.memberQuestion}>
                <div className={styles.whyDoesEach}>Why does each of us do what we do?</div>
                {<div className={styles.theMoneyIsContainer}>
                  {["The money?", "Is it what our parents wanted?", "To provide for those we care about?", "Is it what we’re good at?", "Is it a passion?"].map((text, index) => (
                    <p key={index} className={styles.theMoney}>
                      <b>{text}</b>
                    </p>
                  ))}
                  <p className={styles.whateverTheReason}>
                    Whatever the reason, we all want to focus on what we are driven to do.
                    I’m driven to lead teams with honesty and transparency, fostering an
                    environment where everyone feels empowered to bring their best to
                    realize the team’s objectives. Most importantly, I’m driven to do
                    what I do, so that you can focus on what you are driven to do.
                  </p>
                </div>}
              </div>
            </div>
          </div>

          <div className={styles.projectComparison}>
            <div className={styles.comparisonContent}>
              <div className={styles.soWhatsThe}>So, what’s the difference between a Project Manager and a Project Leader?</div>
              <div className={styles.overTheLast}>
                Over the last 20+ years, I’ve had the privilege of working with
                incredibly talented, dedicated and passionate individuals across
                sectors, in different disciplines and geographies. Every one of
                them taught me the importance of valuing people. It’s easy to
                get lost in the endless to do lists, tight deadlines and
                ambitious targets, Which makes it even more important that we
                remember everyone that we interact with is a person with,
                not only their strengths and weaknesses, but with their own
                hopes, ambitions and drivers; their own concerns and
                vulnerabilities. Respecting and supporting these qualities in
                each other, strengthens our resolve as a collective to work
                towards common goals - developing from a culture where “I
                thrive”, to a team culture where “We thrive”.
              </div>
            </div>
          </div>
        </div>

        {/* {(isMobile || isTab) && <div className={styles.memberBio}>
                <div className={styles.memberProfile}>
                  <div className={styles.memberName}>
                    <div className={styles.charmaineKnower}>Charmaine Knower</div>
                    <div className={styles.director}>Director</div>
                  </div>
                </div>
                {isMobile || isTab ? (
                  <div className={styles.horizontalLine} />
                ) : (
                  <div className={styles.memberBioChild} />
                )}
                <div className={styles.memberLink}>
                  <div className={styles.linkedin}>LINKEDIN</div>
                </div>
              </div>} */}
         
       {<div className={styles.horizontalLine} />}
       {<div className={styles.memberBio}>
          <div className={styles.memberProfile}>
            <div className={styles.memberName}>
              <div className={styles.charmaineKnower}>Charmaine Knower</div>
              <div className={styles.director}>Director</div>
            </div>
          </div>
          {/* <div className={styles.memberBioChild} /> */}
          <div className={styles.memberLink}>
            <a
              href="https://www.linkedin.com/in/charmaine-knower/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              LINKEDIN
            </a>
          </div>
        </div>}
      </section>
    </div>
  );
};

OurTeam.propTypes = {
  className: PropTypes.string,
};

export default OurTeam;
