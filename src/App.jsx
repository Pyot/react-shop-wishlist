import React, { Component } from 'react';
import './App.css';

import CatalogProducts      from './components/CatalogProducts/CatalogProducts.jsx';
import CatalogFiltering     from './components/CatalogFiltering/CatalogFiltering.jsx';
import PaginationToolbar    from './components/PaginationToolbar/PaginationToolbar.jsx';
import Wishlist             from './components/Wishlist/Wishlist.jsx';

class App extends Component {
  state = {
    productList: [],
    wishList: []
  }

  constructor(props) {
    super(props);
    this.showProductList();
    this.showWishList()

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


  showWishList = () => {
    fetch('http://127.0.0.1:8000/api/showwishlist/')
    .then(
      (response) => {
        console.log(response)
        return response.json()
      })
    .then(
      (data) => {
        const wishListNew = data;
        this.setState({
          wishList: wishListNew
        })
        console.log(this.state.wishList)
      }
    )
  }





  addToWishList = (pk, stock_number, e) => {
    e.preventDefault();

      let checkWishItem = this.state.wishList.findIndex((wish) => {
        console.log("wish", wish.stock_number);
        return wish.stock_number === stock_number;
      });
      if (checkWishItem === -1) {

        let url = 'http://127.0.0.1:8000/api/wishlist/';
        fetch(url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({'name': pk})
        })
        .then((response) => {
          console.log(response)
          return response.json();
          
        })
    

        let index = this.state.productList.findIndex((product) => {
          return product.pk === pk;
        });
        let product = this.state.productList[index];

        this.setState({
          wishList: [...this.state.wishList, product]
        })

      }
  }

  deleteFromWishList = (pk, e) => {
    let url = 'http://127.0.0.1:8000/api/wishlist/'+pk+'/';
        fetch(url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "DELETE",
          body: JSON.stringify({'name': pk})
        })
       


       
        const indexToDelete = this.state.wishList.findIndex((product) => {
          return product.pk === pk;
        })

        

        this.setState({
          wishList: this.state.wishList.filter((_, i) => i !== indexToDelete)
        });


     
       
  }


  // addToWishList = ()
 

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <PaginationToolbar />
        </div>
        <div className="row mt-2">
          <Wishlist 
          wishList = {this.state.wishList}
          deleteFromWishList = {this.deleteFromWishList}
          />
        </div>
        <div className="row mt-2">
          <CatalogFiltering />
          <CatalogProducts
          productList = {this.state.productList}
          addToWishList ={this.addToWishList}
          />
        </div>
      </div>
    );
  }
}

export default App;
