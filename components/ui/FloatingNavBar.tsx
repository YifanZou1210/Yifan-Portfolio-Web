/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { JSX, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed top-10 inset-x-0 mx-auto max-w-fit border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2',
          // Mobile: vertical layout with smaller rounded corners and text
          'flex flex-col items-center justify-center rounded-md text-xs ',
          // Desktop: horizontal layout with full rounded corners and larger text
          'md:flex md:flex-row md:items-center md:space-x-4 md:space-y-0 md:rounded-full md:px-5 md:py-2 md:text-sm',
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 w-full',
              // Mobile: tight spacing, just enough to show content
              'py-0.5 justify-center',
              // Desktop: proper spacing
              'md:py-1 md:justify-center'
            )}
          >
            <span className="block ">{navItem.icon}</span>
            <span className=" sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
