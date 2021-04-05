import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () =>{
        return axios.get("/books");
    },
    fetchCategories: () =>{
        return axios.get("/categories");
    },
    deleteBook: (id)=>{
        return axios.delete(`/books/delete/${id}`);
    }
}

export default LibraryService;