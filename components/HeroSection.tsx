"use client" // this is a client component
import React, { use } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {HiArrowDown} from 'react-icons/hi'

function HeroSection() {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-52 md:flex-row md:space-x-4 md:text-left'>
            <div className="md:mt-2 md:w-full" >
                <Image src="/MemojiPic.png" alt='' className="rounded-full shadow-2xl"width={350} height={350}/>
            </div>
            <div>
                <h2 className='text-4xl mt-6 md:text-6xl'>Hi&nbsp;👋  I&#39;m
                    {' '}<strong className='md:text-6xl font-bold'>Leo Kuo</strong>
                </h2>
                <p className='text-lg mt-4 mb-6 md:text-2xl md:mb-10'>
                    I&#39;m a {" "}
                    <span className='font-semibold text-[#154734]'>
                        Software Engineer
                    </span>{" and "}
                    <span className='font-semibold text-[#e87500]'>
                        Senior student
                    </span>
                    {" "}at University of Texas at Dallas. 
                    As a technology enthusiast, I have immersed myself 
                    in the world of software development, constantly seeking 
                    opportunities to expand my knowledge and enhance my skills.
                </p>
                <Link
                    to='projects'
                    className='text-neutral-100 font-semibold px-6 py-3 bg-[#154734] rounded shadow hover:bg-teal-700'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects 
                </Link>
            </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>

    </section>
  )
}

export default HeroSection