import Navbar from '../components/Navbar'; 
import SignupData from '../components/SignUp/SignupData';

function Signup() {
    return (  
        <div className="signup">
            <SignupData/>
            <Navbar/>
        </div>
    );
}

export default Signup;