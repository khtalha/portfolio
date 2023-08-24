import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {EarthCanvas} from '../components/canvas'
import {textVariant,fadeIn,slideIn} from '../utils/motion'
import emailjs from '@emailjs/browser'
import { useState,useRef } from 'react'
import { SectionWrapper } from '../hoc'



const Contact = () => {
  const formRef=useRef();
  const [form, setform] = useState({
    name:'',
    email:'',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>{
    const {name,value} = e.target;
    
    setform({...form,[name]:value})
  }
  const handleSubmit = (e) =>{
     e.preventDefault();
     setLoading(true)
//template_l8vll3m
//service_d2z5wuh
//dL8zGW6WvLlBR2aSx
    const  result=emailjs.send('service_d2z5wuh','template_l8vll3m',{
      from_name : form.name,
      to_name : 'Talha Khan',
      reply_to: form.email,
      message : form.message,
      from_email : form.email,
      to_email: 'talhakhan.hrp@gmail.com'
     },'dL8zGW6WvLlBR2aSx').then(
      ()=>{
        setLoading(false)
        alert('Superb!. I have recieved your message and will get back to you soon.',)
        setform({
          name:'',
          email: '',
          message: ''
        })
      }
        , (error)=>{
          setLoading(false)
          alert('Something went wrong.')
      }
     )

      
  }
  return (
    <div className='flex xl:flex-row flex-col-reverse overflow-hidden gap-10 '>
      <motion.div 
    variants={slideIn('left','tween',1,1)}
    className = 'FLex-[0.75] bg-black-100 p-8 round-2xl'
    >
      <p className={`${styles.sectionSubText}`} >Get in touch</p>
      <h2 className={`${styles.sectionHeadText}`} >CONTACT.</h2>
      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
      >
       <label className='flex flex-col'>
        <span>Your Name</span>
        <input type="text"
        name='name'
        onChange={handleChange}
        value={form.name} 
        placeholder="What's your name?"
        className='bg-tertiary py-4 px-6 plceholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium'/>
        </label> 
        <label className='flex flex-col'>
        <span>Your Email</span>
        <input type="email"
        name='email'
        value={form.email} 
        onChange={handleChange}
        placeholder="What's your email?"
        className='bg-tertiary py-4 px-6 plceholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium'/>
        </label> 
        <label className='flex flex-col'>
        <span>Your Message</span>
        <textarea type="text"
        rows='7'
        name='message'
        value={form.message} 
        onChange={handleChange}
        placeholder="What do you want to say?"
        className='bg-tertiary py-4 px-6 plceholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium resize-auto'/>
        </label> 
        <button
        type='submit'
        className='bg-tertiary py-3 px-8 
        outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:shadow-md hover:shadow-secondary'
        >
          {loading?'Sending...':'Send'}
        </button>
      </form>
    </motion.div>
    <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1  xl:h-auto md:h-[550px] 
        h-[350px] '
        >
      <EarthCanvas/>
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact,'contact')