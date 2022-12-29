import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../router/with-router';

let mainNav, topBar; //the navigation, and top bar elements
let displayed = true; //checks if navigation is visible when browsing on mobile devices
const paths = ['/', '/portfolio', '/pricing']; //the different pages on the website

class Nav extends Component {

    componentDidMount() {
        mainNav = document.querySelector('.main-nav');
        topBar = document.querySelector('.top-bar');

        this.setActive();
        this.stickyNav();
        this.getDeviceWidth();
    }

    /*
    * highlights the current page we are on, in the navigation elements
    */
    setActive() {
        //get the new page's pathname
        const newPath = window.location.pathname;
        //get its index from the array
        const newPathIndex = paths.indexOf(newPath);
        //create a querySelector for that element
        const newActive = document.querySelectorAll('.main-nav span')[newPathIndex];

        if (newActive) {
            //add the active class from that element
            newActive.classList.add('active');
        }
    }

    /*
     * makes the top bar stick to the top of the screen while scrolling down
     */
    stickyNav() {
        //create a scroll event
        window.addEventListener('scroll', () => {
            //once the user scrolls 90% of the header
            if (window.pageYOffset >= window.innerHeight * 0.9) {
                //make the top bar stick to the top of the window
                topBar.classList.add('fixed');
            } else {
                //otherwise put the top bar back in its original place
                topBar.classList.remove('fixed');
            }
        });
    }

    getDeviceWidth() {
        if (window.innerWidth < 600) {
            this.displayNav();
        }

        this.windowResize();
    }

    /*
    * a window resize event to handle displaying the navigation div in case the window gets resized
     */
    windowResize() {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 600 && !displayed) {
                this.displayNav();
            }
        });
    }

    displayNav() {
        if (!displayed) {
            mainNav.classList.remove('hidden');
        } else {
            mainNav.classList.add('hidden');
        }

        displayed = !displayed;
    }

    render() {
        return (
            <div className='top-bar flex-row'>
                <div className='title-container'>
                    <Link to='/'>
                        <span>ArtWorx</span>
                    </Link>
                </div>

                <div className='nav-container'>
                    <div className='phone-nav' onClick={() => this.displayNav()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='main-nav'>

                        <span>
                            <Link to='/'>
                                Home
                            </Link>
                        </span>
                        <span>
                            <Link to='/portfolio'>
                                Portfolio
                            </Link>
                        </span>
                        <span>
                            <Link to='/pricing'>
                                Pricing
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav);
