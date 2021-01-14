import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Hero>
            <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
                <Link className="btn-primary" to="/rooms">
                    Our rooms
                </Link>
            </Banner>
        </Hero>
    )
}

export default Home 
