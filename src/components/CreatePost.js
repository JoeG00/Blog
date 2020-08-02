import React, { Component } from 'react'
import './css/createpost.css'

export class CreatePost extends Component {
    render() {
        return (
            <div className="container"> 
                
                <h1>Create an article</h1>
                <input name="title" type="text" placeholder="Article title"/>
                <input name="title" type="text" placeholder="Author"/>

                <textarea rows={10} cols={25} placeholder="Write your article here"></textarea>
                <button type="submit" className="btn btn-primary">Publish</button>

            </div>
        )
    }
}

export default CreatePost
