import React, { Component } from 'react';

export default class OurWork extends Component {
    render() {
        return (
            <section className='our-work-section flex-col dark-bg'>
                <h1>Our Recent Work</h1>

                <div className='flex-col'>
                    <div>
                        <img src={require('../../images/home/our-work/img1.jpg')} alt='work1' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-work/img2.jpg')} alt='work2' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-work/img3.jpg')} alt='work3' />
                    </div>
                    <div>
                        <img src={require('../../images/home/our-work/img4.jpg')} alt='work4' />
                    </div>
                </div>
            </section>
        );
    }
}