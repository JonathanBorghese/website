import React from 'react';

import '../css/Component.css';


class ImageWithText extends React.Component {

    render() {
        return <div className="TextImageDiv">
            <img className="TextImage" src={this.props.image} alt="" style={{width:this.props.width}}/>
            <span className="TextImageSpan" style={{width:this.props.textWidth}}>{this.props.text}</span>
        </div>
    }

}

export default ImageWithText;
