import Hero from '../components/Hero-page/Hero';
import Navbar from '../components/Navbar'; 
import AboutData from '../components/About/AboutData';


function About() {
    return (  
        <div className="about">
        <Hero
        type="hero-mid"
        imgUrl="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        title="About"
        />
        <Navbar/>
        <AboutData/>
        </div>
    );
}

export default About;