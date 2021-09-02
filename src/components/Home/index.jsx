import './style.css';
import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
            <br/>
                <h1>Hi,</h1>
                <p>My name is Gabriel.<br/><br/>
                I like writing software.<br/><br/>
                And drinking coffee.<br/><br/>
                (decaf)</p>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/androidTurtle.png`}
                    alt="a picture of me">
                </img>
            </div>
        </div>
    )
}

export default Home