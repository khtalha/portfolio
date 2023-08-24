import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services,overview } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant(0.2)}>
      <p className={`${styles.sectionSubText}`} >Introduction</p>
      <h2 className={`${styles.sectionHeadText}`} >Overview</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("","",1,'1')}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px] '
    >{overview.content}</motion.p>
    <div className='mt-10 flex-wrap flex gap-10 items-center justify-evenly'>
      {
        services.map((service,index)=>{
          return (
          <ServiceCard key = {service.title}
            title={service.title}
            index={index}{...service}
            icon={service.icon}
          /> )
        })
      }
    </div>
    </>
  )
}

const ServiceCard = ({title,icon,index}) =>{
  return (
   
        <Tilt className='xs:w-[250px] w-full'
        
        >
          <motion.div
          variants = {fadeIn("right",'spring',0.5*index,0.75)}
          className='rounded-[20px] green-pink-gradient p-[1px] shadow-card'
          > 
            <div
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px]
              py-5 px-12 min-h-[250px] flex 
              flex-col justify-evenly items-center'
            >
              <img src={icon} alt={title}  
              className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-center font-bold text-[20px]' >{title}</h3>
             
            </div> 
        </motion.div> 
        
        </Tilt> 
    
  )
}
export default SectionWrapper(About,'About')
  