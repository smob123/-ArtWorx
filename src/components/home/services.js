import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faRobot, faInfinity, faLifeRing } from '@fortawesome/free-solid-svg-icons';

export default class Services extends Component {
    render() {
        return (
            <section className='services-section flex-col'>
                <div className='txt-container flex-col dark-bg'>
                    <span>full service digital agency</span>
                    <span>Digital team, at your service</span>
                    <span>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at the
                         coast of the Semantics, a large language ocean. A small river
                          named Duden flows by their place and supplies it with the
                          necessary regelialia. It is a paradisematic country, in which
                          roasted parts of sentences fly into your mouth. Even the
                          all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life One day however a small line.
                    </span>
                </div>

                <div className='light-bg bottom-container flex-col'>
                    <div className='services flex-col'>
                        <div className='flex-col'>
                            <FontAwesomeIcon icon={faInfinity} size='4x' color='#f34141' />
                            <h2>Limitless possibilities</h2>
                            <span>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                             coast of the Semantics, a large language ocean.
                        </span>
                        </div>
                        <div className='flex-col'>
                            <FontAwesomeIcon icon={faRobot} size='4x' color='#f34141' />
                            <h2>Powered by AI</h2>
                            <span>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                             coast of the Semantics, a large language ocean.
                        </span>
                        </div>
                        <div className='flex-col'>
                            <FontAwesomeIcon icon={faLifeRing} size='4x' color='#f34141' />
                            <h2>24/7 Live Support</h2>
                            <span>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                             coast of the Semantics, a large language ocean.
                        </span>
                        </div>
                        <div className='flex-col'>
                            <FontAwesomeIcon icon={faDesktop} size='4x' color='#f34141' />
                            <h2>Fully Responsive</h2>
                            <span>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                             coast of the Semantics, a large language ocean.
                        </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}