import { FunctionComponent } from "react";
import { ACHIEVEMENTS } from "@/constant/utils";

const AchievementSection: FunctionComponent = () => (
  <>
    <section
      className="achievement max-w-7xl mx-auto min-h-screen mb-24"
      id="achievement"
    >
      <div className="mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold">
          Achieve<span className="font-serif italic ">ment</span>
        </h1>
      </div>
      <div className="justify-center rounded-2xl mx-4">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {ACHIEVEMENTS.map((achievement, index) => (
            <li key={index}>
              <hr className={index == 0 ? "hidden" : "display"} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={
                  index % 2 === 0
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end md:mb-10 "
                }
              >
                <time className="font-mono italic">{achievement.year}</time>
                <div className="text-lg font-bold">{achievement.title}</div>
                {achievement.description}
              </div>
              <hr
                className={
                  index === ACHIEVEMENTS.length - 1 ? "hidden" : "display"
                }
              />
            </li>
          ))}
        </ul>
        {/* <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-bold">
                Intern MSIB Batch 7 at Aksamedia – Kemdikbud
              </div>
              Joined PT Aksamedia Mulia Digital as a Fullstack Developer through
              the MSIB Batch 7 program, competing with students from all over
              Indonesia. Gained valuable experience working on both frontend and
              backend development.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-bold">
                Funded by Creative Student Program – Innovative Work
                (Puspresnas)
              </div>
              Got funding for the Creative Student Program with the project
              "Energy Efficiency Monitoring System for Electric Motorcycles." I
              helped by designing the UI and managing the social media.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-bold">
                Finalist in Indonesia Flying Robot Contest – Ground Control
                Station
              </div>
              Became a finalist in the Indonesia Flying Robot Contest,
              specifically in the Technology Development Ground Control Station
              category. I contributed by creating a smart website and a
              real-time monitoring system for the project.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-bold">
                Finalist Networking Competition - IONIC
              </div>
              Competed as a finalist in the Networking Competition – IONIC,
              hosted by Politeknik Elektronika Negeri Surabaya, at the
              university student level, showcasing skills in networking and
              technology.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-bold">
                1st Place in Tampilan Website – Polytechnic Creative Festival
              </div>
              Won 1st place in the Website Design category at the Polytechnic
              Creative Festival, organized by the Student Coordinating Board of
              Polytechnic Institutions across Indonesia.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-bold">
                1st Place Networking Competition - Aitif 8.3
              </div>
              Won 1st place Networking Competition between Computer and Network
              Engineering Vocational Schools. National level. Event by Institute
              Teknologi & Bisnis Asia Malang
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-bold">
                Participant at Olimpyc Skills IT Network System Admin
              </div>
              Ranking 6 of 51 participant Olimpyc Skills IT Network System
              Administration. Wilayah Kerja 3 Jawa Timur level
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-bold">
                Finalis at Olimpiade Jaringan Mikrotik - APJII
              </div>
              Best of 15 Networking Olympiad between Computer and Network
              Engineering Vocational Schools. National level
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  </>
);

export default AchievementSection;
