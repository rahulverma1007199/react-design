import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { data } from "@/utils/blogDataList";



export async function generateMetadata({ params }) {

    const resultData = data[params.id - 1];

  return {
    title: resultData.title,
    description: resultData.desc,
  };
}

const ABlogSingle = async ({ params }) => {
  const resultData = data[params.id - 1];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{resultData.title}</h1>
          <p className={styles.desc}>
            {resultData.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={resultData.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{resultData.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={resultData.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {resultData.content}
        </p>
      </div>
    </div>
  );
};

export default ABlogSingle;
