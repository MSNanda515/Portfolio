import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import Navbar2 from "../components/Navbar2"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar2 toggle={toggle}/>
        </>
    )
}

export default Home
