import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <section className='footer-section flex-col'>
                <div>
                    <span>&copy; Copyright 2019. All Rights Reserved. ArtWorx.inc</span>
                </div>
                <div className='flex-row'>
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                    <FontAwesomeIcon icon={faTumblr} size='2x' />
                </div>
            </section>
        );
    }
}