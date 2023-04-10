import './ContactData.css';

function ContactData() {
    return (  
        <div>
            <form id='contact-form'>
                <input type="text" placeholder='Full Name' required/><br/>
                <input type="email" placeholder='Email Address' required/><br/>
                <input type="text" placeholder='Phone Number' /><br/>
                <input type="text" placeholder='Subject' required/><br/>
                <textarea placeholder='Write Your Message Here' required ></textarea><br/>
                <br/>
                <button>submit</button>
            </form>
        </div>
    );
}

export default ContactData;