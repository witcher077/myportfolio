import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import EducationPage from './Education';

interface Education {
  dir: "left" | "right";
  heading: string;
  name: string;
  startYear: number;
  passingYear: number;
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  location: string;
  stream?: string; // Optional because it's not in all objects
  degree?: string; // Optional because it's only in the last object
  branch?: string; // Optional because it's only in the last object
}
const About = () => {
  const educations:Education[] = [
    {
      dir: "left",
      heading: "School",
      name: "ST. Joseph High School ",
      startYear: 2010,
      passingYear: 2015,
      totalMarks: 500,
      obtainedMarks: 445,
      percentage: 85,
      location: "Kanke ranchi JharKHand"
    },
    {
      dir: "right",
      heading: "Intermediate",
      name: "ST. JOHNS Inter College Ranchi",
      startYear: 2015,
      passingYear: 2017,
      totalMarks: 500,
      obtainedMarks: 380,
      percentage: 76,
      location: "Ranchi Jharkhand",
      stream: "Science (PCM)"
    },
    {
      dir: "left",
      heading: "Engineering",
      name: "BIRLA INSTITUTE OF TECHNOLOGY MESRA",
      startYear: 2017,
      passingYear: 2021,
      totalMarks: 4000,
      obtainedMarks: 3600,
      percentage: 74,
      location: "RANCHI JHARKHAND",
      degree: "B.Tech",
      stream: "Computer Science"
    }
  ];
  return (
    <section id='about' className='page mt-5 pt-20'>
      <div className='bg-[#090F19] rounded-3xl lg:w-4/5 mx-2 lg:mx-auto md:px-10 px-4 py-5'>
        <h1 className='text-white font-bold text-3xl'>About Me</h1>
        <div className="flex flex-col lg:flex-row gap-4 items-start pt-6">
         
          <div className='lg:w-1/2 grid'>
            <div className="gradient-bg  justify-center items-center gap-5 px-4 py-2 rounded-lg">
              <GiBookCover size={50} />
              <div>
                <h2 className="text-2xl font-bold">Education</h2>
                <p>I have completed Bachelor of Engineering from Birla Institute of technology in 2021.</p>
              </div>
            </div>
            <div className="gradient-bg  justify-center items-center gap-5 px-4 py-2 rounded-lg">
              <FaReact size={50} />
              <div>
                <h2 className="text-2xl font-bold">FrontEnd Development</h2>
                <p>I'm a front-end developer with experience
                  in building responsive optimized sites and Api Integrations</p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="gradient-bg  justify-center items-center gap-5 px-4 py-2 rounded-lg">
              <FaJs size={50} className="text-yellow-400" />
              <div>
                <h2 className="text-2xl font-bold">MERN STACK </h2>
                <p>I have completed Mern Certification, and Created some projects using React, Nodejs, Express, and MongoDB.</p>
              </div>
            </div>

            {/* CSS */}
            <div className="gradient-bg  justify-center items-center gap-5 px-4 py-2 rounded-lg">
              <FaCss3Alt size={50} className="text-blue-500" />
              <div>
                <h2 className="text-2xl font-bold">CSS & SCSS Styling</h2>
                <p>Crafting responsive and visually appealing UI with CSS and SCSS for better user Experience.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2'>
            {/* <img className='md:w-md w-md sm:w-sm  h-3/5' src='assets/avatar.png' /> */}
            <EducationPage educations={educations} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About