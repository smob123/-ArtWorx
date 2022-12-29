import React, { Component } from 'react';

export default class OurBlog extends Component {
    render() {
        return (
            <section className='our-blog-section flex-col'>
                <div className='txt-container flex-col'>
                    <h1>Our Blog</h1>
                    <span>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                        Semantics, a large language ocean.
                    </span>
                </div>

                <div className='blogs flex-col'>
                    <div className='blog flex-col'>
                        <img src={require('../../images/home/our-blog/img1.jpg')} alt='design-trends' />
                        <h1>Latest Design Trends</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </span>
                    </div>
                    <div className='blog flex-col'>
                        <img src={require('../../images/home/our-blog/img2.jpg')} alt='sales' />
                        <h1>2019 Sales</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </span>
                    </div>
                    <div className='blog flex-col'>
                        <img src={require('../../images/home/our-blog/img3.jpg')} alt='optimize-your-website' />
                        <h1>SEO Friendly Website</h1>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}