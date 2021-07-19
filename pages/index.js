import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>English Talk</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.svg" />
        <link
            rel="preload"
            href="fonts/Catamaran/Catamaran-Medium.ttf"
            as="Catamaran"
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
        <div className="main">
          <h2>Work In Progress</h2>
          <p>There will be a page here soon...</p>
        </div>
      </main>

      <footer>
      </footer>

      {/*
        COLORS:
        #D61D1D red
        #453f69 violet
      
        FONT:
        Catamaran
      */}

      <style jsx>{`
        * {
          font-family: Catamaran;
        }


        .container {
          background-color: #D61D1D;
          height: 100vh;
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
          display: none;
          grid-template-columns: 1fr 1fr;
        }

        .links {
          display: grid;
          grid-column: 2/3;
          grid-template-columns: 1fr 1fr;
          justify-self: start;
          gap: 10px;
        }

        .links > a {
          display: flex;
          background-color: #453f69;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }

        main {
          display: grid;
          align-items: center;
          justify-content: center;
          height: 80%;
          text-align: center;
        }
        
        .main {
          font-size: 32px;
          color: white;
        }
      `}</style>
    </div>
  )
}
