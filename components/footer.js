import React from "react";
import styles from "../styles/footer.module.css"; // Adjust the path if necessary

function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className="text-black">Owen Weis</h1>
      <h1 className="text-black">A photo away from your next event</h1>
      <p className={styles.footerMessage}>
        Website created by @David-Rel website, buy me a coffee
      </p>{" "}
    </div>
  );
}

export default Footer;
