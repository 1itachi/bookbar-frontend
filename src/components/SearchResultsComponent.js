import React from "react";
import {Link} from "react-router-dom";
import t from "typy";
import './SearchResultsComponent.css'

export default class SearchResultsComponent extends React.Component {


    render() {
        return (
            <div className="search-results-color">
                &nbsp;
                <h1 className="carousel-style search-heading">Search Results:</h1>
                <div id="searchResultsContainer" className="py-5 px-5 card-group">
                    <div className="container">
                        <ul className="list-group">
                            <div className="row">
                                {
                                    this.props.books &&
                                    this.props.books.map(book =>
                                        <div
                                            className="col-sm-4 col-md-3">
                                            <Link
                                                to={`/bookDetails/${t(
                                                    book,
                                                    'volumeInfo.industryIdentifiers[0].identifier').safeObject}`}>
                                                <div
                                                    className="text-center card-fixed-size">
                                                    {book.volumeInfo.imageLinks.smallThumbnail
                                                    &&
                                                    <img
                                                        className="img-size"
                                                        src={book.volumeInfo.imageLinks.smallThumbnail}
                                                        alt=""/>}
                                                </div>
                                                <div
                                                    className="img-title text-center carousel-style">
                                                    <a>
                                                        {book.volumeInfo.title}
                                                    </a>
                                                </div>
                                                <button className="btn btn-block text-btn-color search-btn specific-btn-color">
                                                    <i className="fas fa-plus elem"></i>
                                                    &nbsp;
                                                    Add to Cart
                                                </button>
                                                <button className="btn btn-block btn-dark search-btn">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                    &nbsp;
                                                    Add to Wishlist
                                                </button>
                                            </Link>
                                            <br/>
                                            <br/>
                                        </div>
                                    )
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
