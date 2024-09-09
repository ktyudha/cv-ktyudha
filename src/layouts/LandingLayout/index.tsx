import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingNavbar from "./LandingNavbar";
// import LandingNavbarMobile from "./LandingNavbar/LandingNavbarMobile";
import LandingHelmet from "./LandingHelmet";
import jquery from "jquery";

const LandingLayout: FunctionComponent = () => {
  (window as any).$ = (window as any).jQuery = jquery;

  setTimeout(() => {
    $(".preloader").css("display", "none");
  }, 5000);

  return (
    <HelmetProvider>
      {/* assets */}
      <LandingHelmet />
      {/* <div className="custom-cursor"> */}
      {/* <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div> */}

      {/* <div className="preloader">
          <div
            className="preloader__image"
            style={{ backgroundImage: "url(/assets/images/loader.png)" }}
          ></div>
        </div> */}

      <div className="page-wrapper">
        <LandingNavbar />
        {/* <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
          </div> */}
        {/* <div className="stricky-header stricked-menu main-menu main-header-two">
            <div className="sticky-header__content"></div>
          </div> */}

        <Outlet />
      </div>

      {/* <LandingNavbarMobile /> */}

      {/* <div className="search-popup">
          <div className="search-popup__overlay search-toggler"></div>
          <div className="search-popup__content">
            <form
              role="search"
              method="get"
              className="search-popup__form"
              action="#"
            >
              <input type="text" id="search" placeholder="Search Here..." />
              <button type="submit" className="eduact-btn">
                <span className="eduact-btn__curve"></span>
                <i className="icon-Search"></i>
              </button>
            </form>
          </div>
        </div> */}

      {/* <div className="scroll-top">
          <svg
            className="scroll-top__circle"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div> */}
      {/* </div> */}
    </HelmetProvider>
  );
};

export default LandingLayout;
