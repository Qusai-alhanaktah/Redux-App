import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../action/index.js';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    }
    handelChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    };
    handelSubmit = e => {
        e.preventDefault();
        const post = {
          title: this.state.title,
          body: this.state.body,
        }
        this.props.createPost(post)
    };
    
    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={this.handelSubmit}>
                    <label> Titel:  
                        <input name='title' type='text' placeholder='type post title' onChange={this.handelChange}/>
                    </label>
                    <br />
                    <label> Body:  
                        <input name='body' type='text' placeholder='type post Body' onChange={this.handelChange}/>
                    </label>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    post: state.posts.item
})
const mapDispatchToProps = { createPost };


export default connect(mapStateToProps, mapDispatchToProps)(Add)