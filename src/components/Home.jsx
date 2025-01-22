import React, { useEffect } from 'react';
import heroImage from '../assets/calm-women.png'
import heroBackgound from '../assets/hero-background.jpg'
import aboutMeGraphic from '../assets/lotus.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { features, testimonials } from '../utils/Sources';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useEffect(() => {
    let section = gsap.utils.toArray('.section');
    let features = gsap.utils.toArray('.features');

    let testCard = gsap.utils.toArray('.test-card');
    let testimonials = gsap.utils.toArray('.testimonials');
   section.forEach(section => {
      gsap.to(section, {
        opacity: 0,
        scale: 0.4,
        transform: "translateY(70%)",
        position: 'sticky',
        scrollTrigger: {
          trigger: section,
          start: "35% top",
          end: "bottom 15%",
          scrub: true,
          markers: true,
        }
      })
    })
   features.forEach(features => {
      gsap.to(features, {
        opacity: 0,
        scale: 1.8,
        scrollTrigger: {
          trigger: features,
          start: "40% top",
          end: "bottom 20%",
          scrub: true,
          markers: true,
        }
      })
    })
    testCard.forEach(testCard => {
      gsap.to(testCard, {
        rotate: 0,
        scrollTrigger: {
          trigger: testimonials,
          start: "top 65%",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        }
      })
    })
  })
  return (
    <>
    <div className=''>
        <div className={`relative px-[100px] h-[87vh] flex justify-center items-center`}>
          <div className='absolute bottom-[-3px] flex items-start'>
            <div className={`flex flex-col shrink-0 heroImage`}>
              <img src={heroImage} className='h-[65vh] rise-up' alt='Calm-Lady-Breathing' />
            </div>
            <div className='flex flex-col ml-[100px] space-y-2 w-[50rem]'>
              <h1 id='heading' className={`font-display text-[5rem] leading-[0.9] rise-up text-secondary`}>Pause. Breathe. Heal.</h1>
              <p className={`text-justify font-sans text-[1.2rem] p-[10px]  rise-up-delayed`}>Your safe space for mental wellness, growth, and balance. At Deep Breathes, we’re here to support you through life’s challenges and celebrate your victories.</p>
              <div className='flex space-x-3 pt-11 items-center'>
                <Link to='/' className={`transition-color duration-[400ms] text-[1.2rem] font-sans rounded-full px-[2rem] py-[1.2vh] font-medium text-white bg-secondary hover:text-black hover:bg-primary`}>Explore</Link>
                <Link to='/' className={`transition-color duration-[400ms] text-[1.2rem] font-sans rounded-full px-[2rem] py-[1.2vh] font-medium border-[1px] text-black hover:bg-primary hover:border-primary`}>Join Our Community</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
      { 
      //about-us
        <div className='section sticky top-[10px]'>
          <div className='relative flex justify-between px-[15rem] items-center mt-[3px] pb-[15vh] h-[120vh]'>
            <div className='w-[64%] space-y-4 p-[20px]'>
              <h1 className={`text-secondary font-display text-[4rem] rise-up`}>Who We Are</h1>
              <p className={`text-justify font-sans text-[1.2rem] rise-up-delayed`}>Life can be overwhelming, and mental health often takes a backseat. Deep Breathes is here to change that. Designed especially for students and young adults, we’re a community-driven platform that focuses on making mental wellness approachable and actionable.</p>
              <p className={`text-justify font-sans text-[1.2rem] rise-up-delayed`}>We’re committed to creating a safe space where everyone feels heard, supported, and empowered to prioritize their mental well-being.</p>

            </div>
            <div className='flex-shrink-0 imageBackdrop'>
              <img src={heroBackgound} className='h-[70vh] rise-up rounded-[20px]' alt='Calm-Lady-Breathing' />
            </div>
            <img src={aboutMeGraphic} className=' absolute bottom-[250px] left-[40px] h-[20vh] rise-up rounded-[20px]' alt='Calm-Lady-Breathing' />
          </div>
        </div>
      }
      { //Features section

        <div className="font-sans sticky top-[10px] features flex justify-center px-[8rem] items-center mt-[3px] py-[15vh] h-[100vh]">
          <div className='grid grid-cols-3 gap-4'>
            <div className='right col-span-2 flex items-center justify-center rounded-[20px] bg-opacity-[0.2] bg-white backdrop-blur-[10px]'>
              <h1 className={`text-black text-center font-display font-semibold  text-[4.4rem] rise-up`}>What We Offer?</h1>
            </div>
            {
              features.map((feature, index) => (
                <div key={index} className='detail p-7 w-fit rounded-[20px] bg-white bg-opacity-[0.4] backdrop-blur-[10px] space-y-2'>
                  <h1 className={`text-black font-sans font-semibold text-[1.3rem] text-nowrap`}>{feature.title}</h1>
                  <p className={`text-justify font-sans text-[1.2rem] s-text`}>{feature.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      }
      { //testimonial
         <div className='px-[100px] testimonials flex h-[100vh] py-[20vh] font-sans justify-center'>

          <div className='grid grid-cols-5 gap-[10px]'>
          <div className='row-span-2 flex items-center justify-center bg-primary rounded-[15px]'>
          <h2 className='font-display text-center text-[3.4rem] leading-[1.1] px-[25px] w-fit'>What Peaple Are Saying!</h2>
          </div>
          {
            testimonials.map((item, index) => (
              <div style={{ transform: `relative rotate(${Math.random()*45}deg)` }} key={index} className={`test-card rounded-[15px] bg-accent  w-[17w] p-[25px] shadow-lg`}>
                <p className='text-justify'>
                  {item.statement}
                  </p>
                <div className='flex justify-between items-center'>
                  <div className=''>
                <p className='text-left font-bold'>
                  {item.name}
                  </p>
                <span className='text-left font-semibold'>
                  {item.age}
                  </span>
                  </div>
                  <img src={item.image} className='w-[80px] rounded-full' />
                </div>
                </div>
            ))
          }
          </div>
         </div>
      }
    </>
  )
}

export default Home;