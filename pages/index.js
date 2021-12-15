import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Textbox from '../components/Textbox'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <Layout>
    <Script id="show-banner" strategy="lazyOnload">
      {`
        let row = "";
        let cells = "";
        let grid = "";
        let count = 0;
        let left = 8;
        for (let i = 0; i < 24; i++) {
            cells = "";
            let odd;
            
            if (i % 2 == 0) {
                odd = "";
            } else {
                odd = " odd";
            }

            if (i <= 16) {
              left = left - 8;
            } else {
              left = left + 8;
            }
            
        
            if (i <= 8) {
                for (let x = 0; x < i; x++) {
                    cells += '<div class="game_cell" onclick="onTileClick(this);"><div class="hover"></div></div>'
                }
            } else if (i <= 16) {
                for (let x = 0; x < 8; x++) {
                    cells += '<div class="game_cell"><div class="hover"></div></div>'
                }
            } else {
                for (let x = (24 - i); x > 0; x--) {
                    cells += '<div class="game_cell"><div class="hover"></div></div>'
                }
            }
        
            row = '<div class="row' + odd + '" style="left: ' + left + 'px;">' + cells + '</div>'
        
            grid += row;
        }

        document.getElementsByClassName("grid-container")[0].innerHTML = grid;

        let type;  
        cells = document.getElementsByClassName("game_cell");
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
              <div className="grid-container">
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
