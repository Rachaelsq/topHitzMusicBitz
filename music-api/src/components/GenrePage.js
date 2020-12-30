
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types'




//begin api key
const getTopGenreUrl = (genre) => {
    return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genre}&api_key=b9ae28ff7d11d36e24745fe48a729fb0&format=json`;
  };
  //end api key
  
  //react.useeffect to print out cards
  
  //begin Genre page
  const GenrePage = (({ location }) => {
    const fetchURL = getTopGenreUrl(location.pathname.replace("/", ""));
    //this fetchURL removes the / on the end of the path
    return (
      <>
        <h2>You are viewing genre {JSON.stringify(location.pathname)}</h2>
      </>
    );
  });
  //end Genre page



export default class Product extends Component {
render() {
    const { id, title, img, price, inCart } = this.props.GenrePage;
    return (
        <GenreWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                    {(value)=> (
                        <div
                            className="img-container p-5"
                            onClick= {()=>value.handleDetail(id)}
                            >
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                        </div>
                    )}
                </ProductConsumer>

        <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
                {title}
                </p>
                <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
                </h5>
            </div>
            </div>
        </GenreWrapper>
    );
    }
}

GenrePage.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};


const GenreWrapper = styled.div`
    .card {
      border-color: transparent;
      transition: all 1s linear;
    }
    .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all 1s linear;
    }
    &:hover {
      .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .card-img-top {
      transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
      transform: scale(1.2);
    }
    .cart-btn{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2 rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color:var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 1s linear;
    }
    .img-container: hover .cart-btn {
      transform: translate(0,0);
    }
    .cart-btn:hover{
      color: var(--mainBlue);
      cursor: pointer;
    }
`;












