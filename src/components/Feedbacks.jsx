import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'

const Feedbacks = () => {
  return (
    <div className='flex flex-col justify-center items-start rounded-[20px] mt-12 bg-black-100'>
    <div className={`bg-tertiary rounded-2xl 
    min-h-[300px] ${styles.padding} w-full`} >
    <motion.div 
    variants={textVariant(0.1)}>
      <p className={`${styles.sectionSubText}`} >What others say</p>
      <h2 className={`${styles.sectionHeadText}`} >Testimonials.</h2>
    </motion.div>
    </div>
    <div className={`flex flex-wrap justify-evenly 
    items-center gap-7 pb-14 -mt-20 ${styles.paddingX}`}>
    {
      testimonials.map((testimonial)=>(
        <TestimonialCard
        name={testimonial.name}
        designation={testimonial.designation}
        company={testimonial.company}
        image={testimonial.image}
        quote={testimonial.testimonial}
        />
      ))
    }
    </div>
    </div>
  )
}

const TestimonialCard=({name,designation,company,quote,image})=>{
  return (
    <motion.div className=' bg-black-200 rounded-2xl xs:w-[320px] w-full  p-10'>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]' >{quote}</p>
      </div>
      <div className='flex justify-between items-center mt-7 gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='font-medium text[16px] text-md'>
            <span className='blue-text-gradient font-normal'>@</span>
           &nbsp; {name}</p>
          <p className='text-secondary text-[12px] m-1 '>{designation} {company}</p>
        </div>
       
        <img className='object-cover w-10 h-10 rounded-full' src={image} alt={name} />
        
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Feedbacks,'Feedback')