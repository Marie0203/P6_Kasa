import React, { Component } from 'react';
import "./AboutBanner.scss";
import about from '../../assets/AboutBanner.png';

class AboutBanner extends Component {
    render() {
        return (
            <section className='aboutBanner'>
                <img src={about} alt='aboutBannerImg' className='aboutBannerImg'></img>
                <div className='aboutBannerWrapper'></div>
            </section>
        )
    }
}

export default AboutBanner;