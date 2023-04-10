import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero-page/Hero';
import Trip from '../components/recent-trips/Trips'


function Service() {
    return (  
        <div className="service">
            <Hero
            type="hero-mid"
            imgUrl="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Service"
            />
            <Trip/>
            <Navbar/>
        </div>
    );
}

export default Service;