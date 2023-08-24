import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { experiences } from '../constants'

const ExperienceCard = ({icon,company_name,title,date,points,index}) =>{
  return (
    <div className='flex'>
    <motion.div 
    variants={fadeIn('','',0.1*index,'1')}
    className='rounded-full border-2 border-white  bg-gray-900 
    w-[50px] h-[50px] p-1.5 flex items-center justify-center'
    >
      <img className='object-contain' src={icon} alt={company_name} />
    </motion.div>

    <motion.div
    className='p-8 bg-tertiary xs:m-4 m-0 rounded-sm w-full'
    variants={fadeIn('','',0.1*index,0.75)}
    >
      <h2 className='text-white text-[20px] font-bold text-left'>{title}</h2>
      <p className='font-bold text-secondary'>{company_name}</p>
      <div className='xs:p-4 p-0 font-bold text-[15px] text-secondary '>
      {
        points.map(
          (point,index)=>{
            console.log(index)
            return (
            <li key={company_name+index}>{point}</li>
        )}
        )
      }
      </div>
      <p className='font-bold text-secondary' >{date}</p>
    </motion.div>
    </div> 
  )
}

const Experience = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <motion.div className= 'mt-10 mb-10 flex flex-col justify-center items-center gap-2'
      variants={textVariant()}
    >
      <p className={`${styles.sectionSubText}`} >What I have done so far</p>
      <h2 className={`${styles.sectionHeadText}`} >Experience</h2>
    </motion.div>
    <div className='relative flex'>
      <div className='bg-white h-full w-1 rounded-full absolute left-5'></div>
      <div className='relative py-10 '>
        {
          experiences.map((experience,index)=>
          (
            <ExperienceCard
            icon={experience.icon}
            company_name={experience.company_name}
            title={experience.title}
            date={experience.date}
            points={experience.points}
            index={index}{...experiences}

            />
          )
          )
        }
      </div>
    </div>
    </div>
  )
}

export default SectionWrapper(Experience,'work')
