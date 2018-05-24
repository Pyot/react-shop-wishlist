import React from 'react';
import './Wishlist.css';

class Wishlist extends React.Component {
    render(){
        if (this.props.wishList) {
            this.wishList = this.props.wishList;
        }

        return (
            <div className="col-md-12">
                <div className="row">
                <div  className="col-md-2 col-lg-2 mt-3">
                        <div className="card text-center">
                        <div className="card-body ">
                            <h5 className="card-title mt-4">My Wishlist</h5>
                        </div>
                        </div>
                    </div>
                {this.wishList.map(wish => {
                    return (
                    <div key={wish.pk} className="col-md-2 col-lg-2 mt-3">
                        <div className="card text-center">
                        <div className="card-body ">
                            <button onClick={this.props.deleteFromWishList.bind(this, wish.pk)}>X</button>
                            <img
                            className="img-thumbnail img-tumbnail-clean"
                            src={wish.image}
                            alt="gold-ring"/>
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

export default Wishlist;