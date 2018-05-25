import React from 'react';
import './PaginationToolbar.css';

class PaginationToolbar extends React.Component {
  render() {

    return (
        <div id="PaginationToolbar" className="col-md-12">
            <div className="row d-flex align-items-center">
                <div className="col-md-8">Page 1 of 100</div>
                <div className="col-md-4 d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0">
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000">5</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="http://127.0.0.1:3000" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
  }
}

export default PaginationToolbar;