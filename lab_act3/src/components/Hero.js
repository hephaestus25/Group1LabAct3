import React from 'react';
import { Button } from './Button';
import './Hero.css';


function Hero() {
    return (
        <span className='hero-container'>
            <video src='videos\BarberCinematic.mp4' autoPlay loop muted />
            <h1>Straight shaves, straight styles. </h1>
            <p>Get a haircut now!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
            </div>
        </span>
    );
}

export default Hero;
