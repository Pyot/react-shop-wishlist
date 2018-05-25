import React from 'react';
import './Wishlist.css';

class Wishlist extends React.Component {
    render(){
        if (this.props.wishList) {
            this.wishList = this.props.wishList;
        }

        return (
            <div className="col-md-12">
                <div className="row row-border pt-2 pb-2">
                    <div className="col-md-2 col-lg-2 d-flex align-items-center">
                        <h5>My Wishlist</h5>
                    </div>
                    {this.wishList.map(wish => { return (
                    <div key={wish.pk} className="col-md-2 col-lg-2 mt-2 mb-2">
                        <div className="card text-center">
                            <div className="card-body ">
                                <button onClick={this.props.deleteFromWishList.bind(this, wish.pk)} className="btn btn-sm btn-outline-secondary d-flex">&#10006;</button>
                                <img className="img-thumbnail img-tumbnail-clean" src={wish.image} alt={wish.product_name} />
                            </div>
                        </div>
                    </div>
                    ) })}
                </div>
            </div>
        )
    }

}

export default Wishlist;