'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import BestSellers from '@/components/best-sellers'
import Whyus from '@/components/why-us'
import Testimonials from '@/components/testimonials'
import NewsLetter from '@/components/newsLetter'
import Footer from '@/components/footer'


export default function Home() {

  return (
    <div className="bg-white">
      <Navbar />

      <main className="isolate">
        <Hero />
        <Categories />
        <BestSellers />
        <Whyus />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  )
}
