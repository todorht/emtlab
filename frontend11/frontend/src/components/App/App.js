import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Books from '../Books/BookTerm/bookTerm';
import Header from '../Header/header'
import Categories from '../Categories/categories'
import LibraryService from "../../repository/libraryRepository";


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        categories: []
    }
  }

  render() {
    return(
        <Router>
            <Header/>
            <main>
                <div>
                    <h1>Online Library</h1>
                     <Route path={"/books"} exact render={
                         () => <Books books={this.state.books}/>
                     }/>
                    <Route path={"/categories"} exact render={
                        () => <Categories categories={this.state.categories}/>
                    }/>
                     <Redirect to={"/books"}/>
                </div>
            </main>
        </Router>
        );
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
        .then((data) =>{
          this.setState({
            books: data.data
          })
        })
  }

  // loadCategories = () =>{
  //     LibraryService.fetchCategories()
  //         .then((data) =>{
  //             this.state({
  //                 categories: data.data
  //             })
  //         })
  // }

  componentDidMount() {
    this.loadBooks();
     // this.loadCategories();
  }
}

export default App;
