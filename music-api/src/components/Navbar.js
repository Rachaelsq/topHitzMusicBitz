import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import sparkle from './sparkle.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark">
                <Link to="/">
                    <img src={sparkle} alt="home" className="navbar-brand"/>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item ml-5">
                        <Link to="/genrepage" className="nav-link">
                            genres
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item ml-5">
                        <Link to="/productlist" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>    
{/* 
                <Link className="ml-auto" to="/cart">
            <ButtonContainer>
                            my cart
            </ButtonContainer> 
        </Link> */}
            </NavWrapper>
        )
    }
}


//styled component

const NavWrapper = styled.nav`
background: rgb(138,22,220, 0.5);
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
padding 0 0;
padding-right: 15px;
max-height: 70px;
display: flex;
    align-content: center;
    justify-content: center;
.nav-link {
        color: white !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        transition: all 0.5s ease-in-out;
    &:hover{
        background: #3a2cb9;
        border-radius: 3px;
        color: white;
    }
    }
`



