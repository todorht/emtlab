import React from 'react';
import {Link} from "react-router-dom";

const bookTerm = (props) => {

    const tag = (numBooks) =>{
        if (numBooks>0 ) return <a title={"MarkAsTaken"} className={"btn btn-outline-primary"}
                                         onClick={()=>props.takeBook(props.book.book_id)}>Take a Book</a>
        return null;
    }

    return(
            <tr>
                <td>{props.book.name}</td>
                <td>{props.book.author.name + " " + props.book.author.surname}</td>
                <td>{props.book.category}</td>
                <td>{props.book.availableCopies}</td>
                <td>
                    {tag(props.book.availableCopies)}
                    <a title={"Delete"} className={"btn btn-danger"}
                        onClick={() => props.onDelete(props.book.book_id)}
                    >Delete</a>
                    <Link className={"btn btn-info"}
                        onClick={() => props.onEdit(props.book.book_id)}
                        to={`/books/edit/${props.book.book_id}`}>
                        Edit
                    </Link>
                </td>
            </tr>
    )

}

export default bookTerm;