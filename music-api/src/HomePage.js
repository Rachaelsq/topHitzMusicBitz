import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {ButtonContainer} from './Button';



export default class Cart extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron ">
                <div class="container">
                    <h1 class="display-4" id="homeTitle">Welcome to Top Hitz</h1>
                        <p class="lead" id="jumbotronParagraph">
                       Here you can learn about the best music hits in each genre!
                        </p>
                        <button type="button" class="btn btn-info" id="bootstrapButton">Get Started!</button>
               
                </div>            
                </div>
            </div>
        )
    }
}
