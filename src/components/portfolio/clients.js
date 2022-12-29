import React, { Component } from 'react';

export default class Clients extends Component {
    render() {
        return (
            <section className='client-section flex-col light-bg'>
                <h1>Our Clients</h1>

                <div className='client-cards flex-col'>
                    <div className='client flex-row'>
                        <img src={require('../../images/portfolio/clients/img1.jpg')} alt='client' />
                        <div className='txt-container'>
                            <h4>John Smith</h4>
                            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
                        </div>
                    </div>

                    <div className='client flex-row'>
                        <img src={require('../../images/portfolio/clients/img2.jpg')} alt='client' />
                        <div className='txt-container'>
                            <h4>Mike Jones</h4>
                            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
                        </div>
                    </div>

                    <div className='client flex-row'>
                        <img src={require('../../images/portfolio/clients/img3.jpg')} alt='client' />
                        <div className='txt-container'>
                            <h4>John Doe</h4>
                            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}