import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="content">
        <div className="contactsblock" id="contacts">
          <div className="wrap">
            <div className="dashtop"></div>
            <h2 data-scroll="toggle(.fromTopIn, .fromTopOut)">
              Contact us
              <small>
                our support team <span className="gt">24/7</span> available
              </small>
            </h2>
            <div className="contwrap">
              <div
                className="contlink"
                data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
              >
                <h3>Official contacts:</h3>
                <a href="#" className="maincontbut supportlink" target="_blank">
                  Telegram Support
                </a>
                <a href="#" className="maincontbut supportlink" target="_blank">
                  Advertisement Manager
                </a>
                <a href="#" className="maincontbut maillink" target="_blank">
                  E-mail: admin@tronforever.live
                </a>
              </div>
              <div
                className="contlink"
                data-scroll="toggle(.fromTopIn, .fromTopOut)"
              >
                <h3>Public groups:</h3>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram ENG <img src="img/flags/eng.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram IRN <img src="img/flags/irn.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram ESP <img src="img/flags/esp.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram IND <img src="img/flags/ind.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram PHI <img src="img/flags/phi.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram RUS <img src="img/flags/rus.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram HIN <img src="img/flags/hin.svg" alt="" /> Group
                </a>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram VN <img src="img/flags/vin.svg" alt="" /> Group
                </a>
              </div>
              <div
                className="contlink"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                <h3>Social networks:</h3>
                <a href="#" className="maincontbut telegramlink" target="_blank">
                  Telegram News Channel
                </a>
                <a href="#" className="maincontbut twitterlink" target="_blank">
                  Twitter Profile
                </a>
                <a href="#" className="maincontbut youtubelink" target="_blank">
                  YouTube Channel
                </a>
                <a href="#" className="maincontbut discordlink" target="_blank">
                  Discord Server
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
