import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component{
    state = {
        post: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
            console.log(res)
        })
        
    }

    render(){

        const post = this.state.post ? (
            <div className='center'>
                <h4 style={{color: 'blue'}}>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ): (
            <div className='center'>Loading posts...</div>
        )
        return(
            <div className='container'>
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post