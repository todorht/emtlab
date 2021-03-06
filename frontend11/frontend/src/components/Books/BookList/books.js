import React from 'react';
import BookTerm from '../BookTerm/bookTerm';
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom';

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            page: 0,
            size: 5
        }

    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div>
                <div>
                    <div>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Title</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}></th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}
                                className={""}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            const show = term.availableCopies;
            return (
                <BookTerm book={term} numBooks={show} onDelete={this.props.onDelete} takeBook={this.props.onTakeBook}/>
            );
        }).filter((books, index) => {
            return index>=offset && index < nextPageOffset;
        })
    }
}

export default Books;
