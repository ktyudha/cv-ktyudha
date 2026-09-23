import { FunctionComponent } from "react";
import { FLOATING_LINKS, FloatingIconKey } from "../../../constant/utils";

const icons: Record<FloatingIconKey, JSX.Element> = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-linkedin w-5 h-5 duration-[0.6s]"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  ),
  "google-play": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-google-play w-5 h-5 duration-[0.6s]"
      viewBox="0 0 16 16"
    >
      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603A1 1 0 0 1 1.03 2.6l6.553 6.05zM1.03 1.27l6.594 6.09 3.044-2.81L4.976.226C4.033-.328 2.875.254 2.674 1.283z" />
    </svg>
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
