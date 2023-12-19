"use client"
import Image from "next/image";
import React from "react";
import styles from "./imageGrid.module.css";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggleButton/DarModeToggle";
const ImageGrid = (props) => {
  return (
    <div className={styles.body}>
      <p className={styles.notification}>
      <DarkModeToggle/>
        See also{" "}
        <a
          href="https://codepen.io/tutsplus/full/VwXjxMd"
          target="_blank"
          rel="noreferrer"
        >
          Responsive Image Grid With CSS Grid (Simple Example)
        </a>
      </p>
      <ul className={styles.grid}>
        {/* FIRST BUNCH OF IMAGES */}
        {props?.allRoutes.map((eachRoute) => (
          <li style={{ "--n": 0 }} key={eachRoute.id}>
            <div className={styles.p}>
              <div className={styles.pBrowser}>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
              </div>
              <div className={styles.imgContainer}>
                <Link href={`/${eachRoute.route}`} className={styles.link}>
                  <figure>
                    <Image
                      width={640}
                      height={1138}
                      src={eachRoute.img}
                      alt=""
                      className={styles.pImg}
                    />
                  </figure>
                </Link>

                <div className={styles.imgText}>
                  <h1 className={styles.imgTitle}>{eachRoute.title}</h1>
                </div>
              </div>
            </div>
          </li>
        ))}

        {/* SECOND BUNCH OF IMAGES */}
        {/* <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={1141} src="https://assets.codepen.io/162656/morocco12.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={853} src="https://assets.codepen.io/162656/morocco22.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={648} src="https://assets.codepen.io/162656/morocco13.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={480} src="https://assets.codepen.io/162656/morocco14.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco15.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={962} src="https://assets.codepen.io/162656/morocco16.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco17.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={425} src="https://assets.codepen.io/162656/morocco18.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={853} src="https://assets.codepen.io/162656/morocco21.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco19.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 1 }}>
        <figure>
          <Image width={640} height={426} src="https://assets.codepen.io/162656/morocco20.jpg" alt=""/>
        </figure>
      </li> */}

        {/* THIRD BUNCH OF IMAGES */}
        {/* <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={960} src="https://assets.codepen.io/162656/morocco30.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco23.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco25.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={435} src="https://assets.codepen.io/162656/morocco26.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco28.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={963} src="https://assets.codepen.io/162656/morocco24.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco29.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco32.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={960} src="https://assets.codepen.io/162656/morocco27.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco31.jpg" alt=""/>
        </figure>
      </li>
      <li style={{ "--n": 2 }}>
        <figure>
          <Image width={640} height={427} src="https://assets.codepen.io/162656/morocco33.jpg" alt=""/>
        </figure>
      </li> */}
      </ul>

      <footer className={styles.pageFooter}>
        <span>made by </span>
        <a
          href="https://georgemartsoukos.com/"
          target="_blank"
          rel="noreferrer"
        >
          Rahul Verma
        </a>
      </footer>
    </div>
  );
};

export default ImageGrid;
