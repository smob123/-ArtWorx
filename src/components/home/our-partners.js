import React, { Component } from 'react';

export default class OurPartners extends Component {
    render() {
        return (
            <section className='our-partners-section flex-col dark-bg'>
                <h1>Our Partners</h1>
                <div className='logos flex-row'>
                    <div>
                        <img src={require('../../images/home/our-partners/img1.png')} alt='barber' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-partners/img2.png')} alt='tiger-coffee' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-partners/img3.png')} alt='the-burher-shack' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-partners/img4.png')} alt='palms-hotel' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-partners/img5.png')} alt='casala-restaurant' />
                    </div>
                </div>
            </section>
        );
    }
}