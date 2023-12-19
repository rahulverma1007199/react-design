import React from 'react'
import styles from "./page.module.css";

const MediumSingle = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
  <div className={styles.meta}> 
    <div className={styles.image}></div>
    <div className={styles.info}> 
      <h1 className={styles.h1}>On Web Typography</h1>
      <p className={styles.subtitle}>`Tale of a dev obsessed with readability on the web`</p>
      <div className={styles.author}>
        <div className={styles.authorImage}></div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}><a className={styles.a} href="https://codepen.io/lucagez">Luca Gesmundo</a></div>
          <div className={styles.authorSub}>Nov 7 <span className={styles.medianDivider}>·</span> 5 min read</div>
        </div>
      </div>
    </div>
    {/* git */}
  </div>
  <main className={styles.article}>
    <p className={styles.p}>
      <span className={styles.firstLetter}>W</span>eb Typography obsessed me. As many others, 
      I fell in the trap of optimizing legibility. Definitly not an easy task.<br/>Among all the contenders for the best reading experience on the Web, a name is 
      always present and noteworthy: <strong>Medium.com</strong> .
    </p>
    <p className={styles.p}>
      Looking for the arcane secrets that regulates good legibility, I immediately realized 
      that I needed to follow in the footsteps of the masters. So I started dissecting the rules that
      makes <strong>Medium</strong> typography, well, great.
    </p>
    <p className={styles.p}>There were long hours of <strong>tremendous effort</strong>, days and days of <strong>prolonged pains</strong>...</p>
    <blockquote className={styles.blockquote}>Now I want to share with you the results of those long hours 🦋</blockquote>
    <h2 className={styles.h2}>An unexpected journey</h2>
    <p className={styles.p}>
      <span className={styles.firstLetter}>C</span>omes out that nothing is better than a big first letter to super-charge your style.
      Rules are simples. A big letter that spans exactly two rows. Play with <code className={styles.code}>line-height</code> to get it right.
    </p>
    <h2 className={styles.h2}>The hero</h2>
    <p className={styles.p}>We all know who the leader is.<br/>When designing a website you have to take into account fonts for three sectors: the <strong>content</strong>, the <strong>UI</strong>, the <strong>brand</strong>.<br/>Specifically I found that the best free alternatives <i>(Google Fonts)</i> to the handcrafted fonts that <strong>Medium</strong> uses are respectively <span className={styles.highlighted}>Lora</span>,
      <span className={styles.highlighted}>Montserrat</span> and <span className={styles.highlighted}>Playfair Display</span>. <br/>I discovered with delight that the last one mimics almost perfectly the effect created especially for <code>blockquote</code>.
    </p>
    <h2 className={styles.h2}>Content font</h2>
    <p className={styles.p}>
       The content font should be a serif one, to gently bring your eyes from one letter to the other with
      the lowest amount of effort.<br/><code className={styles.code}>line-height</code> and <code className={styles.code}>letter-spacing</code> are vital here. Play with those parameters to make the most out of your
      font of choice. However at <strong>Medium</strong> youll find almost an empty line of space in the middle of two lines of text (<code className={styles.code}>line-height: 1.58;</code>).
      While the space between the charachters is kept a little bit on the negative side (<code className={styles.code}>letter-spacing: -0.03;</code>) to make words feel more compacts.
    </p>
    <h2 className={styles.h2}>Brand font</h2>
    <p className={styles.p}>
       The purpose of this font is to enforce the presence of our brand during the navigation experience.
      We can use it for titles and, here and there, for some minutiae.
    </p>
    <blockquote className={styles.blockquote}>Blockquotes, for example 🤫</blockquote>
    <h2 className={styles.h2}>UI font</h2>
    <p className={styles.p}>
       The font used for all the UI elements is preferably a sans-serif one. It should create contrast with the content font.
      Its color could be a little bit lighter than the one used for the main content. <br/>It needs to be readable given the background-color of your page 
      but not distracting from the main purpose of the page. <span className={styles.highlighted}>Reading!</span><br/>You can use it also for <code className={styles.code}>h2</code> making the titles for your paragraphs. Here the color should be the same as the one used for the main title.
    </p>
    <h2 className={styles.h2}><span className={styles.highlighted}>The highlight</span></h2>
    <p className={styles.p}>To highlight a word or phrase you can wrap them in a <code className={styles.code}>span</code> element and <span className={styles.highlighted}>set the background to a color that reminds of your brand color identity</span>.</p>
    <h1 className={styles.h1}>Every Title</h1>
    <p className={`${styles.subtitle} ${styles.p}`}>`Needs a subtitle`</p>
    <p className={styles.p}>Here we find <code className={styles.code}>rgba(0, 0, 0, 0.54)</code> to give meaningful informations without grabbing the attention that the title, main charachter, deserves.</p>
    <h2 className={styles.h2}>The length</h2>
    <p className={`${styles.lineLength} ${styles.p}`}>
       The length of a line of text should never be longer than <code className={styles.code}>740px</code>. So our eyes are not forced to run from left to right on the page. </p>
    <h2 className={styles.h2}>The color</h2>
    <p className={styles.p}>
       The text color should be <code className={styles.code}>rgba(0, 0, 0, 0.84)</code> on a <code className={styles.code}>rgba(255, 255, 255, 1)</code> background to ensure the best contrast possible.</p>
    <h2 className={styles.h2}>Conclusion</h2>
    <p className={styles.p}>As always, the strict first rule of design is that there are no strict rules.<br/>But, if you are in trouble... </p>
    <blockquote className={styles.blockquote}>Use Medium.css ✍️</blockquote><br/><br/>
    <p className={styles.p}>Let me know what are your toughts about Web Typography, I am eager to hear from you!</p>
  </main>
</div>
    </div>
  )
}

export default MediumSingle