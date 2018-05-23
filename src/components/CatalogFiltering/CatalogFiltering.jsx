import React from 'react';
import './CatalogFiltering.css';

class CatalogFiltering extends React.Component {
    render(){
        return (
            <div className="col-md-3">
                <div id="Categories" className="mt-5">
                    <div className="list-group-title">
                        <h5 className="font-weight-bold">Categories</h5>
                    </div>
                    <ul className="list-group mt-4">
                        <li className="list-group-item">Bangles</li>
                        <li className="list-group-item">Braclets</li>
                        <li className="list-group-item">Bridal Sets</li>
                        <li className="list-group-item">Charms</li>
                        <li className="list-group-item">Errings</li>
                        <li className="list-group-item">Engagement Rings</li>
                        <li className="list-group-item">Necklaces</li>
                        <li className="list-group-item">Pendants</li>
                        <li className="list-group-item">Rings</li>
                        <li className="list-group-item">Watches</li>
                        <li className="list-group-item">Wedding Bands</li>
                    </ul>
                </div>
                <div id="Designers" className="mt-5">
                    <div className="list-group-title">
                        <h5 className="font-weight-bold">Designers</h5>
                    </div>
                    <ul className="list-group mt-4">
                        <li className="list-group-item">Benchmark</li>
                        <li className="list-group-item">Chamilia</li>
                        <li className="list-group-item">Chrysalis</li>
                        <li className="list-group-item">Ed Levin</li>
                        <li className="list-group-item">Endless Jewelery</li>
                        <li className="list-group-item">Gabriel &amp; Co.</li>
                        <li className="list-group-item">Nonora</li>
                        <li className="list-group-item">Lashbrook Designs</li>
                        <li className="list-group-item">Le Vian</li>
                        <li className="list-group-item">Officina Bernardi</li>
                        <li className="list-group-item">YCH</li>
                        <li className="list-group-item">Zeghani</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default CatalogFiltering;