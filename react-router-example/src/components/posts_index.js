import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    //called straight after display in DOM
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
