import React from 'react'

import ImageWithText from '../../components/ImageWithText.js'

import '../../css/Blog.css'

const images = require.context('../../images/SLP_Blog', true)

function SLPBlog() {
  return (
    <>
      <div className='blog-div'>
        <div>
          Jonathan Borghese<br></br>
          April 27th, 2024
        </div>

        This Shit is Fucked
        <div style={{Display:'flex', justifyContent:'center'}}>
          SLP Blog
        </div>

        <h3>Introduction</h3>

        <p>Machine Learning Techniques are essentially function approximations. Say you want to predict the price of a house given its size, age, location. What you are really looking for is the correlation between each input on the output. This correlation is represented through the <i>weights</i> of an ANN.  </p>

        <ImageWithText image={images('./SLP.svg')} text='Structure of a Single Layer Perceptron' width='400px'/>

        <p>This is a single layer perceptron, the simplest form of a neural network consisting of a single neuron. The input, X, is scaled by the weights, W, which are then added up and sent to activation function, σ, to get the predicted output.</p>

        <ImageWithText image={images('./Sigmoid.svg')} text='Activation functions are added to ANN nodes to introduce non-linearity and to format the outputs.' width='400px' textWidth='50%'/>

        <p>By modifying the weights, this network can classify any dataset that is linearly separable. If the architecture was more complex, this network could classify datasets that are not linearly separable. In fact, according to the <i>Universal Approximation Theorem</i>, <b>any</b> function can be represented as a neural network! In order to utilize this potential, the weights of the network need to be calibrated. That is where Gradient Descent comes in.</p>

        <h3>Gradient Descent</h3>

        <p>Gradient Descent is a method of minimizing a function by iteratively subtracting the gradient. The function that is minimized is called the Loss function. This function quantifies how well the network is performing. <b>Mean Square Error (MSE)</b>, function is a popular choice among neural networks.</p>

        <ImageWithText image={images('./MSE.svg')} text='Mean Squared Error loss function' width='400px' />

        <p>Say for example we have 100 data points and their expected output, the MSE would be the average difference between the expected output and the output of the network, squared. The closer the output of the network is to expected output, the lower the overall loss is. By minimizing the loss function, we are maximizing the network's correct outputs.</p>

        <p>Gradient descent requires the derivative of the loss function with respect to the weights. Here is the derivation for the example network:</p>

        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <img className="blog-img" src={images('./Loss.svg')} alt="Loss"/>

          <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'flex-start', marginInline:'auto'}}>
            <img className="blog-img" src={images('./Loss_Derivative_Derivation_1.svg')} alt="Loss_Derivative_Derivation_1" />
            <img className="blog-img" src={images('./Loss_Derivative_Simplified.svg')} alt="Loss_Derivative_Simplified" />
          </div>
        </div>

        <p>This derivative is specific to our SLP and changes based on the structure, activation functions, and loss function used. For more complex networks with multiple layers, a technique called <i>Backpropagation</i> is used to efficiently calculate the derivative. Once the derivative of the Loss function has been calculated, the weights can be adjusted.</p>

        <ImageWithText image={images('./Weight_Update.svg')} width='500px' text="Weight adjustment is scaled by α, the learning rate." />

        <p>By subtracting the weights with their derivative, the Loss function decreases. A single <i>epoch</i> has passed once the entire training dataset has been used, however it takes many iterations over the dataset for the loss to converge.</p>
        
        <p>Gradient Descent is an art and there is a lot of nuance being left out for simplicity. I suggest reading about <i>Generalization</i>, <i>Stochastic Gradient Descent</i>, and <i>Learning Rate Scheduling</i> to learn more.</p>

        <h3>Handwriting Predictor Example</h3>

        <p>Now let's put what we've learned to use!</p>

        <p>In this example, we will be making a One-vs-Rest model to classify an image as one of the 10 digits. Each model will be an SLP using a MSE loss function with a Sigmoid activation function. Each model will determine if the current image is the selected digit or not. For example, there will be a model just to see if the digit is 0.</p>

        <h4>Data Preparation</h4>

        <p>The first thing we need to do is prepare the data. The input to the network is a 785 length array of each pixel's intensity, including a bias term. The data is normalized so that each value ranges from [0, 1) rather than [0, 255).</p>

        <ImageWithText image={images('./Feature_Normalization.svg')} width='105%' text='A demonstration of how the data is normalized. Smaller sample images are used, the actual size of the data is 28x28' textWidth="50%"/>


        <p>We also prepare the label vector for each of the 10 models. We want each model to output 1 for its corresponding digit and 0 otherwise. For example, we want our function predicting '3' to output 1 for every label that is 3 and output 0 otherwise.</p>

        <code>Y = [7, 2, 1, 0, 4, 1, 4, ...] → [0, 0, 0, 0, 1, 0, 1, ...]</code>

        <p>Now we iteratively scale the weights by the gradient to train the model. Here is the pseudo code:</p>


        <div className='pseudo-code'>
          <code>
            (show python code here)
          </code>
        </div>

        <p> regularization 
          added to discourage large weights and have better generalization
        </p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


      </div>
    </>
  );
}

export default SLPBlog;