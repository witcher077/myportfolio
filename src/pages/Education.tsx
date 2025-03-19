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
            <Circle year={educations[0].startYear} />
            {
                educations.map((education, index) => {

                    return < Fragment key={education.obtainedMarks} >
                        <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                            {
                                index % 2 !== 0 ?
                                    (<Card len={(education.passingYear-education.startYear)*30} heading={education.heading} subHeading={education.name} />) :
                                    <div></div>
                            }
                            <Piller start={education.startYear} end={education.passingYear} len={(education.passingYear-education.startYear)*30} />
                            {
                                index % 2 === 0 ?
                                    (<Card len={(education.passingYear-education.startYear)*30} heading={education.heading} subHeading={education.name} />) :
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
    len:number
}
const Card = ({len=50, heading, subHeading }: cardArgs) => {

    return <div style={{height:`${len}px`, minHeight:"100px"}}  className='flex flex-col justify-center border shadow-md rounded-xl p-4 bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1]'>
        <div className='text-Black font-bold text-large'>{heading}</div>
        <div className='text-sm text-blue-600 font-bold'>{subHeading}</div>
    </div>
}



export default Education