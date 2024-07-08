import React from 'react';
import './Intro.css';
import separator from '../img/separator-8.png';
import livello_left from '../img/livello-1-7.svg';
import livello_right from '../img/livello-1-6.svg';
import livello8 from '../img/livello-1-5.svg';
import modalitIsolamento8 from '../img/modalit-isolamento-8.svg';
import modalitIsolamento9 from '../img/modalit-isolamento-9.svg';
import modalitIsolamento10 from '../img/modalit-isolamento-10.svg';
import modalitIsolamento11 from '../img/modalit-isolamento-11.svg';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-container-flex-box">
          <div className="item-one">
            <img className="livello" src={livello_left} alt="Left Level"/>
          </div>
          <div className="item-two intro-container-flex-box-item">
            <div className="overlap-13">
              <img className="livello-8" src={livello8} alt="Background Level"/>
              <div className="paragrafo-5">
                <div className="frame-24">
                  <img className="modalit-isolamento" src={modalitIsolamento8} alt="Precision Icon"/>
                  <p className="paragrafo-6">
                    <span className="text-wrapper-28">Precision Redefined<br/></span>
                    <span className="text-wrapper-29">Our fusion of </span>
                    <span className="text-wrapper-30">Low Field</span>
                    <span className="text-wrapper-31">&nbsp;</span>
                    <span className="text-wrapper-29">NMR and AI delivers unparalleled accuracy, offering insights beyond traditional methods.&nbsp;</span>
                  </p>
                </div>
                <div className="frame-24">
                  <img className="modalit-isolamento-2" src={modalitIsolamento9} alt="Efficiency Icon"/>
                  <p className="paragrafo-6">
                    <span className="text-wrapper-28">Efficiency and Speed<br/></span>
                    <span className="text-wrapper-29">Say goodbye to time-consuming analysis processes. <br/>Our solution ensures quicker
                  decision-making and faster time-to-market for your products <br/></span>
                    <span className="text-wrapper-21">15 minutes</span>
                    <span
                      className="text-wrapper-29"> compared to weeks of traditional laboratory analysis&nbsp;&nbsp;</span>
                  </p>
                </div>
                <div className="frame-24">
                  <img className="modalit-isolamento-3" src={modalitIsolamento10} alt="Understanding Icon"/>
                  <p className="paragrafo-7">
                    <span className="text-wrapper-3">In-depth Understanding<br/></span>
                    <span className="text-wrapper-14">Gain a comprehensive understanding of your product's composition and behavior, empowering
                  data-driven decisions that fuel innovation and enhance quality.&nbsp;</span>
                  </p>
                </div>
                <div className="frame-24">
                  <img className="modalit-isolamento-4" src={modalitIsolamento11} alt="Cost Effective Icon"/>
                  <p className="paragrafo-7">
                    <span className="text-wrapper-3">Cost-Effective Solutions<br/></span>
                    <span className="text-wrapper-14">Optimize costs by streamlining analysis processes, reducing manual labor, and eliminating potential
                  errors associated with conventional methods.&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="section-text-11">
                <div className="top">
                  <p className="text-wrapper-5">WELCOME TO A WORLD OF PRECISION, EFFICIENCY, AND INNOVATION.</p>
                  <p className="text-wrapper-6">Unlocking a New Era in Chemical Analysis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-three">
            <img className="livello" src={livello_right} alt="Right Level"/>
          </div>
        </div>
        {/*<div>*/}
        {/*  <img className="separator" src={separator} alt="Separator"/>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default Intro;
