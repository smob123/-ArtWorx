import React, { Component } from 'react';
import Header from '../components/general/header';
import Background from '../images/home/header/background.jpg';
import Services from '../components/home/services';
import OurWork from '../components/home/our-work';
import Features from '../components/home/features';
import Technologies from '../components/home/technologies';
import OurBlog from '../components/home/our-blog';
import OurPartners from '../components/home/our-partners';
import Footer from '../components/home/footer';

export default class Home extends Component {
    render() {
        return (
            <div className='main-container'>
                <div>
                    <Header title='Creative Design'
                        subtitle='Far far away, behind the word mountains. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                        image={Background} />
                </div>

                <div>
                    <Services />
                </div>

                <div>
                    <OurWork />
                </div>

                <div>
                    <Features />
                </div>

                <div>
                    <Technologies />
                </div>

                <div>
                    <OurBlog />
                </div>

                <div>
                    <OurPartners />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}