import React from 'react';
import {Link} from "react-router-dom";

const header = (props) => {
    return(
        <nav>
        <div>
            <ul>
                <li><Link to={"/books"}>Books</Link></li>
                <li><Link to={"/categories"}>Categories</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default header;