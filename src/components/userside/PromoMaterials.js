import React from "react";

const PromoMaterials = () => {
  return (
    <div>
      <a data-remodal-action="close" className="remodal-close"></a>
      <h1>Promo materials</h1>
      <div className="modaldesc">
        <div
          className="bannerwrap"
          data-scroll-reveal="enter top move 50px over 0.5s after 0.3s"
        >
          Size: <b>any size</b>
          <img
            src="img/logo.svg"
            alt=""
            style={{ border: "none", width: "140px" }}
          />
          Logo code:
          <textarea style={{ height: "16px" }} readOnly>
            https://tronforever.live/img/logo.svg
          </textarea>
        </div>
        <div className="smallsep2"></div>
        <div
          className="bannerwrap"
          data-scroll-reveal="enter top move 50px over 0.5s after 0.3s"
        >
          Size: <b>125px x 125px</b>
          <img src="img/125.gif" alt="" />
          Banner code:
          <textarea readOnly className="trxWalletTextarea125 trxWalletTa125">
            <a href="index.html">
              <img
                src="img/125.gif"
                width="125"
                height="125"
                alt="tronforever.live | Get +200% up to your deposit right now. Safe and legit!"
              />
            </a>
          </textarea>
        </div>
        <div className="smallsep2"></div>
        <div
          className="bannerwrap"
          data-scroll-reveal="enter top move 50px over 0.5s after 0.3s"
        >
          Size: <b>468px x 60px</b>
          <img src="img/468.gif" alt="" />
          Banner code:
          <textarea readOnly className="trxWalletTextarea468 trxWalletTa468">
            <a href="index.html">
              <img
                src="img/468.gif"
                width="468"
                height="60"
                alt="tronforever.live | Get +200% up to your deposit right now. Safe and legit!"
              />
            </a>
          </textarea>
        </div>
        <div className="smallsep2"></div>
        <div
          className="bannerwrap"
          data-scroll-reveal="enter top move 50px over 0.5s after 0.3s"
        >
          Size: <b>728px x 90px</b>
          <img src="img/728.gif" alt="" />
          Banner code:
          <textarea readOnly className="trxWalletTextarea728 trxWalletTa728">
            <a href="index.html">
              <img
                src="img/728.gif"
                width="728"
                height="90"
                alt="tronforever.live | Get +200% up to your deposit right now. Safe and legit!"
              />
            </a>
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default PromoMaterials;
