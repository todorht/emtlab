import React from 'react';

const bookTerm = (props) => {

    return(
            <tr>
                <td>{props.name}</td>
                <td>{props.author.name + " " + props.author.surname}</td>
                <td>{props.category}</td>
            </tr>
    )

}

export default bookTerm;