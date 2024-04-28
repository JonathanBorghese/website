import React from 'react';

class EoFPadding extends React.Component {

    render() {

        let count = 0;
        const space = Array(parseInt(this.props.length)).map((x) => {<br key={count++} />})

        return <div>
            {space}
        </div>
    }
}

export default EoFPadding;