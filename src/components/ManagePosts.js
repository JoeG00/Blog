import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {CreatePost} from './CreatePost'


export class ManagePosts extends Component {
    constructor(){
        super();
        this.state={
            posts:[],
            visible:false
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
    delete(id){
        fetch(`/api/${id}`, {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"

            }
        })
        .then(res => res.json())
        .then(data=> console.log(data))
        this.fetcharticles()
    }

    update(id){
        fetch(`/api/${id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"

            }
        })
        .then(res => res.json())
        .then(data=> console.log(data))
        this.toggle()
        this.fetcharticles()
    }

    toggle=()=>{
        console.log(!this.state.visible)
        this.setState({
            visible:!this.state.visible
        })

    }

    render() {
        return (
            <div>
                <div className="col s7">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{fontSize:40}}>Title</th>
                                </tr>
                            </thead>
                            <tbody style={ {fontSize:20}}> 
                            {
                                    this.state.posts.map(p=>{
                                    return (<tr key={p._id}>
                                        <td style={{width:500, height:50, fontSize:40}}>{p.title}</td>
                                        <td style={{display:'flex', margin:20}}> 
                                            <Button className="btn btn-danger btn-lg" onClick={()=> {this.delete(p._id)}}>Delete</Button>
                                        </td>
                                        <td>
                                        <Button className="btn-lg"  onClick={()=> {this.update(p._id)} }>Update</Button> 
                                        </td>
                                                                                
                                    </tr>)
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                    {this.state.visible && <CreatePost/>}
                
            </div>
        )
    }
}

export default ManagePosts
