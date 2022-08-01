import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-1 text-center">
      <div className="footer">
        <div className="footer-links">
          <div className="footer-item">
            <h2>Follow us around</h2>
            <div className="social-media-icons">
              <div className="sm-icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="sm-icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="sm-icon">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="footer-body">
            <div className="footer-item">customer Service</div>
            <div className="footer-item">Shop Online</div>
            <div className="footer-item">Useful Links</div>
            <div className="footer-item">About us</div>
          </div>
          <div className="footer-item">
            <div className="advice-of-day">
              <div className="advice-image">
                <img
                  src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
                  alt="grocery"
                />
              </div>
              <div className="advice-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium illum temporibus rerum nisi, maxime repudiandae
                  officia, debitis nobis consequatur rem facilis eum voluptas?
                  Perferendis, ipsum?
                </p>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <p>Copyright &copy; 2022, DipzDev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
