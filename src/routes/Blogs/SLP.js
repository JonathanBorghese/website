import React from 'react'

import ImageWithText from '../../components/ImageWithText.js'

import '../../css/Blog.css'

const images = require.context('../../images/SLP_Blog', true)

function SLPBlog() {
  return (
    <>
      <h1>SLP</h1>

      <div className='blog-div'>

        <h3>Introduction</h3>

        <p>Machine Learning Techniques are essentially function approximations. Say you want to predict the price of a house given its size, age, location. What you are really looking for is the correlation between each input on the output. This correlation is represented through the `weights` of an ANN.  </p>

        <ImageWithText image={images('./SLP.svg')} text='Structure of SLP' width='400px'/>

        <p>A single layer perceptron is the simplest form of a neural network. It is a network that consists of a single neuron with the features fed directly into it scaled by weights. By modifying the weights, this function can classify any dataset that is linearly separable. According to the <i>Universal Approximation Theorem</i>, any function can be represented as a neural network! In order to utilize this potential, the weights of the network need to be calibrated. That is where Gradient Descent comes in.</p>

        <h3>Gradient Descent</h3>

        <p>Gradient Descent is a method of minimizing a function by iteratively subtracting the gradient. The function that is minimized is called the Loss function. This function quantifies how well the network is performing. Mean Square Error (MSE), function is a popular choice among neural networks.</p>

        <ImageWithText image={images('./MSE.svg')} text='Mean Squared Error loss function' width='400px' />

        <p>Say for example we have 100 data points and their expected output, the MSE would be the average difference between the expected output and the output of the network, squared. The closer the output of the network is to expected output, the lower the overall loss is. By minimizing the loss function, we are maximizing the network's correct outputs.</p>

        <p>In order to take advantage of gradient descent, the derivative of the loss function needs to be calculated. Here is the derivation for the example network:</p>

        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <img className="blog-img" src={images('./Loss.svg')} alt="Loss"/>

          <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'flex-start', marginInline:'auto'}}>
            <img className="blog-img" src={images('./Loss_Derivative_Derivation_1.svg')} alt="Loss_Derivative_Derivation_1" />
            <img className="blog-img" src={images('./Loss_Derivative_Derivation_2.svg')} alt="Loss_Derivative_Derivation_2" />
            <img className="blog-img" src={images('./Loss_Derivative_Simplified.svg')} alt="Loss_Derivative_Simplified" />
          </div>
        </div>

        <p>A technique called <i>Backpropagation</i> is used to efficiently calculate the derivative of the loss function for each weight with more complex models. Once the derivative of the Loss function has been calculated, the weights can be adjusted.</p>


        <ImageWithText image={images('./Weight_Update.svg')} width='500px' text="Weight adjustment is scaled by α, the learning rate." />

        <p>This weight update can take a single data point or multiple all at once. The only difference is instead, the functions work with vectors instead of scalers</p>

        <h3>Handwriting Predictor Example</h3>

        <p>In this example, we will be making a One-vs-Rest model to classify an image as one of the 10 digits. Each model will be an SLP using a MSE loss function with a Sigmoid activation function. Each model will determine if the current image is the selected digit or not. For example, there will be a model just to see if the digit is 0.</p>

        <h4>Data Preparation</h4>

        <p>The first thing we need to do is prepare the data. We are doing a One vs Rest model so each classification needs its own model to determine how probable the output is for that class. The first thing we can do is to normalize the feature vector so that each value ranges from [0, 1) rather than [0, 255).</p>

        (show normalized vectors)

        <p>The input to the model is a 28x28 picture that is represented as a 1d array</p>
        
        
        <p>We also prepare the label vector for each of the 10 models. We want each model to output 1 for its corresponding digit and 0 otherwise. For example, we want our function predicting '3' to output 1 for every label that is 3 and output 0 otherwise.</p>

        <code>[7, 2, 1, 0, 4, 1, 4, 9, ...] → [0, 0, 0, 0, 1, 0, 1, 0, ...]</code>

      </div>
    </>
  );
}

export default SLPBlog;