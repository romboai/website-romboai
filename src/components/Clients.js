import React from 'react';
import './Clients.css';
import client1 from '../img/logo-1.svg'; // Adjust the path as necessary
import client2 from '../img/logo-1.svg'; // Adjust the path as necessary
import client3 from '../img/logo-1.svg'; // Adjust the path as necessary
import client4 from '../img/logo-1.svg'; // Adjust the path as necessary
import client5 from '../img/logo-1.svg'; // Adjust the path as necessary
import divider from '../img/divider-2.svg';
import pexelsPhoto1 from '../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png';
import pexelsPhoto2 from '../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png';
import pexelsPhoto3 from '../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png';
import separator9 from '../img/separator-9.png';
import manipolo from '../img/manipolo.svg';
import separator10 from '../img/separator-10.png';
import image10 from '../img/image-2-3.png';
import image11 from '../img/image-4-2.png';
import image12 from '../img/image-5-2.png';
import image13 from '../img/image-6-2.png';
import image14 from '../img/image-3-2.png';
function Clients() {
  return (
    <section className="clients">
      <div className="overlap-11">
        <div className="section-text-10">
          <div className="top-3">
            <p className="text-wrapper-5">PROVEN IMPACT, TRUSTED BY INDUSTRY LEADERS</p>
            <div className="text-wrapper-6">Clients and Partners</div>
          </div>
        </div>
        <div className="group-11">
          <div className="mask-group-3">
            <div className="group-12">
              <div className="rectangle-10"></div>
            </div>
          </div>
        </div>
        <div className="group-13">
          <img className="divider-3" src={divider} alt="Divider" />
        </div>
        <div className="item-6">
          <div className="post-4">
            <p className="text-wrapper-22">
              Consolidates multiple testing apparatuses into a single, efficient unit, significantly cutting down on
              equipment expenses and maintenance needs.
            </p>
            <div className="text-wrapper-23">All-In-One Analysis Suite</div>
            <div className="text-wrapper-24">Aug 23, 2023</div>
          </div>
          <img className="https-www-pexels-com-7" src={pexelsPhoto1} alt="Pexels Photo 1" />
        </div>
        <div className="item-7">
          <div className="post-5">
            <div className="text-wrapper-23">Fully Automatic Measurement</div>
            <div className="text-wrapper-25">Set 2, 2023</div>
            <p className="text-wrapper-22">
              Reduce the manual intervention of specialised personnel. Daily laboratory tasks reduced by 90%.
            </p>
          </div>
          <img className="https-www-pexels-com-7" src={pexelsPhoto2} alt="Pexels Photo 2" />
        </div>
        <div className="item-8">
          <div className="post-4">
            <div className="text-wrapper-23">Express Quality Analysis</div>
            <div className="text-wrapper-26">Feb 12, 2024</div>
            <p className="text-wrapper-22">
              Perform analysis/get ull report in minutes. Streamline crude oil management by compressing idle times
              and removing bottlenecks.
            </p>
          </div>
          <img className="https-www-pexels-com-7" src={pexelsPhoto3} alt="Pexels Photo 3" />
        </div>
        <div className="text-wrapper-27">What to read next</div>
        <img className="separator-10" src={separator9} alt="Separator 9" />
        <img className="manipolo" src={manipolo} alt="Manipolo" />
        <img className="separator-11" src={separator10} alt="Separator 10" />
        <div className="group-14">
          <div className="overlap-12">
            <img className="image-10" src={image10} alt="Image 10" />
            <img className="image-11" src={image11} alt="Image 11" />
          </div>
          <img className="image-12" src={image12} alt="Image 12" />
          <img className="image-13" src={image13} alt="Image 13" />
          <img className="image-14" src={image14} alt="Image 14" />
        </div>
      </div>
    </section>
  );
}

export default Clients;