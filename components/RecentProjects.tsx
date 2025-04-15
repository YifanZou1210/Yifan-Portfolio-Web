/* eslint-disable @next/next/no-img-element */
'use client'

import { FaLocationArrow } from 'react-icons/fa6'

import { projects } from '@/data/index'
import { PinContainer } from './ui/3DPin'
import { ContainerTextFlip } from './ui/ContainerTextFlip'

const RecentProjects = () => {
  //   projects.forEach((item) => {
  //     console.log('Title:', item.title, 'Link:', item.link)
  //   })
  return (
    <div className="py-20" id="projects">
      <h1 className="text-white font-light text-center text-[30px] md:text-3xl lg:text-5xl">
        A small selection of{' '}
        <ContainerTextFlip words={['Recent', 'Projects']} />
      </h1>

      <div className="flex flex-wrap item212q wAZSWE34W2QA  ZWE32Q1 wA¸SWQ  s-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-xl text-white line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-white">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentProjects
