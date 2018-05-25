import React from 'react';
import './CatalogProducts.css';

class CatalogProucts extends React.Component {
  render() {

    if (this.props.productList) {
      this.productList = this.props.productList;
    }
    return (
      <div id="CatalogProducts" className="col-md-9">
        <div className="row">
          {this.productList.map(product => {
              return (
                <div key={product.pk} className="col-md-4 col-lg-3 mt-3">
                  <div className="card text-center">
                    <div className="card-body ">
                      <img
                        className="img-thumbnail img-tumbnail-clean"
                        src={product.image}
                        alt="gold-ring"/>
                      <h6 className="card-title mt-4">{product.brand_name}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">{product.product_name}</h6>
                      <button onClick={this.props.addToWishList.bind(this, product.pk, product.stock_number)} className="btn btn-sm btn-outline-secondary mt-4">&#9825; Add</button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default CatalogProucts;