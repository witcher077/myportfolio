import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import {  SiRedux } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";



const Projects = () => {

    const ProjectList = [
        {
            id: 1,
            name: "Food App UI",
            thumbnailImg: "https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-food-logo-png-red-transparent-10.png",
            discriptions: ["Its a food delivery app UI using react and tailwind css",
                "Ce can toggle theme between light an dark.",
                "we can add product to cart.",
                "for state manegement I have used redux toolkit."],
            gitHub: "",
            demo: "",
            techStacksUsed: [
                {
                    logo: <RiReactjsLine size={20} />,
                    name: "React"
                },
                {
                    logo: <SiRedux size={20} />,
                    name: "RTK"
                },
                {
                    logo: <RiTailwindCssFill size={20} />,
                    name: "TailwindCss"
                },
                {
                    logo: <IoLogoSass size={20} />,
                    name: "Scss"
                }
            ]

        },
        {
            id: 2,
            name: "Tutorial Point Responsive UI",
            thumbnailImg: "assets/tutorialpoint(2).png",
            discriptions: ["Its a UI of Tutorial Point Using Html Scss and JS"],
            gitHub: "",
            demo: "",
            techStacksUsed: [
                {
                    logo: <RiReactjsLine size={20} />,
                    name: "React"
                },
                {
                    logo: <SiRedux size={20} />,
                    name: "RTK"
                },
                {
                    logo: <RiTailwindCssFill size={20} />,
                    name: "TailwindCss"
                },
                {
                    logo: <IoLogoSass size={20} />,
                    name: "Scss"
                }
            ]

        },
        {
            id: 3,
            name: "Kanban Board",
            thumbnailImg: "assets/tutorialPoint.png",
            discriptions: ["Its a UI of Tutorial Point Using Html Scss and JS"],
            gitHub: "",
            demo: "",
            techStacksUsed: [
                {
                    logo: <RiReactjsLine size={20} />,
                    name: "React"
                },
                {
                    logo: <SiRedux size={20} />,
                    name: "RTK"
                },
                {
                    logo: <RiTailwindCssFill size={20} />,
                    name: "TailwindCss"
                },
                {
                    logo: <IoLogoSass size={20} />,
                    name: "Scss"
                }
            ]

        }
    ]

    return (
        <div id='project' className='page pt-20'>
            <div className='lg:w-4/5 lg:m-auto py-5 mx-4'>
                <h1 className='text-white font-bold text-3xl'>Projects</h1>
                    <div className='  lg:px-8 mx-4 px-0 py-5 grid lg:grid-cols-3 sm:grid-cols-2  gap-4'>
                        {
                            ProjectList.map((project) =><div
                            key={project.id}
                            className="flex flex-col items-center justify-between bg-[linear-gradient(#43599e,#132953)] rounded-md  transition-all hover:scale-[1.01] h-full"
                          >
                            {/* Image Container with Fixed Height */}
                            <div className="flex items-center justify-center p-7 h-[150px] w-full">
                              <img src={project.thumbnailImg} className="max-h-full object-contain" />
                            </div>
                          
                            {/* Project Details */}
                            <div className="flex flex-col flex-1 justify-between w-full ">
                              <div className="flex justify-between p-5">
                                <h1 className="text-white font-bold text-2xl">{project.name}</h1>
                                <span className="flex gap-4">
                                  <a
                                    className="text-sm font-normal text-[#23ce6b]"
                                    target="_blank"
                                    href={project.gitHub}
                                  >
                                    <FaGithub size={20} />
                                  </a>
                                  <a
                                    className="text-sm font-normal text-[#23ce6b]"
                                    target="_blank"
                                    href={project.demo}
                                  >
                                    <FaExternalLinkAlt size={20} />
                                  </a>
                                </span>
                              </div>
                          
                              <ul className="ml-3 text-gray-200 mb-2 p-5 text-sm sm:text-lg">
                                {project.discriptions.map((discription, index) => (
                                  <li key={index} className="list-disc">
                                    {discription}
                                  </li>
                                ))}
                              </ul>
                          
                              <span className="flex gap-4 items-center border-t-2 pt-2 p-5">
                                <p className="text-gray-200 font-bold text-md">Tech Stack :</p>
                                <span className="flex gap-4 text-blue-50 items-center">
                                  {project.techStacksUsed.map((ele, index) => (
                                    <p
                                      key={index}
                                      className="bg-pink-500 rounded-full cursor-pointer relative group p-1"
                                    >
                                      <span className="absolute hidden group-hover:block -top-4 text-xs italic bg-gray-700 rounded-sm p-[2px]">
                                        {ele.name}
                                      </span>
                                      {ele.logo}
                                    </p>
                                  ))}
                                </span>
                              </span>
                            </div>
                          </div>
                          )
                        }


                    </div>
            </div>
        </div>
    )
}

export default Projects;