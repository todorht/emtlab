import React from 'react';
import {Link} from "react-router-dom";

const header = (props) => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
            <a className="navbar-brand" href="/books">Library application</a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className={"nav-item active"}><Link className={"nav-link"} to={"/books"}>Books</Link></li>
                <li className={"nav-item active"}><Link className={"nav-link"} to={"/categories"}>Categories</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default header;