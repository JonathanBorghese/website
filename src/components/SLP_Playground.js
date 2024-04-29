import React from 'react';

import w0 from './SLP_Data/w0.js';
import w1 from './SLP_Data/w1.js';
import w2 from './SLP_Data/w2.js';
import w3 from './SLP_Data/w3.js';
import w4 from './SLP_Data/w4.js';
import w5 from './SLP_Data/w5.js';
import w6 from './SLP_Data/w6.js';
import w7 from './SLP_Data/w7.js';
import w8 from './SLP_Data/w8.js';
import w9 from './SLP_Data/w9.js';

import '../css/Component.css';

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

class SLPPlayground extends React.Component {

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

    mouseEnter() {
        this.draw = false;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.myRef.width, this.myRef.height);
    }

    run() {
        const partition_w = 28;
        const partition_h = 28;

        const grid_unit_x = Math.round(this.myRef.width / partition_w);
        const grid_unit_y = Math.round(this.myRef.height / partition_h);

        const X = Array(partition_w * partition_h + 1);

        for (let i = 0; i < partition_w; i++) {

            for (let j = 0; j <partition_h; j++) {

                const data = this.ctx.getImageData(i * grid_unit_x, j * grid_unit_y, grid_unit_x, grid_unit_y).data;

                let val = 0;
                for (let k = 3; k < data.length; k += 4) {
                    if (data[k] !== 0) {
                        val += 1;
                    }
                }

                val /= data.length / 4;

                X[(j * partition_w) + i] = val;
            }
            X[X.length - 1] = 1
        }

        this.predict(X);
    }

    predict(X) {
        const dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

        const weights = [w0, w1, w2, w3, w4, w5, w6, w7, w8, w9];

        let dots = Array(weights.length);

        weights.forEach((element, i) => dots[i] = dot(element, X));

        let prediction = indexOfMax(dots);

        console.log(dots)

        console.log("Number: ", prediction)
    }

    render() {

        const can = 
            <div>
                <div ref={(e) => this.myDiv = e} className='Canvas'>
                    <canvas ref={(e) => this.myRef = e} onMouseDown={this.mouseDown.bind(this)} onMouseMove={this.mouseOver.bind(this)} onMouseUp={this.mouseUp.bind(this)} onMouseEnter={this.mouseEnter.bind(this)} />
                </div>

                <span>
                    <button onClick={this.clear.bind(this)}>Clear</button>
                    <button onClick={this.run.bind(this)}>Run</button>
                </span>
                
            </div>

        return can
    }

}

export default SLPPlayground;
