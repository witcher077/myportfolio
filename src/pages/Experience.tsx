import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div id='experience' className='page pt-20'>
      <div className='lg:w-4/5 lg:m-auto mx-4  lg:px-10 px-2 py-5'>
        <h1 className='heading font-bold text-3xl'>Experience</h1>
        <div className=' flex justify-between lg:flex-row flex-col gap-6'>
          <div className=' lg:w-1/2  py-5 grid justify-between grid-cols-[repeat(auto-fill,minmax(100px,1fr))] lg:gap-4 gap-10'>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className="w-[50px]" src='assets/html.png' />
              </div>
              <span className='text-white'>Html</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className="w-[50px]" src='assets/css.png' />
              </div>
              <span className='text-white'>CSS</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className="w-[50px]" src='assets/sass.png' />
              </div>
              <span className='text-white'>SASS</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className="w-[50px]" src='assets/js.png' />
              </div>
              <span className='text-white'>JAVASCRIPT</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className=" w-[50px]" src='assets/react.png' />
              </div>
              <span className='text-white'>React</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className=" w-[50px]" src='assets/mongodb.png' />
              </div>
              <span className='text-white'>MONGO DB</span>
            </div>
           
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-[#19376d] rounded-full w-24 h-24 flex items-center justify-center'>
                <img className=" w-[50px]" src='assets/node.png' />
              </div>
              <span className='text-white'>Node js</span>
            </div>

          </div>
          <div className=' lg:w-1/2'>
            <div className="gradient-projects  justify-center items-center gap-5 px-4 py-2 rounded-lg mb-10">
              <img className='w-full' src='assets/newtonSchool.png' />
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-5">Newton School Coding Bootcamp <a className='text-sm font-normal text-blue-500' target='_blank' href='https://drive.google.com/file/d/1eIIvmc-EDtZVRhNvVUR0SwfSTfHRRjRb/view?usp=drive_link'> <FaExternalLinkAlt/></a></h2>
                <p className=' text-sm font-bold italic text-blue-300'>August 2021 - January 2022</p>
                <ul className='ml-4 mt-2 text-sm sm:text-lg'>
                  <li className=' list-disc'>Technical Stack : HTML, CSS, javaScript, MongoDb ,Express js, React js, Nodejs, Redux.</li>
                  <li className=' list-disc'>Participated in various contests organized by the platform.</li>
                </ul>
              </div>
            </div>
            <div className="gradient-projects  justify-center items-center gap-5 px-4 py-2 rounded-lg">
            <img className='w-full' src='assets/epsilon.png' />
            <div>
                <h2 className="text-2xl font-bold">Frontend developer, Epsilon India</h2>
                <p className=' text-sm font-bold italic text-blue-300'>June 2022 - Present</p>
                <ul className='ml-4 mt-2 text-sm sm:text-lg'>
                  <li className=' list-disc'>worked on creating responsive UI using css scss js and react.</li>
                  <li className=' list-disc'>Api integration using react.</li>
                  <li className=' list-disc'>Designed and developed responsive and engaging single-page applications (SPAs).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience