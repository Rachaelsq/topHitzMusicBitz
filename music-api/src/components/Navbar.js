import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import sparkle from './sparkle.png'
import styled from 'styled-components'




export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <Link to="/">
                    <img src={sparkle} alt="store" className="navbar-brand"/>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            genres
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
    




    
            </nav>
        )
    }
}
