import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Books from '../Books/BookList/books';
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
                     <Route path={"/books"} exact render={
                         () => <Books books={this.state.books} onDelete={this.deleteBook}/>
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

  loadCategories = () =>{
      LibraryService.fetchCategories()
          .then((data) =>{
              this.setState({
                  categories: data.data
              })
          })
  }

  deleteBook = (id) => {
      LibraryService.deleteBook(id)
          .then(()=>{
              this.loadBooks();
          })
  }

  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
  }
}

export default App;
