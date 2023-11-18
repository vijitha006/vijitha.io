// import { useState } from 'react';
import './App.css';
import Header from './header/Header';
import About from './about/About';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import Contact from './contact/Contact';

function App() {
  // const [show, setShow]=useState(false);
  // const showSkill=()=>{
  //   setShow(true);
  // }

  return (
    <div >
      <main className="main">
        <section width="100" className="hero">                                                    
          <Header />
        </section>


        <About />

        <section className='skill'>
          {/* <h2 style={{textAlign :'left'}}><button onClick={showSkill}> View My Skills</button></h2>
 {show ? <Skill/> : ''} */}
          <Skills />
        </section>
        <section className='education'>
          <h2 className="heading2" style={{ textAlign: 'left' }}>Education</h2>
          <p style={{ paddingLeft: '30px' }}>B.Tech Computer Science</p>
        </section>
        <section className='exp'>
          <h2 className="heading2" style={{ textAlign: 'left' }}>Experience</h2>
          <p style={{ paddingLeft: '30px' }}>Honeycomb Technology- 2021 to present</p>
        </section>
        <section className='projects'>
          <h2 className="heading2" style={{ textAlign: 'left' }}>Projects</h2>
          <ul>
            <li><a href="https://www.honeycombtech.org/" target='_blank'>Honeycomb Technology website</a></li>
            <li><a href="https://www.thechesswarriors.com/" target='_blank'>The Chesswarriors</a></li>
          </ul>
        </section>
        <Contact/>
<Footer/>

      </main>
    </div>
  );
}

export default App;
