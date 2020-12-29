//this page is going to be the parent container for each single product
import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product />
            </div>
        )
    }
}
