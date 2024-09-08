import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LandingNavbar: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <nav className="main-menu">
        <div className="container">
          <div className="main-menu__logo">
            <a onClick={() => navigate("/")}>
              <img
                src="assets/images/logo-light.png"
                width="183"
                height="48"
                alt="Eduact"
              />
            </a>
          </div>
          <div className="main-menu__nav">
            <ul className="main-menu__list one-page-scroll-menu">
              <li className="scrollToLink">
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="scrollToLink">
                <a onClick={() => navigate("/")} href="#about">
                  Tracer Study
                </a>
              </li>
              <li className="scrollToLink">
                <a onClick={() => navigate("/")} href="#course">
                  Fitur
                </a>
              </li>

              <li className="scrollToLink">
                <a onClick={() => navigate("/")} href="faq">
                  FAQ
                </a>
              </li>
              <li className="scrollToLink">
                <a onClick={() => navigate("/")} href="contact">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="main-menu__right">
            <a href="#" className="main-menu__toggler mobile-nav__toggler">
              <i className="fa fa-bars"></i>
            </a>
            <a href="#" className="main-menu__search search-toggler">
              <i className="icon-Search"></i>
            </a>
            <NavLink to="/login" className="main-menu__login">
              <i className="icon-account-1"></i>
            </NavLink>
            <NavLink to="/login" className="eduact-btn">
              <span className="eduact-btn__curve"></span>Login Access
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
    // <header className="main-header-two">
    //   <nav className="main-menu">
    //     <div className="container">
    //       <div className="main-menu__logo">
    //         <div onClick={() => navigate("/")}>
    //           <img
    //             src="/assets/images/logo-two.png"
    //             width="183"
    //             height="48"
    //             alt="Eduact"
    //           />
    //         </div>
    //       </div>
    //       <div className="main-menu__nav">
    //         <ul className="main-menu__list one-page-scroll-menu">
    //           <li className="scrollToLink">
    //             <div
    //               className="no-underline cursor-pointer"
    //               onClick={() => navigate("/")}
    //             >
    //               Beranda
    //             </div>
    //           </li>
    //           <li className="scrollToLink">
    //             <a className="no-underline cursor-pointer">Tracer Study</a>
    //           </li>
    //           <li className="dropdown megamenu scrollToLink">
    //             <a className="no-underline cursor-pointer">Panduan</a>
    //             <ul>
    //               <li>
    //                 <section className="home-showcase">
    //                   <div className="container flex items-center justify-center">
    //                     <div className="home-showcase__inner">
    //                       <div className="row">
    //                         <div className="col-lg-6">
    //                           <div className="home-showcase__item">
    //                             <div className="home-showcase__image">
    //                               <img
    //                                 src="/assets/images/gbr_1(satuan_pendidikan).png"
    //                                 alt="eduact"
    //                               />
    //                             </div>
    //                             <h3 className="home-showcase__title">
    //                               Satuan Pendidikan
    //                             </h3>
    //                           </div>
    //                         </div>
    //                         <div className="col-lg-6">
    //                           <div className="home-showcase__item">
    //                             <div className="home-showcase__image">
    //                               <img
    //                                 src="/assets/images/gbr_2(alumni).png"
    //                                 alt="eduact"
    //                               />
    //                             </div>
    //                             <h3 className="home-showcase__title">Alumni</h3>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </section>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="scrollToLink">
    //             <div
    //               className="no-underline cursor-pointer"
    //               onClick={() => navigate("/faq")}
    //             >
    //               FAQ
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="main-menu__right">
    //         <a className="no-underline cursor-pointer main-menu__toggler mobile-nav__toggler">
    //           <i className="fa fa-bars"></i>
    //         </a>
    //         <a className="no-underline cursor-pointer main-menu__search search-toggler">
    //           <i className="icon-Search"></i>
    //         </a>
    //         <div
    //           className="no-underline cursor-pointer main-menu__login"
    //           onClick={() => navigate("/login")}
    //         >
    //           <i className="icon-account-1"></i>
    //         </div>
    //         <div className="main-menu__info">
    //           <span className="icon-Call"></span>
    //           <a href="tel:3035550105">(303) 555-0105</a>
    //           Call to Questions
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default LandingNavbar;
