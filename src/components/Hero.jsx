import React from 'react'
import { ComputersCanvas } from './canvas'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
const Hero = () => {
  return (
    
    <section className={` relative  w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} flex relative top-[100px] mx-auto max-w-7xl 
        flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5' >
          <div className='rounded-full w-5 h-5 bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <motion.div 
        variants={fadeIn('','',0.25,1)}
        viewport={{once:true ,amount: 0.25}}
        initial='hidden'
        whileInView='show'
        >
          <p className= {`${styles.heroHeadText}`}>Hi, I'm &nbsp;
          <span className='text-[#915eff]'>Talha</span>
          </p>
          <p className={`${styles.heroSubText} 
          `}>I develop data Solutions  & build websites</p>
          
        </motion.div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-5 bottom-32 w-full 
      flex justify-center items-center' >
        <a href="#About" >
          <div className='w-[35px] h-[64px] rounded-3xl border-4
           border-secondary flex justify-center items-start p-2 ' >
            <motion.div 
              animate={{
                y:[0,24,0]
              }}
              transition ={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className = 'w-3 h-3 rounded-full bg-secondary mb-1'
            />
           </div>
        </a>
      </div>
    </section>
    
    
   
  )
}

export default Hero