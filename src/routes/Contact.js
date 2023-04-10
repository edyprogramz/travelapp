import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero-page/Hero';
import Footer from '../components/Footer/Footer';
import ContactData from '../components/Contact/ContactData';


function Contact() {
    return (  
        <div className="contact">
            <Hero
            type="hero-mid"
            imgUrl="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Contact"
            />
            <ContactData/>
            <Footer/>
            <Navbar/>
        </div>
    );
}

export default Contact;


