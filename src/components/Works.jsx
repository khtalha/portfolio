import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {SectionWrapper} from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
const Works = () => {
  return (
    <>
    <motion.div className='flex flex-col justify-center items-start my-10'
    variants={textVariant(0.1)}>
      <p className={`${styles.sectionSubText}`} >Projects I have worked on</p>
      <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
      <p className='text-secondary leading-[30px] max-w-3xl text-[17px]'>Following projects showcase my skills & expertise through real world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively</p>
    </motion.div>
    <div className='flex flex-wrap items-center justify-evenly gap-10'>
      {
        projects.map( (project)=>(
          <ProjectCard
            name={project.name}
            image={project.image}
            description={project.description}
            source_code_link={project.source_code_link}
            tags={project.tags}
          />)
        )
      }
    </div>
    </>
  )
}

const ProjectCard = ({name,description,image,tags,source_code_link}) => {
  return (
    <Tilt>
      <a href={source_code_link}>
      <motion.div
       variants = {fadeIn("right",'spring',0.1,1)}
       className='flex flex-col items-start justify-center rounded-[20px] shadow-card gap-1 p-2 bg-tertiary cursor-pointer'
     
      >
        <div className='w-[300px] h-full p-1 rounded-xl'>
          <img className='object-contain rounded-xl' src={image} alt={name} />
        </div>
        <h3 className='text-white text-center font-bold text-[20px] m-1' >{name}</h3>
        <p className='max-w-[280px] text-[14px] text-secondary m-1'>{description}</p>
        <p className='max-w-[280px] text-[14px]'>
          {
            
            tags.map((tag)=>(
              <span className={tag.color} key={tags.name}>&nbsp; #{tag.name}</span>
            )
              )
          }
        </p>
      </motion.div>
      </a>
    </Tilt>  
  )
}

export default SectionWrapper(Works,'work')