import Image from "next/image";
import HeaderComponent from "../components/header-component";
import About from "../components/about";
import ServicesHeader from "../components/services-header";
import ServiceList from "../components/service-list";
import ContactUs from "../components/contact-us";
import OurTeam from "../components/our-team";
import styles from "./index.module.css";
import dots from "./../assets/images/dot.svg";
import home from "./../assets/images/home.jpg";
import whiteLogo from "./../assets/images/whiteLogo.svg";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HeaderComponent />
      <section id="home" className={styles.frameParent}>
        <Image
          className={styles.frameChild}
          src={dots}
          width={1920}
          height={1112}
          alt=""
        />
        <h1 className={styles.weWorkClosely}>
          We work closely with our clients to offer practical,
          strategic advice, then build and lead strong teams to maximise
          success.
        </h1>
        <Image
          className={styles.frameItem}
          src={home}
          loading="lazy"
          width={1594}
          height={600}
          alt=""
        />
      </section>
      <About />
      <div className={styles.rectangle}>
       <section id="services" className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <div className={styles.container}>
          <div className={styles.innerService}>
            <ServicesHeader />
            <ServiceList />
          </div>
        </div>
      </section>
      </div>
      {/* <div className={styles.homepageChild} />
      <div className={styles.homepageItem} /> */}
      <OurTeam />
      <ContactUs />
      <div className={styles.footer}>
      <section className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.allRightsReservedBreezaCoWrapper}>
          <div className={styles.allRightsReserved}>
            © 2025 All Rights Reserved. Breeza Consulting Pte. Ltd.
          </div>
        </div>
      </section>
      </div>

    </div>
  );
};

export default Homepage;
