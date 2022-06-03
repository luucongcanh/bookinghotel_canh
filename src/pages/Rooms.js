import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomContainer';
import SlidebarHome from '../components/SlidebarHome';
import Footer from '../components/Footer';

const Rooms = () => {
    return (
        <>
        <SlidebarHome/>
            <RoomsContainer />
            <Footer/>
        </>
        )
    };
    
export default Rooms;