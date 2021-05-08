import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo, summaryObj } from '../components/InfoSection/Data';
import Services from "../components/Services";
import Footer from "../components/Footer"
import Navbar from '../components/Navbar/Navbar';
import PlainInfoSection from "../components/InfoSection"


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {/* <Navbar /> */}
            <Navbar2 toggle={toggle}/>
            <HeroSection />
            <PlainInfoSection {...homeObjOne}/>
            <InfoSection {...summaryObj}/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
