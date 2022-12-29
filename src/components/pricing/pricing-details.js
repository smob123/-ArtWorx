import React, { Component } from 'react';

export default class PricingDetails extends Component {
    render() {
        return (
            <section className='prices-section flex-col light-bg'>

                <div className='pricing-container flex-col'>
                    <h1>Our Pricing</h1>

                    <div className='pricing-cards flex-col'>
                        <div className='card flex-col'>
                            <div className='top-container flex-col'>
                                <h3>Starter Plan</h3>
                                <h1>$19.99</h1>
                                <span>Per month</span>
                            </div>

                            <div className='bottom-container flex-col'>
                                <span>1GB free space</span>
                                <span>Real-time sync</span>
                                <span>Unlimited Attatchments</span>
                                <strike>Customize Themes</strike>
                                <strike>Priority email support</strike>
                                <button>Start Now</button>
                            </div>
                        </div>

                        <div className='card flex-col'>
                            <div className='top-container flex-col'>
                                <h3>Enterprise Plan</h3>
                                <h1>$49.99</h1>
                                <span>Per month</span>
                            </div>

                            <div className='bottom-container flex-col'>
                                <span>1GB free space</span>
                                <span>Real-time sync</span>
                                <span>Unlimited Attatchments</span>
                                <span>Customize Themes</span>
                                <strike>Priority email support</strike>
                                <button>Start Now</button>
                            </div>
                        </div>

                        <div className='card flex-col'>
                            <div className='top-container flex-col'>
                                <h3>Unlimited Plan</h3>
                                <h1>$89.99</h1>
                                <span>Per month</span>
                            </div>

                            <div className='bottom-container flex-col'>
                                <span>1GB free space</span>
                                <span>Real-time sync</span>
                                <span>Unlimited Attatchments</span>
                                <span>Customize Themes</span>
                                <span>Priority email support</span>
                                <button>Start Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}