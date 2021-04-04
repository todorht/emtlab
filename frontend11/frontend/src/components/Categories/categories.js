import React from "react";

const categories = (props) => {
    return(
        <div>
            <div >
                <div >
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((item) => {
                            return(
                                <tr>
                                    <td>{item}</td>
                                </tr>
                            )
                        } )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default categories;