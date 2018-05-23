import React, { Component } from 'react';
import './App.css';

import CatalogProducts      from './components/CatalogProducts/CatalogProducts.jsx';
import CatalogFiltering     from './components/CatalogFiltering/CatalogFiltering.jsx';
import PaginationToolbar    from './components/PaginationToolbar/PaginationToolbar.jsx';
import Wishlist             from './components/Wishlist/Wishlist.jsx';

class App extends Component {
  state = {
    productList: []
  }

  constructor(props) {
    super(props);
    this.showProductList()
  }

  showProductList = () => {
    fetch('http://127.0.0.1:8000/api/products/')
    .then(
      (response) => {
        console.log(response)
        return response.json()
      })
    .then(
      (data) => {
        const productListNew = data;
        this.setState({
          productList: productListNew
        })
        console.log(this.state.productList)
      }
    )
    
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <PaginationToolbar />
        </div>
        <div className="row mt-2">
          <Wishlist />
        </div>
        <div className="row mt-2">
          <CatalogFiltering />
          <CatalogProducts
          productList = {this.state.productList}
          />
        </div>
      </div>
    );
  }
}

export default App;
