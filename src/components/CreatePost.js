import React, { Component } from 'react'
import './css/createpost.css'

export class CreatePost extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            author:""
        }
        this.articles=[]
    }

    NewPost(e){
        fetch('/ed')
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

    HandleFields(e){
        this.articles.push(e.target.value)
        console.log(this.articles)

    }



    render() {
        return (
            <div className="container"> 
                
                <h1>Create an article</h1>
                <input name="title" type="text" placeholder="Article title" onChange={this.HandleFields}/>
                <input name="author" value={this.state.author} type="text" placeholder="Author" onChange={this.HandleFields}/>

                <textarea rows={10} cols={25} placeholder="Write your article here"></textarea>
                <button type="submit" className="btn btn-primary" onClick={this.NewPost}>Publish</button>

            </div>
        )
    }
}

export default CreatePost
