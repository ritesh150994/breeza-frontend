import Image from "next/image";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./contact-us.module.css";
import point from "./../assets/images/point.svg";
import contact from "./../assets/images/contact.jpg";

const ContactUs = ({ className = "" }) => {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.rectangle}>
    <section id="contact" className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.innerContactUs}>
      <div className={styles.frameChild} />
      <div className={styles.contactContent}>
        <Image
          className={styles.contactContentChild}
          src={point}
          loading="lazy"
          width={40}
          height={40}
          alt=""
        />
        <div className={styles.contactTitle}>
          <div className={styles.contactUs}>CONTACT US</div>
        </div>
      </div>
      <div className={styles.contactImage}>
        {/* Only show image if window width is greater than 925px */}
        {windowWidth > 925 && (
          <Image
            className={styles.imageIcon}
            src={contact}
            loading="lazy"
            width={782}
            height={437}
            alt=""
          />
        )}
        <div className={styles.contactFooter}>
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <div className={styles.basedInSingapore}>
                Based in Singapore, servicing clients worldwide.
              </div>
              <div className={styles.getInTouch}>
                Get in touch to see how we can collaborate
              </div>
            </div>
                <div className={styles.email}>
                  <div className={styles.hellobreezaconsultingcom}>
                    <a
                      href="mailto:hello@breeza-consulting.com?subject=Hello&body=This is the email body."
                      className={styles.hellobreezaconsultingcom}
                    >
                      hello@breeza-consulting.com
                    </a>
                  </div>

              <div className={styles.hellobreezaconsultingcom}>
                +65 9617 5723
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
