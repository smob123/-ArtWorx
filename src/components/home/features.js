import React, { Component } from 'react';

export default class Features extends Component {
    render() {
        return (
            <section className='features-section flex-col light-bg'>
                <div className='txt-container'>
                    <div className='top-container'>
                        <h1>Tons of Features</h1>
                        <span>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                    </span>
                    </div>

                    <div className='bottom-container'>
                        <span>
                            <span className='orange'>&#10004;</span>
                            &nbsp; Far far away, behind the word mountains.
                        </span>

                        <span>
                            <span className='orange'>&#10004;</span>
                            &nbsp; Far far away, behind the word mountains.
                        </span>

                        <span>
                            <span className='orange'>&#10004;</span>
                            &nbsp; Far far away, behind the word.
                        </span>

                        <span>
                            <span className='orange'>&#10004;</span>
                            &nbsp; Far far away.
                        </span>

                        <span>
                            <span className='orange'>&#10004;</span>
                            &nbsp; Far far away, behind.
                        </span>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={require('../../images/home/features/img1.png')} alt='mobile-app' />
                </div>
            </section>
        );
    }
}