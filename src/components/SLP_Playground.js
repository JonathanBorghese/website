import React from 'react';

import Button from '@mui/material/Button';

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

class SLPPlayground extends React.Component {

    constructor(props) {
        super(props);

        this.prob = Array(10);

        for (let i = 0; i < this.prob.length; i++) {
            this.prob[i] = 0;
        }

        this.state = {
            prob: this.prob
        };
    }

    componentDidMount() {
        this.ctx = this.myRef.getContext('2d', { willReadFrequently: true});
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

        dots.forEach((element, i) => this.prob[i] = Math.exp(element))

        let denom = 0;
        for (let i = 0; i < this.prob.length; i++) {
            denom += this.prob[i];
        }

        for (let i = 0; i < this.prob.length; i++) {
            this.prob[i] /= denom;
        }

        this.setState((prevState) => ({
            prob: this.prob
        }));
    }

    render() {

        this.prob = Array(10);

        const can = 
            <div>

                <div style={{display:'flex', justifyContent:'center'}}>
                    <div ref={(e) => this.myDiv = e} className='Canvas'>
                        <canvas ref={(e) => this.myRef = e} onMouseDown={this.mouseDown.bind(this)} onMouseMove={this.mouseOver.bind(this)} onMouseUp={this.mouseUp.bind(this)} onMouseEnter={this.mouseEnter.bind(this)} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', marginTop:'auto', marginBottom:'auto', marginRight:'0px', width:'auto', height:'15em', lineHeight:'1.5em'}}>
                        <div>P(0)={this.state.prob[0].toFixed(2)}</div>
                        <div>P(1)={this.state.prob[1].toFixed(2)}</div>
                        <div>P(2)={this.state.prob[2].toFixed(2)}</div>
                        <div>P(3)={this.state.prob[3].toFixed(2)}</div>
                        <div>P(4)={this.state.prob[4].toFixed(2)}</div>
                        <div>P(5)={this.state.prob[5].toFixed(2)}</div>
                        <div>P(6)={this.state.prob[6].toFixed(2)}</div>
                        <div>P(7)={this.state.prob[7].toFixed(2)}</div>
                        <div>P(8)={this.state.prob[8].toFixed(2)}</div>
                        <div>P(9)={this.state.prob[9].toFixed(2)}</div>
                    </div>
                </div>

                <span style={{display:'flex', justifyContent:'center'}}>
                    <Button variant='outlined' onClick={this.clear.bind(this)}>Clear</Button>
                    <Button variant='contained' onClick={this.run.bind(this)}>Run</Button>
                </span>
                
            </div>

        return can
    }

}

export default SLPPlayground;
