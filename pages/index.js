import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <div id="background"></div>
      <Head>
        <title>English-speaking Events in Cordoba, Argentina - English Talk</title>
        <meta name="description" content="English Talk is a space where foreigners and locals can meet to speak English and socialise in Cordoba, Argentina. Never miss our events, follow us on Instagram!" />
        <link rel="icon" href="/favicon.svg" />
        <link
            rel="preload"
            href="fonts/Catamaran/Catamaran-Medium.ttf"
            as="font"
            crossOrigin=""
        />
      </Head>

      <nav>
        <div className="brand">
          <Image src="/icons/g24.svg" alt="" width="40" height="40" />
          <h1 id="title">English Talk</h1>
        </div>

        <div className="navigation">
          <div className="content">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
          </div>

          <div className="links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/"><Image src="/icons/instagram.svg" alt="" width="20" height="20" /></a>         
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/englishtalkcba"><Image src="/icons/facebook.svg" alt="" width="20" height="20" /></a>         
          </div>
        </div>
      </nav>

      <main>
        <div className="wrapper">
          <div className="hero">
            <h2>A space for social interaction in English</h2>
            <p>We hold weekly events for locals who want to practise their English and foreigners looking to socialise in Cordoba, Argentina.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
          </div>
          <div id="image-container">
            <div id="clipped-background">
              <Image src="/svg/ellipse.svg" alt="" width="500" height="400" />
            </div>
            <div id="clipped">
              <Image src="/images/group.png" alt="" width="450" height="360" />
            </div>
          </div>
        </div>

        <div className="columns">
          <div>
            <Image src="/icons/money-off.svg" alt="" width="60" height="60" />
            <h3>Our Meetings Are Free</h3>
            <p>Everyone is welcome to join our group. We do not charge money to participate and we often offer snacks for free.</p>
          </div>
          <div>
            <Image src="/icons/user-heart.svg" alt="" width="60" height="60" />
            <h3>We Make It Less Awkward</h3>
            <p>It&apos;s scary and awkward to approach a group of strangers and ask them to speak with you, but it&apos;s less so when you have a group of team leaders guiding the conversation based on a topic of general interest with questions.</p>
          </div>
          <div>
            <Image src="/icons/groups.svg" alt="" width="60" height="60" />
            <h3>The Goal Is to Socialise</h3>
            <p>Most English conversation groups focus on either clubbing or learning academic English. While we don&apos;t shy away from parties and education, we&apos;re known for hanging out at the park and getting to know each other while having merienda.</p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow" id="separate-follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
        </div>

        <div className="separator background-red">
          <div id="big-logo">
            <Image src="/favicon.svg" alt="" width="286" height="340" />
          </div>
          <div id="logo-mobile">
            <Image src="/icons/g20.svg" alt="" width="142" height="167" />
          </div>
          <div id="about">
            <h3>English Talk! is a space where locals and foreigners can meet to practise their English and socialise</h3>
            <p>The group was created in 2007 by David Fulfer in Córdoba, Argentina. Since then it has gone through various transformations but the consistency in our values remains: We embrace spontaneity, respectful discussion and, most importantly, a sense of community.</p>
          </div>
        </div>

        <div className="separator-info d-flex">
          <div id="info" className="text-center">
            <div id="hiw-logo">
              <Image src="/svg/how-it-works-v2.svg" alt="" width="270" height="165" />
            </div>
            <h3 className="hide-desktop">How It Works</h3>
            <p>
              We usually meet on Tuesdays in the afternoon. We announce the time and venue on the weekends via our Instagram account. <br/>
              The meetings usually last 2 hours. We speak English the whole time and, while we allow speakers of any level to join, we do ask everyone to avoid speaking Spanish out of respect for those looking to practise their English.
              <br/>
              <br/>
              During the meeting, we spend the first half hour chatting casually and then we split into smaller conversation groups. <br/>
              Each group is assigned 1 or 2 team leaders who have prepared a topic with questions. If there are any newbies in the group, we ask everyone to introduce themselves before we get started with the topic. <br/>
            </p>
          </div>
          {/*
          <div id="decorator">
            <Image src="/icons/g24.svg" alt="" width="50" height="50" />
          </div>
          */}
        </div>

        <div className="columns photos">
          <div className="card">
            <Image src="/images/card-photo-1.png" alt="" width="300" height="300" />
            <h3>Practice Your English With Locals and Foreigners</h3>
          </div>
          <div className="card">
            <Image src="/images/card-photo-2.png" alt="" width="300" height="300" />
            <h3>Become More Confident In Social Situations</h3>
          </div>
          <div className="card">
            <Image src="/images/card-photo-3.png" alt="" width="300" height="300" />
            <h3>Develop a Sense of Community</h3>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow" id="separate-follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
        </div>

        {/*
        <div id="contact" className="background-red">
          <div>
            <h3>Contact Us</h3>
            <p>Feel free to contact us via DM on Instagram or by filling out this form</p>
            <div className="inline-icon text-white font-size" ><Image src="/icons/at.svg" alt="" width="14" height="14" /> info@englishtalkcordoba.com</div>
            <div className="inline-icon text-white font-size" ><Image src="/icons/phone.svg" alt="" width="14" height="14" /> +5492314446543</div>
          </div>
          <form id="contact-form" onSubmit={(e) => { e.preventDefault() }}>
            <div className="in-half">
              <input type="text" placeholder="First Name" name="" id="" />
              <input type="text" placeholder="Last Name" name="" id="" />
            </div>
            <input type="email" placeholder="Email" name="" id="" />
            <textarea type="text"  placeholder="Message" name="" id="message" />
            <button id="form-button" className="background-blue text-white border-radius border-none" >Send</button>
          </form>
        </div>
      */}
      <div className="ig-follow">
        <div id="decorator">
          <Image src="/icons/g24.svg" alt="" width="50" height="50" />
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/"><h3>Follow us on Instagram and never miss an event!</h3></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/"><Image src="/icons/instagram.svg" alt="" width="150" height="150" /></a>
      </div>
      </main>

      <svg style={{ position: 'absolute' }} width="0" height="0">
        <defs>
          <clipPath id="clip">
            <path id="wave" d="M639.252 488.355C240.466 596.031 62.5876 570.415 -16.7477 488.355L-24 0H1944V687C1685.06 604.552 1025.26 384.13 639.252 488.355Z"/>
            {/*<path d="M 0 0 H 1400 V 500 C 1400 500, 720 300, 450 400 S 10 430, 0 400 V 0 0"/>*/}
          </clipPath>
        </defs>
      </svg>

      <svg style={{ position: 'absolute' }} width="0" height="0">
        <defs>
          <clipPath id="image">
            {/*<path d="M 60 40 C 60 40, 400 0, 480 20 S 480 280, 460 320 S 0 400, 20 280 S 0 80, 60 40"/>*/}
            <path id="ellipse" d="M737.5 214.33C705.5 601 433.187 555 249 555C-36.9998 555 -18.0001 524.5 26.4999 278.5C38.5 58.5001 105.813 1.99999 290 1.99999C612.5 -10.5 737.5 52.2345 737.5 214.33Z" />
          </clipPath>
        </defs>
      </svg>

      <footer>
        <div>
          <div className="footer-title">
            <Image src="/icons/etlogo-black.svg" alt="" width="46" height="68" />
            <h3>English Talk</h3>
          </div>
          <p>
            info@englishtalkcordoba.com <br/>
            +5492314446543 <br/>
            &copy; 2021 English Talk - All rights reserved. <br/>
          </p>
        </div>
        <div className="links">
          <a className="background-black" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/"><Image src="/icons/instagram.svg" alt="" width="20" height="20" /></a>         
          <a className="background-black" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/englishtalkcba"><Image src="/icons/facebook.svg" alt="" width="20" height="20" /></a>         
        </div>
      </footer>

      <style jsx>{`
        * {
          font-family: Catamaran;
        }

        .container {
          height: 100vh;
        }

        #ellipse {
          transform: scale(0.6);
        }

        #wave {
          transform: translate(0px, 0px) scale(1);
        }

        #background {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: var(--red);
          clip-path: url(#clip);
          z-index: -1;
        }

        nav {
          margin-left: 5%;
          margin-right: 5%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1ch;
          width: max-content;
          margin: auto;
        }

        .navigation {
          display: grid;
          grid-column: 3/4;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
        }

        #title {
          font-weight: normal;
          width: auto;
          color: white;
          font-size: 1.4rem;
        }

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-self: end;
          text-align: center;
          width: fit-content;
          padding-right: 1rem;
        }

        .content a {
          color: white;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .links {
          display: grid;
          grid-column: 2/3;
          grid-template-columns: 1fr 1fr;
          justify-self: start;
          grid-gap: 12px;
          align-self: center;
        }

        .links a {
          display: flex;
          background-color: var(--blue);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }

        main {
          display: grid;
          align-items: start;
          justify-content: start;
          text-align: center;
        }

        .wrapper {
          display: grid;
          align-items: start;
          justify-content: start;
          grid-template-columns: 1fr 1fr;
          text-align: center;
        }

        main .wrapper {
          margin-left: 12%;
          margin-right: 12%;
          margin-bottom: 12em;
        }
        
        .hero {
          margin-top: 2rem;
          text-align: start;
          font-size: 3rem;
          color: white;
          display: flow-root;
        }
        
        .hero h2 {
          margin: 0;
          max-width: 20ch;
          font-size: clamp(2.4rem, 4vw, 4.4rem);
          line-height: clamp(4rem,5vw,6rem);
        }

        .hero p {
          margin: 0;
          max-width: 20ch;
          font-size: clamp(1rem, 1.2vw, 1.2rem);
          max-width: 48ch;
        }

        #image-container {
          display: grid;
          grid-column: 2/3;
          position: relative;
        }
        
        #clipped {
          margin-top: 1rem;
          clip-path: url(#image);
          position: absolute;
          align-self: center;
          justify-self: center;
        }

        .follow {
          color: white;
          background-color: var(--blue);
          padding: 0.6rem;
          padding-left: 1em;
          padding-right: 1em;
          border-radius: 5px;
          font-size: 1rem;
        }

        #separate-follow {
          grid-column: 2/3;
          max-width: max-content;
          margin: auto;
        }

        .columns {
          margin-top: 4em;
          width: 66%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2em;
          align-self: center;
          justify-self: center;
        }

        .columns div {
          padding: 1.2em;
          box-shadow: 0px 0px 20px var(--shadow);
          border-radius: 5px;
        }

        .columns h3 {
          font-size: clamp(1.2rem, 1.4vw, 1.7rem);
          text-align: start;
          margin-top: 0px;
          margin-bottom: 0px;
        }

        .columns p {
          font-size: clamp(.8rem, .8vw, 0.98rem);
          text-align: start;
        }

        .photos .card::before {
          content: "";
          display: block;
          padding-top: 80%;
        }

        .card {
          position: relative;
          color: white;
          padding: 0 !important;
          display: flex;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.76%, rgba(0, 0, 0, 0.7) 75.18%);
        }
        
        .card h3 {
          position: relative;
          font-size: clamp(1.2rem, 1.3vw, 1.6rem);
          align-self: flex-end;
          margin: 0.8em;
        }

        .separator {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 4fr 1fr;
          margin-top: 4rem;
          padding: 1rem;
        }

        .separator-info {
          position: relative;
          /*
          background-image: linear-gradient(360deg, #154B82 12%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/background.png);
          */
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          padding: 1rem;
        }

        :is(.separator) h3 {
          color: white;
        }

        :is(.separator, .separator-info) h3 {
          font-size: clamp(1.2rem, 1.4vw, 1.7rem);
          max-width: 46ch;
          margin-left: auto;
          margin-right: auto;
        }

        .separator-info h3 {
          margin: 0;
          max-width: 100% !important;
          font-size: 2.8rem;
        }

        .separator-info h3:after {
          background-color: var(--red);
          content: "";
          display: block;
          height: 6px;
          margin-top: 10px;
          margin: auto;
          width: 60px;
        }

        :is(.separator) p {
          color: white;
        }

        :is(.separator, .separator-info) p {
          font-size: clamp(.8rem, .8vw, 0.98rem);
          max-width: 90ch;
          margin-left: auto;
          margin-right: auto;
        }

        .separator-info p {
          font-size: 0.98rem;
          max-width: 92ch;
        }

        #big-logo {
          position: absolute;
          top: -40px;
          left: 20px;
        }

        #logo-mobile {
          display: none;
        }

        #hiw-logo {
          padding: 1rem !important;
          margin: auto 0;
        }

        #about {
          grid-column: 2/3;
        }

        footer {
          display: flex;
          padding-left: 5%;
          padding-right: 5%;
          justify-content: space-between;
          padding-bottom: 2rem;
        }

        footer h3 {
          font-size: 2rem;
          margin: auto 0;
          padding-left: .5ch;
        }

        footer p {
          margin: 0;
        }

        .footer-title {
          display: inline-flex;
        }

        .white {
          color: white;
          margin: 1rem;
        }

        .white h3 {
          margin: 0;
          margin-left: 0.5rem;
        }

        .white p {
          font-size: .8rem;
          margin: 0;
        }

        #info {
          margin: 1rem;
          padding: 1rem;
          border-radius: 3px;
        }

        #decorator {
          position absolute;
          top: -20px;
        }

        .d-flex {
          display: flex !important;
        }

        .text-start {
          text-align: start !important;
        }

        .text-center {
          text-align: center !important;
        }

        #contact {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-gap: 0.8rem;
          margin: 2.5rem auto;
          padding: min(1rem, 2rem);
          min-width: fit-content;
          border-radius: 5px;
        }

        #contact h3 {
          color: white;
          font-size: 18px;
          text-align: start;
          margin-top: 0px;
          margin-bottom: 0px;
        }

        #contact p {
          color: white;
          font-size: .8rem;
          text-align: start;
          max-width: 26ch;
        }

        #contact-form {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 1rem;
        }

        #contact-form input {
          max-height: 40px;
          border: none;
          border-radius: 3px;
          padding: 12px;
        }

        #form-button {
          padding-top: 8px;
          padding-bottom: 8px;
        }

        #message {
          min-height: 120px;
          border: none;
          border-radius: 3px;
          resize: none;
          padding: 10px;
        }

        .ig-follow {
          position: relative;
          background: linear-gradient(254.65deg, #405DE6 -3.91%, #5851DB 8.02%, #833AB4 20.58%, #C13584 31.89%, #E1306C 44.45%, #FD1D1D 57.02%, #F56040 69.58%, #F77737 83.4%, #FCAF45 96.59%, #FFDC80 111.03%); 
          margin-top: 2rem;
          margin-bottom: 2rem;
          padding: 5rem;
          text-align: start;
        }

        .ig-follow h3 {
          margin-top: 0;
          color: white;
          font-size: 4rem;
          max-width: 9ch;
        }

        .in-half {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        }

        .inline-icon {
          display: flex;
        }

        .text-white {
          color: white;
          font-size: .8rem;
        }

        .font-size {
          font-size: .8rem !important
        }

        .border-radius {
          border-radius: 5px;
        }

        .border-none {
          border: none;
        }

        .background-white {
          background-color: white !important;
        }
        
        .background-black {
          background-color: black !important;
        }

        .background-red {
          background-color: var(--red) !important;
        }

        .background-blue {
          background-color: var(--blue) !important;
        }
      `}</style>
    </div>
  )
}
