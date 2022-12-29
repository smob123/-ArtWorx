import React, { Component } from 'react';
import Nav from '../navigation/nav';

export default class Header extends Component {

    componentDidMount() {
        //set the header's background image based on the passed props
        const header = document.querySelector('.header');
        header.style['background-image'] = `url(${this.props.image})`;
    }

    render() {
        return (
            <div className='header'>
                <Nav />
                <div className='content flex-col'>
                    <span>{this.props.title}</span>
                    {this.props.subtitle ?
                        <span>{this.props.subtitle}</span>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}