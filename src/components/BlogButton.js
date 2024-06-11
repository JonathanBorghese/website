import React from 'react';

import '../css/Component.css';

class BlogButton extends React.Component {

    render() {


        return <>

        <div className='blog-button'>
            {this.props.title}
        </div>
        
        </>
    }

}

export default BlogButton;