import React from 'react';

const bookTerm = (props) => {

    return(
            <tr>
                <td>{props.book.name}</td>
                <td>{props.book.author.name + " " + props.book.author.surname}</td>
                <td>{props.book.category}</td>
                <td>
                    <a title={"Delete"} className={"btn btn-danger"}
                        onClick={() => props.onDelete(props.book.book_id)}
                    >Delete</a>
                </td>
            </tr>
    )

}

export default bookTerm;