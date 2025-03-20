import  { Fragment } from 'react'

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
    stream?: string;
    degree?: string;
    branch?: string;
  }
  
  // Props Interface
  interface EducationListProps {
    educations: Education[];
  }

const Education = ({ educations }: EducationListProps) => {

    return (
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center text-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xl text-blue-800 dark:text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.62 92.11L267.24 2.04a31.958 31.958 0 0 0-22.47 0L10.38 92.11A16.001 16.001 0 0 0 0 107.09V144c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-36.91c0-6.67-4.14-12.64-10.38-14.98zM64 192v160H48c-8.84 0-16 7.16-16 16v48h448v-48c0-8.84-7.16-16-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64zm432 256H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>Education</h4>
            <Circle year={educations[0].startYear} />
            {
                educations.map((education, index) => {

                    return < Fragment key={education.obtainedMarks} >
                        <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                            {
                                index % 2 !== 0 ?
                                    (<Card len={(education.passingYear-education.startYear)*30} heading={education.heading} subHeading={education.name} sub={education.stream ? education.stream : ""} dir={education.dir} percentage={education.percentage} />) :
                                    <div></div>
                            }
                            <Piller start={education.startYear} end={education.passingYear} len={(education.passingYear-education.startYear)*30} />
                            {
                                index % 2 === 0 ?
                                    (<Card len={(education.passingYear-education.startYear)*30} heading={education.heading} subHeading={education.name} sub={education.stream ? education.stream : ""} dir={education.dir} percentage={education.percentage} />) :
                                    <div></div>
                            }

                        </div>
                        {
                            index < educations.length - 1 && <Circle year={education.passingYear}  /> 
                        }
                    </Fragment>
                })
            }
            <Circle year={educations[educations.length-1].passingYear} />
        </div>
    )
}

interface CircleProps {
    year: number; // Ensure it's a number
  }
const Circle = ({year}:CircleProps) => {
    return <div className='relative flex justify-center items-center'><div className='rounded-full w-4 h-4 bg-gray-100 mx-auto'> </div><h1 className='font-bold text-white absolute left-[53%]'>{year}</h1></div>

}

interface pillerArgs{
    len:number,
    start:number,
    end:number
}

const Piller = ({len=50}:pillerArgs) => {
return <div style={{height:`${len}px`}} className={`rounded-t-full rounded-b-full w-2  bg-gradient-to-b from-blue-500 to-purple-500 mx-auto min-h-24`}></div>
}
interface cardArgs {
    heading: string,
    subHeading: string,
    len:number,
    sub:string,
    dir:string,
    percentage:number
}
const Card = ({len=50, heading, subHeading,sub,dir,percentage }: cardArgs) => {
console.log(sub);

    return <div style={{height:`${len}px`, minHeight:"100px"}}  className='flex flex-col justify-center border shadow-md rounded-xl p-4 bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] relative'>
<div  className={`absolute w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-white border-r-8 border-r-transparent ${dir=="left"?'-left-3 rotate-270':'-right-3 rotate-90'} `}></div>        
<div className='text-Black font-bold text-large'>{heading}</div>
        <div className='text-sm text-blue-600 font-bold'>{subHeading}</div>
        <div className='flex justify-between'><p className='italic text-xs text-blue-500'>{sub}</p><p className='italic text-xs text-blue-500'>{percentage}%</p></div>
    </div>
}



export default Education