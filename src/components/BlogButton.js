import React from 'react';

import '../css/Component.css';

import { Link } from 'react-router-dom';

class BlogButton extends React.Component {

    render() {


        return <>

        <Link className='blog-button' to={this.props.to}>
            <b>{this.props.title}</b>
        </Link>
        
        </>
    }

}

export default BlogButton;