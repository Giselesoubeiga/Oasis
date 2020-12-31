import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import{Link} from "react-router-dom";
import Services from "../components/Services";
import FuturedRooms from "../components/FeaturedRooms";
import Button from "../components/StyledHero";


export default function Home() {
    return (
        <>
    <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-priamary"></Link>
            our rooms
        </Banner>
    </Hero>
    <Services/>
    <FuturedRooms/>
    <Button>Hello</Button>
    </>
    );
   
}


