import React from 'react';

import '../css/Component.css';

class Canvas extends React.Component {

    componentDidMount() {
        this.ctx = this.myRef.getContext('2d');
        let div = this.myDiv.getBoundingClientRect();

        this.myRef.width = div.width;
        this.myRef.height = div.height;
    }

    mouseDown() {
        this.draw = true;
    }

    mouseUp() {
        this.draw = false;
    }

    mouseOver(e) {
        if (!this.draw) { return; }

        let div = this.myDiv.getBoundingClientRect();

        this.ctx.fillRect(e.clientX - div.x, e.clientY - div.y, 10, 10);
    }

    buttonClicked() {
        this.ctx.clearRect(0, 0, this.myRef.width, this.myRef.height);
    }

    render() {

        const can = 
            <div>
                <div ref={(e) => this.myDiv = e} className='Canvas'>
                    <canvas ref={(e) => this.myRef = e} onMouseDown={this.mouseDown.bind(this)} onMouseMove={this.mouseOver.bind(this)} onMouseUp={this.mouseUp.bind(this)} />
                </div>

                <button onClick={this.buttonClicked.bind(this)} >Clear</button>
            </div>

        return can
    }

}

export default Canvas;

/*
const drawing = Array(28);
for (let i = 0; i < drawing.length; i++) {
    drawing[i] = Array(28);

    for (let j = 0; j < drawing[i].length; j++) {
        drawing[i][j] = 0;
    }
}
console.log(drawing)

const Canvas = (props) => {

    const canvasRef = React.useRef(null);

    const [curr_drawing, setDrawing] = React.useState(drawing);

    const drawArray = (ctx) => {
        console.log('draw array');

        let width = canvasRef.current.width;
        let height = canvasRef.current.height;

        let width_p = width / drawing.length;
        let height_p = height / drawing[0].length;

        for (let i = 0; i < drawing.length; i++) {
            for (let j = 0; j < drawing[i].length; j++) {

                if (drawing[i][j] !== 0) {
                    // draw regin on canvas
                    let posx = width_p * i;
                    let posy = height_p * j;

                    ctx.fillRect(posx, posy, width_p, height_p);
                }

            }
        }
    };

    React.useEffect(() => {
        const context = canvasRef.current.getContext('2d');

        drawArray(context);
    }, [curr_drawing]);


    const startPosition = (e) => {
        console.log('mouse down');
        // convert pos in canvas to pos in array
        drawing[0][0] = 1;
        setDrawing(drawing);
    }


    return <span style={{display:'flex', justifyContent:'center'}}>
            <canvas className='Canvas' ref={canvasRef} onMouseDown={startPosition} {...props} />
        </span>
}

export default Canvas;
*/