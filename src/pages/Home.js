import React from 'react'
import './home.scss'
import Hero from '../components/home/hero/Hero'
import FindSection from '../components/home/findSection/FindSection'
import HomeFeatures from '../components/home/homeFeatures/HomeFeatures'
import About from '../components/home/about/About'
import Footer from '../components/home/footer/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <FindSection />
            <HomeFeatures />
            <About />
            <Footer />
        </div>
    )
}

export default Home
