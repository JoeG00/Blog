import React, { Component } from 'react'
import {Link} from "react-router-dom"


export class Navigation extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">My Blog</Link>
                    <ul>
                    <Link to="/create">Create Post</Link>
                    <Link to="/"></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation
