import React, { Component } from 'react'
import './css/createpost.css'

export class CreatePost extends Component {
    constructor(props){
        super();
        
        
        this.state={
            title:"",
            author:"",
            content:"",
            articles:[],
            alttitle:''
        }
    
    }



    NewPost=(e) =>{
        e.preventDefault();
        fetch('/api/createpost', {
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                "Content-Type":'application/json'
            }
    
    })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

    HandleFields= (e)=> {
        
        this.setState({
           [e.target.name]:e.target.value,
        });

        console.log(this.state)

    }



    render() {
        return (
            <div className="container"> 
                
                {/* <h1>Create an article</h1> */}
                <input name="title" type="text" placeholder="Article title" onChange={this.HandleFields}/>
                <input name="author"  type="text" placeholder="Author" onChange={this.HandleFields}/>
                <input name="date" type="text" placeholder="Date" onChange={this.HandleFields}/>
                <textarea rows={10} cols={25} name="content" placeholder="Write your article here" onChange={this.HandleFields} ></textarea>
                <button type="submit" className="btn btn-primary" onClick={this.NewPost}>Publish</button>

            </div>
        )
    }
}

export default CreatePost
