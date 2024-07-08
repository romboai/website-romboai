import React from 'react';
import './Technology.css';
import livello6 from '../img/livello-1-4.svg';
import separator9 from '../img/separator-8.png';
import livello7 from '../img/livello-1-8.svg';
function Technology() {
  return (
    <section className="technology">
      {/*<div className="container">*/}
      {/*  <h2>Revolutionary Technology</h2>*/}
      {/*  <p>Our AI-powered tools provide data-driven decision-making capabilities.</p>*/}
      {/*  <img src={deviceImage} alt="AI Device" />*/}
      {/*</div>*/}
      <div className="overlap-9">
        <div className="rectangle-9"></div>
        <img className="livello-6" src={livello6} alt="Level 6"/>
        <div className="content-container">
          <div className="content-4">
            <div className="paragraf">
              <p className="at-the-core-of-our">
                <span className="text-wrapper-19">At the core of our solutions</span>
                <span className="text-wrapper-20">
                lies an amalgamation of cutting-edge Low Field NMR (Nuclear Magnetic Resonance) and Artificial
                Intelligence (AI). This synergy brings a new dimension to product analysis, redefining precision,
                speed, and depth of insights.&nbsp;<br /><br />
              </span>
                <span className="text-wrapper-19">Low Field NMR:<br /></span>
                <span className="text-wrapper-20">
                Utilising the principles of nuclear-magnetic resonance at lower magnetic field strengths, our
                technology offers a non-invasive, highly sensitive approach to understand the molecular composition and
                properties of materials.&nbsp;<br /><br />
              </span>
                <span className="text-wrapper-19">Artificial Intelligence:<br /></span>
                <span className="text-wrapper-20">
                Our proprietary AI algorithms are engineered to interpret and extrapolate vast amounts of data obtained
              </span>
                <span className="text-wrapper-21">through NMR</span>
                <span className="text-wrapper-20">
                , enabling quick, accurate, and comprehensive analysis. The AI's learning capabilities
                continuously enhance the accuracy and depth of our insights.&nbsp;
              </span>
              </p>
            </div>
          </div>
          <div className="content-5">
            <div className="paragraf">
              <p className="p">
                <span className="text-wrapper-3">Data-Driven Decision Making:<br /></span>
                <span className="text-wrapper-4">
                Empowers operators with precise, comprehensive data for better decision-making in processing and
                refining operations. (Patent pending)
              </span>
              </p>
            </div>
          </div>
        </div>
        <div className="section-text-8">
          <div className="top">
            <div className="text-wrapper-5">INCIPIT</div>
            <div className="secondary-headline">Revolutionary Technology</div>
          </div>
        </div>
        <img className="separator-9" src={separator9} alt="Separator 9"/>
        <img className="livello-7" src={livello7} alt="Level 7"/>
      </div>
    </section>
  );
}

export default Technology;