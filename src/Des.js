import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Des extends Component {

    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Link className="close-search" to='/main'>Close</Link>
                    <div className="list-books-des">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Description</h2>
                            <div className="bookshelf-books">
                                <div className="book-des">
                                    <div className="book-top-des">
                                    {/* Passing props through a <Link>
                                     /*https://stackoverflow.com/questions/45598854/passing-props-through-react-router-v4-link*/}
                                        <div className="book-cover-des" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.location.bookImage}")`}}>
                                        </div>
                                    </div>
                                    <h2 className="bookshelf-title">
                                        <div className="book-title-des">{`${this.props.params.title}`}</div>
                                    </h2>
                                    <h2 className="bookshelf-title">
                                        <div className="book-authors-des">{`${this.props.location.authors}`}</div>
                                    </h2>
                                        <div className="book-description-des">{`${this.props.params.info}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )            
    }
}

export default Des
