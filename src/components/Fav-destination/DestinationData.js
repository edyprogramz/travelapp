import React, { Component } from 'react';

class DestinationData extends Component {
    state = {  } 
    render() { 
        return (
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="des-img">
                    <img alt="" src={this.props.img1}/>
                    <img alt="" src={this.props.img2}/>
                </div>

            </div>
        );
    }
}
 
export default DestinationData;