import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoSection";
import { ExperienceObj, homeObjOne, homeObjThree, homeObjTwo, summaryObj } from '../components/InfoSection/Data';
import Services from "../components/Services";
import Footer from "../components/Footer"
import Navbar from '../components/Navbar/Navbar';
import PlainInfoSection from "../components/InfoSection/PlainInfoSection";
import ExpInfoSection from '../components/InfoSection/ExpInfoSection';
import { ProjectData } from '../components/Services/ProjectData';

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
            <PlainInfoSection {...summaryObj}/>
            <ExpInfoSection {...ExperienceObj}/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services {...ProjectData} />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
