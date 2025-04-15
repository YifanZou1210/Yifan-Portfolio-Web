'use client'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Footer from '@/components/Footer'
import RecentProjects from '@/components/RecentProjects'
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max0w-7xl w-full mt-40">
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  )
}
