import React from 'react';
import './SupportedBy.css';
import logo1 from '../img/romboai-04-1-2.png';
import logo2 from '../img/romboai-04-1-2.png';
import logo3 from '../img/romboai-04-1-2.png';
import logo4 from '../img/romboai-04-1-2.png';
import logo5 from '../img/romboai-04-1-2.png';

const SupportedBy = () => {
  return (
    <div className="supported-by">
      <div className="logos">
        <p className="title"><span className="highlight">ROMBO.AI</span>It supported by</p>
        <img src={logo1} alt="Logo 1" />
        <div className="divider"></div>
        <img src={logo2} alt="Logo 2" />
        <div className="divider"></div>
        <img src={logo3} alt="Logo 3" />
        <div className="divider"></div>
        <img src={logo4} alt="Logo 4" />
        <div className="divider"></div>
        <img src={logo5} alt="Logo 5" />
      </div>
    </div>
  );
};

export default SupportedBy;
