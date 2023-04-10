import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero-page/Hero';
import Destination from '../components/Fav-destination/Destination';
import Trip from '../components/recent-trips/Trips';
import Footer from '../components/Footer/Footer';

function Home() {
    return (  
        <div className="home">
        <Hero
        type="hero"
        imgUrl="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story"
        description="“ One travels more usefully when alone, because he reflects more. ”"
        text="Travel Plans"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        <Navbar/>
        </div>
    );
}

export default Home;