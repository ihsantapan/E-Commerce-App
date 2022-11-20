import React from "react";
const Address = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="myaccount-content">
            <h4 className="title">Fatura Adresi</h4>
            <div className="billing_address">
              <h5>
                <strong>İhsan Tapan</strong>
              </h5>
              <p>
                Yeni Mah.
                <br /> Yenimahalle / Ankara
              </p>
              <p>Mobil: (530) 123-456789</p>
              <button className="theme-btn-one bg-black btn_sm mt-4">
                Düzenle
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="myaccount-content">
            <h4 className="title">Teslimat Adresi</h4>
            <div className="billing_address">
              <h5>
                <strong>İhsan Tapan</strong>
              </h5>
              <p>
                Yeni Mahalle <br /> Yenimahalle / Ankara
              </p>
              <p>Tel: (123) 456-7890</p>
              <button className="theme-btn-one bg-black btn_sm mt-4">
                Düzenle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
