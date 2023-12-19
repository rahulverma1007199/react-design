import React from "react";
import styles from "./buttonBBlog.module.css";
import Link from "next/link";

const ButtonBBlog = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default ButtonBBlog;