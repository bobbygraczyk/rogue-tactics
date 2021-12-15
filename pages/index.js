import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Textbox from '../components/Textbox'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <Layout>
    
    <Script id="make-road" strategy="lazyOnload">
    {`
      let type;  
      let cells = document.getElementsByClassName("game_cell");
      let demo = document.getElementsByClassName("demo")[0];
      for (let i = 0; i < cells.length; i++) {
          cells[i].onclick = ((e) => {
          let elem = e.target.parentElement;
          if (elem.classList.contains("select")) {
              type = elem.classList[2];
              demo.className = "game_cell"
              demo.classList.add(type, "demo")
              console.log(type);
          } else {
              elem.className = "game_cell"
              elem.classList.add(type)
      
              console.log(elem)
          }
          })
      }
    `}
    </Script>

    <div className={styles.container}>
        <h1 className={styles.title}>
          TOWER OF ROGUE: TACTICS
        </h1>

        <Textbox>
          <div className="board">
            <div className="grid">
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              <div className="row odd">
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
                <div className="game_cell"><div className="hover"></div></div>
              </div>
              
              
              <div className="row"></div>
              <div className="row"></div>
              <div className="row"></div>
              <div className="row"></div>
              <div className="row odd">
                <div className="game_cell select soil"><div className="hover hoverselect"></div></div>
                <div className="game_cell select water"><div className="hover hoverselect"></div></div>
                <div className="game_cell select road"><div className="hover hoverselect"></div></div>
                <div className="game_cell select rock"><div className="hover hoverselect"></div></div>
              </div>
              <div className="selected">
              <p>SELECTED<br />PIECE</p>
                <div className="game_cell soil demo">
                </div>
            </div>
            </div>
          </div>
        </Textbox>

        
        
        


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Layout>
  )
}
