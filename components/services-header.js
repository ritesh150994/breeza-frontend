import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./services-header.module.css";
import point from "./../assets/images/point.svg";

const ServicesHeader = ({ className = "" }) => {
  return (
    <div className={[styles.servicesHeader, className].join(" ")}>
      <div className={styles.servicesTitle}>
        <Image
          className={styles.servicesTitleChild}
          src={point}
          loading="lazy"
          width={40}
          height={40}
          alt=""
        />
        <div className={styles.services}>SERVICES</div>
        {/* <div className={styles.servicesTitleInner}>
          <div className={styles.frameChild} />
        </div> */}
      </div>
      {/* <div className={styles.servicesDescription}>
        <h3 className={styles.aQuickIntroContainer}>
          <p className={styles.aQuickIntro}>{`A QUICK INTRO TO YOUR `}</p>
          <p className={styles.aQuickIntro}>SERVICES THAT YOU PROVIDE</p>
        </h3>
      </div> */}
    </div>
  );
};

ServicesHeader.propTypes = {
  className: PropTypes.string,
};

export default ServicesHeader;
