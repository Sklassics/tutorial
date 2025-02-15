import React from 'react'
import Facebook from "../assets/facebook.png";
import Whatsapp from "../assets/whatsapp.png";
// import Facebook from "../img/facebook.png";
import Instagram from "../assets/instagram.png";

const Socialmedia = () => {
  
  return (
    <div>
      <div>
        <div className="connectw-us" id='contact'>
          <div className="con-w-layout">
            <h1>Connect with Us</h1>
            <div className="icons-con-w">
              <img src={Facebook} alt="#" />
              {/* +91 6305 490 580 */}
              <a href="https://wa.me/916305490580?text=Thanks%20for%20visiting%20Sklassics%20Tutorial%20Point" target='_blank'>
                <img src={Whatsapp} alt="WhatsApp" />
              </a>
              <img src={Instagram} alt="#" />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Socialmedia
