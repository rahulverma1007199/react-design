import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/utils/blogDataList";

const Blog = async () => {
  return (
    <div className={styles.body}>
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/aBlog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Blog;