import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FooterSection: FunctionComponent = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <>
      <footer className="main-footer">
        <div
          className="main-footer__bg"
          style={{
            backgroundImage: "url(/assets/images/shapes/footer-bg-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            {/* <div
              className="col-xl-3 col-md-5 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-footer__about">
                <a href="index.html" className="main-footer__logo">
                  <img
                    src="assets/images/footer-logo.png"
                    alt="eduact"
                    width="213"
                    height="55"
                  />
                </a>
                <p className="main-footer__about__text">
                  Perusahaan Edutech penyedia platform Asesmen Peningkatan Mutu
                  Satuan Pandidikan dan Peserta Didik.
                </p>
                <div className="main-footer__social">
                  <a
                    href="https://www.facebook.com/edubrand.corporate"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://live.edubrand.id/" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div> */}
            <div
              className="col-xl-4 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="main-footer__navmenu main-footer__widget01">
                <h3 className="main-footer__title">Quick Links</h3>
                <ul>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      href="#about"
                      className="no-underline cursor-pointer"
                    >
                      Tracer Study
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      href="#course"
                      className="no-underline cursor-pointer"
                    >
                      Fitur
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      href="faq"
                      className="no-underline cursor-pointer"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      href="contact"
                      className="no-underline cursor-pointer"
                    >
                      Kontak
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="no-underline cursor-pointer"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-3 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-footer__navmenu main-footer__widget02">
                <h3 className="main-footer__title">Explore</h3>
                <ul>
                  <li>
                    <a href="https://psikologi.edubrand.id" target="_blank">
                      SDAT
                    </a>
                  </li>
                  <li>
                    <a href="https://psikologi.edubrand.id" target="_blank">
                      APMP
                    </a>
                  </li>
                  <li>
                    <a href="https://anbk.edubrand.id" target="_blank">
                      ANBK
                    </a>
                  </li>
                  <li>
                    <a href="https://snbt.edubrand.id" target="_blank">
                      UTBK
                    </a>
                  </li>
                  <li>
                    <a href="https://akmi.edubrand.id" target="_blank">
                      AKMI
                    </a>
                  </li>
                  <li>
                    <a href="https://bcs.edubrand.id" target="_blank">
                      BCS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-5 col-md-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="main-footer__newsletter">
                <h3 className="main-footer__title">Contact Us</h3>
                <ul className="main-footer__info-list">
                  <li>
                    <span className="icon-Location"></span>Jl. Ketileng Indah
                    Raya No.A7, Sendangmulyo, Kec. Tembalang, Kota Semarang,
                    Jawa Tengah 50272
                  </li>
                  <li>
                    <span className="icon-Telephone"></span>
                    <a
                      href="https://web.whatsapp.com/send?phone=6285876044000"
                      target="_blank"
                    >
                      0858-7604-4000
                    </a>
                  </li>
                  <li>
                    <span className="icon-Email"></span>
                    <a href="admin@tracerstudy.edubrand.id">
                      admin@tracerstudy.edubrand.id
                    </a>
                  </li>
                </ul>
                <form
                  className="main-footer__email-box mc-form"
                  data-url="MC_FORM_URL"
                >
                  <div className="main-footer__email-input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="EMAIL"
                    />
                  </div>
                  <button type="submit" className="eduact-btn">
                    <span className="eduact-btn__curve"></span>Subscribe
                  </button>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright text-center">
        <div className="container wow fadeInUp" data-wow-delay="400ms">
          <p className="copyright__text">
            Copyright {year} | PT.EDU INOVASI INDONESIA. All Rights Reserved
          </p>
        </div>
      </section>

      {/* <footer className="main-footer-two">
        <div
          className="main-footer-two__bg"
          style={{
            backgroundImage: "url(/assets/images/shapes/footer-bg-2.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-md-5 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-footer-two__about">
                <a href="index.html" className="main-footer-two__logo">
                  <img
                    src="/assets/images/footer-logo-two.png"
                    alt="eduact"
                    width="159"
                    height="40"
                  />
                </a>
                <ul className="main-footer-two__info-list">
                  <li>
                    <span className="icon-Location"></span>Jl. DI Panjaitan,
                    Kota Palangka Raya
                  </li>
                  <li>
                    <span className="icon-Telephone"></span>
                    <a
                      href="tel:3035550105"
                      className="no-underline cursor-pointer"
                    >
                      (303) 555-0105
                    </a>
                  </li>
                  <li>
                    <span className="icon-Email"></span>
                    <a
                      href="mailto:admin@disdik.kalteng.go.id"
                      className="no-underline cursor-pointer"
                    >
                      admin@disdik.kalteng.go.id
                    </a>
                  </li>
                </ul>
                <div className="main-footer-two__social">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-5 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="main-footer-two__navmenu main-footer-two__widget01">
                <h3 className="main-footer-two__title">Quick Links</h3>
                <ul>
                  <li>
                    <a href="" className="no-underline cursor-pointer">
                      Tracer Study
                    </a>
                  </li>
                  <li>
                    <a href="" className="no-underline cursor-pointer">
                      Panduan
                    </a>
                  </li>
                  <li>
                    <NavLink to="/faq" className="no-underline cursor-pointer">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <a href="" className="no-underline cursor-pointer">
                      Kontak
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="no-underline cursor-pointer"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="main-footer-two__gallery">
                <h3 className="main-footer-two__title">Gallery</h3>
                <div className="main-footer-two__galleries">
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-1.jpg"
                  >
                    <img src="/assets/images/gallery/fg-1.jpg" alt="eduact" />
                  </a>
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-2.jpg"
                  >
                    <img src="/assets/images/gallery/fg-2.jpg" alt="eduact" />
                  </a>
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-3.jpg"
                  >
                    <img src="/assets/images/gallery/fg-3.jpg" alt="eduact" />
                  </a>
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-4.jpg"
                  >
                    <img src="/assets/images/gallery/fg-4.jpg" alt="eduact" />
                  </a>
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-5.jpg"
                  >
                    <img src="/assets/images/gallery/fg-5.jpg" alt="eduact" />
                  </a>
                  <a
                    className="img-popup"
                    href="/assets/images/gallery/fg-6.jpg"
                  >
                    <img src="/assets/images/gallery/fg-6.jpg" alt="eduact" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      {/* <section className="text-center copyright">
        <div className="container wow fadeInUp" data-wow-delay="400ms">
          <p className="copyright__text">
            Copyright &copy; {year} | DINAS PENDIDIKAN KALIMANTAN TENGAH
          </p>
        </div>
      </section> */}
    </>
  );
};

export default FooterSection;
