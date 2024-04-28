import React from 'react';

class EoFPadding extends React.Component {

    render() {

        const space = Array(parseInt(this.props.length)).fill(<br></br>)

        return <div>
            {space}
        </div>
    }
}

export default EoFPadding;