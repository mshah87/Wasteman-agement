import React, { Component } from 'react';
import './welcome-page.css';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: false
        };
    }

    render() {
        const { welcome } = this.state;
        return (
            <div className="page">
                <h1 className="welcome-title">WASTEMAN-AGEMENT</h1>
                <p className="welcomgitescription">Project management made simple</p>
                <p className='welcome-description'>- An automated scheduling service -</p>
                {!welcome && <button type="button" className="btn btn-light start-button"
                    onClick={() => {
                        this.setState({ welcome: true });
                        setTimeout(() => {
                            this.props.history.push('./tasks');
                        }, 1500)
                    }}
                >Get Started</button>}
                {welcome && <h2 className='fadeInAndOut'>Welcome!</h2>}
                </div>

        )
    }
}

export default WelcomePage;