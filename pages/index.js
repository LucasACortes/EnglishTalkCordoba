import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <div id="background"></div>
      <Head>
        <title>English Talk</title>
        <meta name="description" content="Description" />
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
          <Image src="/images/etlogoavatar.png" alt="" width="60" height="60" />
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
            <p>We hold weekly events for locals who want practice their English and foreigners looking to socialise.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
          </div>
          <div id="image-container">
            <Image src="/svg/ellipse.svg" alt="" width="500" height="400" />
            <div id="clipped">
              <Image src="/images/group.png" alt="" width="450" height="360" />
            </div>
          </div>
        </div>

        <div className="columns">
          <div>
            <Image src="/icons/money-off.svg" alt="" width="40" height="40" />
            <h3>Our Meetings Are Free</h3>
            <p>Everyone is welcome to join our group. We do not charge money to participate and we often offer snacks for free.</p>
          </div>
          <div>
            <Image src="/icons/user-heart.svg" alt="" width="40" height="40" />
            <h3>We Make It Less Awkward</h3>
            <p>It's scary and awkward to approach a group of strangers and ask them to speak with you, but it's less so when you have a group of team leaders guiding the conversation based on a topic of general interest with questions.</p>
          </div>
          <div>
            <Image src="/icons/groups.svg" alt="" width="40" height="40" />
            <h3>The Goal Is To Socialise</h3>
            <p>Most English conversation groups focus on either clubbing or learning academic English. While we don't shy away from parties and education, we're known for hanging out at the park and getting to know each other while having merienda.</p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow" id="separate-follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
        </div>

        <div className="separator background-red">
          <div id="big-logo">
            <Image src="/favicon.svg" alt="" width="286" height="340" />
          </div>
          <div id="about">
            <h3>English Talk! is a space where locals and foreigners can meet to practise their English and socialise</h3>
            <p>The group was created in 2007 by David Fulfer in Córdoba, Argentina. Since then it has gone through various transformations but the consistency in our values remains: We embrace spontaneity, respectful discussion and, most importantly, a sense of community.</p>
          </div>
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
            <h3>Develop A Sence of Community</h3>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/" className="follow" id="separate-follow">Follow Us!  <Image src="/icons/instagram.svg" alt="" width="12" height="12" /></a>
        </div>

        <div className="separator-info d-flex">
          <div id="info" className="text-center">
            <h3>How It Works</h3>
            <hr></hr>
            <p>
              We usually meet on Tuesdays in the afternoon. We announce the time and venue on the weekends via our Instagram account. <br/>
              The meetings usually last 2 hours. We speak English the whole time and, while we allow speakers of any level to join, we do ask everyone to avoid speaking Spanish out of respect for those looking to practise their English.
              <br/>
              <br/>
              During the meeting, we spend the first half hour chatting casually and then we split into smaller conversation groups. <br/>
              Each group is assigned 1 or 2 team leaders who have prepared a topic with questions. If there are any newbies in the group, we ask everyone to introduce themselves before we get started with the topic. <br/>
            </p>
          </div>
          <div id="decorator">
            <Image src="/icons/g24.svg" alt="" width="50" height="50" />
          </div>
        </div>

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
      </main>

      <svg width="0" height="0">
        <defs>
          <clipPath id="clip">
            <path id="wave" d="M639.252 488.355C240.466 596.031 62.5876 570.415 -16.7477 488.355L-24 0H1944V687C1685.06 604.552 1025.26 384.13 639.252 488.355Z"/>
            {/*<path d="M 0 0 H 1400 V 500 C 1400 500, 720 300, 450 400 S 10 430, 0 400 V 0 0"/>*/}
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="image">
            {/*<path d="M 60 40 C 60 40, 400 0, 480 20 S 480 280, 460 320 S 0 400, 20 280 S 0 80, 60 40"/>*/}
            <path id="ellipse" d="M737.5 214.33C705.5 601 433.187 555 249 555C-36.9998 555 -18.0001 524.5 26.4999 278.5C38.5 58.5001 105.813 1.99999 290 1.99999C612.5 -10.5 737.5 52.2345 737.5 214.33Z" />
          </clipPath>
        </defs>
      </svg>

      <footer className="background-blue">
        <div className="white">
          <div className="footer-title">
            <Image src="/favicon.svg" alt="" width="28" height="34" />
            <h3>English Talk</h3>
          </div>
          <p>
            info@englishtalkcordoba.com <br/>
            +5492314446543 <br/>
            &copy; 2021 English Talk - All rights reserved. <br/>
          </p>
        </div>
        <div className="links">
          <a className="background-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/englishtalkcba/"><Image src="/icons/instagram-blue.svg" alt="" width="20" height="20" /></a>         
          <a className="background-white" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/englishtalkcba"><Image src="/icons/facebook-blue.svg" alt="" width="20" height="20" /></a>         
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
          transform: translate(0px, -600px) scale(2);
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
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
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
        }

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-self: normal;
          text-align: center;
        }

        .content a {
          color: white;
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
          grid-template-columns: 1fr 1fr;
          text-align: center;
        }

        .wrapper {
          display: grid;
          align-items: start;
          justify-content: start;
          grid-column: 1/3;
          grid-template-columns: 1fr 1fr;
          text-align: center;
        }

        main .wrapper {
          margin-left: 12%;
          margin-right: 12%;
        }
        
        .hero {
          text-align: start;
          font-size: 32px;
          color: white;
          display: flow-root;
        }
        
        .hero h2 {
          margin: 0;
          max-width: 20ch;
        }

        .hero p {
          font-size: 16px;
          max-width: 46ch;
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
          padding: 0.4em;
          padding-left: 1em;
          padding-right: 1em;
          border-radius: 5px;
          font-size: 14px;
        }

        #separate-follow {
          grid-column: 2/3;
          max-width: max-content;
          margin: auto;
        }

        .columns {
          margin-top: 6em;
          grid-column: 1/3;
          width: 60%;
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
          text-align: start;
          margin-top: 0px;
          margin-bottom: 0px;
        }

        .columns p {
          font-size: 10px;
          text-align: start;
        }

        .card {
          position: relative;
          color: white;
          padding: 0 !important;
          height: 244px;
          display: flex;
        }
        
        .card h3 {
          position: relative;
          font-size: 14px;
          align-self: flex-end;
          margin: 0.4em;
        }

        .separator {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          margin-top: 4rem;
          padding: 1rem;
          grid-column: 1/3;
        }

        .separator-info {
          position: relative;
          background: url(/images/background.png);
          grid-column: 1/3;
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          padding: 1rem;
        }

        :is(.separator, .separator-info) h3 {
          color: white;
          font-size: 18px;
          max-width: 46ch;
          margin-left: auto;
          margin-right: auto;
        }

        .separator-info h3 {
          margin: 0;
          max-width: 100% !important;
          font-size: 32px;
        }

        .separator-info hr {
          margin: auto auto;
          border: 2px solid var(--red);
          width: 10%;
        }

        :is(.separator, .separator-info) p {
          font-size: 10px;
          max-width: 90ch;
          color: white;
          margin-left: auto;
          margin-right: auto;
        }

        .separator-info p {
          font-size: 12px;
          max-width: 92ch;
        }

        #big-logo {
          position: absolute;
          top: -40px;
          left: 20px;
        }

        #about {
          grid-column: 2/3;
        }

        footer {
          display: flex;
          padding-left: 10%;
          padding-right: 10%;
          justify-content: space-between;
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
          font-size: 10px;
          margin: 0;
        }

        #info {
          margin: 1rem;
          padding: 1rem;
          opacity: 0.8;
          border-radius: 3px;
        }

        #decorator {
          position absolute;
          bottom: -30px;
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
          grid-column: 1/3;
          grid-template-columns: 1fr 2fr;
          grid-gap: 0.8rem;
          margin: 2.5rem auto;
          padding: 2rem;
          width: fit-content;
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
          font-size: 10px;
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
          font-size: 14px;
        }

        .font-size {
          font-size: 10px !important
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
