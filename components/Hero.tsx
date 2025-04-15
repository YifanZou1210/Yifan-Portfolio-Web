'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FloatingDock } from './ui/FloatingDock'
import { links, navItems } from '@/data/index'
import { FaLocationArrow } from 'react-icons/fa'
import { FloatingNav } from './ui/FloatingNavBar'

const Hero = () => {
  return (
    <div className="w-full ">
      <FloatingNav navItems={navItems} />
      <div className="pb-20">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="-top-10 -left-full h-[80vh] w-[50vw]"
            fill="orange"
          />
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw]"
            fill="lightblue"
          />
        </div>

        <div className="h-screen w-full bg-gradient-to-b from-blue-500 via-white to-purple-400 absolute top-0 left-0 flex items-center justify-center">
          <div
            className={cn(
              'absolute inset-0',
              '[background-size:40px_40px]',
              '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
              'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
              '[mask-image:radial-gradient(ellipse_at_center,transparent-40,black)]'
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
          <p className="relative z-20 bg-gradient-to-b from-pink-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
        </div>

        <div className="flex justify-center relative my-20 z-10 mt-40">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col  items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-black max-w-80 mt-10">
              Dynamic Web Magic with Next.js
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Hi there 👋 I'm Yifan , a Next.js Developer based in Boston"
              filter={false}
              duration={2}
              className="font text-center text-[40px] mt-15 md:text-5xl lg:text-10xl"
            />
            <p className="text-center text-black font-mono md:tracking-wider mb-4 text-sm md:text-lg lg:text-shadow-2xs">
              Transforming Concepts into Seamless User Experiences
            </p>

            <a href="#projects" className="mt-5 sm:mt-8 md:mt-10">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <FloatingDock
              desktopClassName="translate-y-20"
              mobileClassName="translate-y-30 translate-x-50 rounded-xl"
              items={links}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
