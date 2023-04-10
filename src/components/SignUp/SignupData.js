import './SignupData.css';
import React, { Component } from 'react';

class SignupData extends Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false
        }
    }
    clickHandler = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() { 
        return (  
            <div className='signup-data'>
                <div id='toggle-btn'>
                    <div id='btn' onClick={this.state.clicked ? 'btn active' : 'btn'}></div>
                    <button className='btn-nav'>signup</button>
                    <button className='btn-nav'>login</button>
                                        
                </div>
                <form className='login-form' id='login-page'>
                    <input type="email" placeholder="Email Address"/><br/>
                    <input type="password" placeholder="Enter Your Password"/><br/>
                    <button>login</button>
                </form>
                <form className='signup-form' id='signup-page'>
                    <input type="text" placeholder="First Name"/><br/>
                    <input type="text" placeholder="Last Name"/><br/>
                    <input type="email" placeholder="Email Address"/><br/>
                    <input type="password" placeholder="Create Password"/><br/>
                    <input type="password" placeholder="Re-enter Password"/><br/>
                    <button>signup</button>
                </form>
            </div>
        );
    }
}
 
export default SignupData;