import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <i className="fa-light fa-align-left"></i>
      <h1>Notes</h1>
    </div>
  );
};

export default Navbar;
