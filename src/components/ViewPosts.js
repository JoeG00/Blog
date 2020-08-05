import React, { Component } from 'react'
import "./css/viewposts.css"


export class ViewPosts extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        this.fetcharticles()
    }


    fetcharticles= ()=>{
        fetch('/api')
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data.reverse()})
        })
        console.log(this.state.posts)

    }

    update=() =>{
        console.log("1")

    }
    delete=() =>{
        console.log("2")


    }
    


    render() {
        
        return (
            <div className="container">
                <div className="article">
                    {/* <button onClick={this.fetcharticles}>Clickme</button> */}
                </div>
                
                <div className="all-articles">
                    {this.state.posts.map(post=>(
                        <div className="individual-article">
                            <ul key={post.id}>
                                <li><h1>{post.title}</h1></li>
                                <li><p>{post.createdAt}</p></li>
                                <li> <h3>{post.author}</h3></li>
                                <li><p>{post.content}</p></li>
                            </ul>
                        </div>
                        ))}
                </div>

                
            </div>
        )
    }
}

export default ViewPosts

