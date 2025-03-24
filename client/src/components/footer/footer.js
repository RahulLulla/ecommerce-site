import React from "react";
import styles from "./Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const policyDetails = ["Terms Policy", "Privacy Policy", "Accessibility"];
  const contactDetails = ["Services", "Contact Us", "About Us", "FAQ"];
  const iconDetails = [
    LinkedInIcon,
    InstagramIcon,
    TwitterIcon,
    FacebookOutlinedIcon,
    YouTubeIcon,
    PinterestIcon,
  ];
  const icon_style = {
    backgroundColor: "white",
    borderRadius: "50%",
    width: 23,
    height: 23,
    padding: "1.2px",
  };

  const iconElements = iconDetails.map((Icon, index) => (
    <Icon
      sx={icon_style}
      key={"icon_" + index}
      className={styles.social_icon}
    />
  ));

  const footerElements = (details) =>
    details.map((detail) => (
      <li key={detail} className={styles.footer_element}>
        <a href="#" className={styles.footer_link}>
          {detail}
        </a>
      </li>
    ));

  return (
    <div id="footer" className={styles.footer_content}>
      <div className={styles.footer_box}>
        <div className={styles.footer_container}>
          <ul className={styles.footer_item}>
            {footerElements(policyDetails)}
          </ul>
          <ul className={styles.footer_item}>
            {footerElements(contactDetails)}
          </ul>
          <ul className={styles.footer_item}>
            <li className={styles.footer_element}>Sign up to our newsletter</li>
            <li className={styles.footer_element}>Follow us on</li>
            <li className={styles.footer_element}>{iconElements}</li>
          </ul>
        </div>

        <div className={styles.copyright_content}>
          <h1 className={styles.footer_font}>
            @ Celestime Co. All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
