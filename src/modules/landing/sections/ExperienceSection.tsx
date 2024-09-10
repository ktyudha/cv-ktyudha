import { FunctionComponent } from "react";
import { EXPERIENCES } from "@/constant/utils";

const ExperienceSection: FunctionComponent = () => (
  <>
    <section className="max-w-md mx-auto h-screen" id="portfolio">
      <div className="mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold">Experiences</h1>
      </div>
      <div className="justify-center bg-base-200 rounded-2xl mx-4">
        <ul className="menu menu-vertical w-full">
          {EXPERIENCES.map((experience, index) => (
            <li key={index}>
              <details open={index === 0}>
                <summary className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <h1 className="text-lg">{experience.company}</h1>
                  {/* <span className="text-sm text-gray-500">
                    ({experience.date})
                  </span> */}
                </summary>
                <ul>
                  {experience.position.map((pos, posIndex) => (
                    <li key={posIndex}>
                      <a>
                        {pos.job}
                        <span className="text-sm text-gray-500">
                          ({pos.date})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default ExperienceSection;
