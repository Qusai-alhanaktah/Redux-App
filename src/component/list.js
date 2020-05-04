import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/index.js';

class List extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
    }
    render() {
        const results =  this.props.posts.map(item => {
            return <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        });
        return (
            <div>
                {results}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
const mapDispatchToProps = { fetchPosts };
export default connect(mapStateToProps, mapDispatchToProps)(List);
