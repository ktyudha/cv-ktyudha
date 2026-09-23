import { FunctionComponent } from "react";
import { FLOATING_LINKS, FloatingIconKey } from "../../../constant/utils";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import googlePlayIcon from "../../../assets/icons/google-play.png";

const icons: Record<FloatingIconKey, JSX.Element> = {
  linkedin: (
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      className="w-5 h-5 duration-[0.6s]"
    />
  ),
  "google-play": (
    <img
      src={googlePlayIcon}
      alt="Google Play"
      className="w-5 h-5 duration-[0.6s]"
    />
  ),
};

const Floatings: FunctionComponent = () => {
  return (
    <div className="group fixed bottom-5 right-5 p-2 flex flex-col gap-3 items-end justify-end w-24 h-24">
      {FLOATING_LINKS.map((floating) => (
        <a
          key={floating.key}
          href={floating.url}
          target="_blank"
          rel="noreferrer"
          className={`shadow-xl flex items-center justify-center p-4 rounded-full z-50 ${floating.bgClassName} ${floating.iconClassName}`}
        >
          {icons[floating.key]}
        </a>
      ))}
    </div>
  );
};

export default Floatings;
