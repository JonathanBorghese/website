import React from 'react';

class EoFPadding extends React.Component {

    render() {

        let count = 0;
        let a = Array(parseInt(this.props.length))
        for (let i = 0; i < this.props.length; i++) {
            a[i] = count++;
        }

        const space = a.map((x) => <br key={x} />)

        return <div>
            {space}
        </div>
    }
}

export default EoFPadding;