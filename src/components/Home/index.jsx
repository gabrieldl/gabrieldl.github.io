import './style.css';
import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Hi,</h1>
                <p>My name is Gabriel.</p>
                <p>I like writing software.</p>
                <p>And drinking coffee.</p>
                <p>(decaf)</p>
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