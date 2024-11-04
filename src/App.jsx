import React, {useEffect,useState} from 'react'
import { Navbar } from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.6, // 60% of the section must be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const str = entry.target.id.toString();
            const id_num = str.substring(4);
            const id = "100"+id_num;

            console.log(id);
            const link = document.getElementById(id);
            if (entry.isIntersecting) {
                link.classList.add("text-yellow-500");
            } else {
                link.classList.remove("text-yellow-500");
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
        sections.forEach((section) => observer.unobserve(section));
    };
}, []);

  return (
    <>
      <div className='tracking-wide overflow-x-hidden bg-gradient-to-br from-sky-950 via-cyan-950 to-teal-950 min-h-screen min-w-full container relative'>
        <div
          className="fixed opacity-55 w-6 h-6 border-gray-200 border-2 rounded-full transition-transform duration-75 transform translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-gray-200"
          style={{
            top: position.y,
            left: position.x,
          }}
        ></div>
        
        <section className="w-full fixed top-0 z-50" name="navbar"> <Navbar/> </section>
        <section id="myid0" className='min-h-screen' name="intro"><Intro/></section>
        <section id='myid1' className='min-h-screen bg-opacity-80' name="about"><About/></section>
        <section id="myid4" className='min-h-screen bg-opacity-80' name="experience"><Experience/></section>
        <section id='myid3' className='min-h-screen bg-opacity-80' name="projects"><Projects/></section>
        <section id='myid2' className='bg-opacity-80' name="contact"><Contact/></section>
        <section name="footer"><Footer/></section>
      </div>
    </>
  )
}

export default App
