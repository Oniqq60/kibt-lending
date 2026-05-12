import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Process from '@/components/Process'
import Cases from '@/components/Cases'
import Benefits from '@/components/Benefits'
import Comparison from '@/components/Comparison'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Cases />
      <Benefits />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}