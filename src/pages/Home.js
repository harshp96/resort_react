import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Rs. 1999">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms></FeaturedRooms>
        </>
    )
}
