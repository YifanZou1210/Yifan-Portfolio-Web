import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import RecentProjects from '@/components/RecentProjects'
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max0w-7xl w-full">
        <Hero />
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  )
}
