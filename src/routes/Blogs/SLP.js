import React from 'react'

import ImageWithText from '../../components/ImageWithText.js'
import EoFPadding from '../../components/EoFPadding.js'
import CodeBlock from '../../components/CodeBlock.js'

import '../../css/Blog.css'

const images = require.context('../../images/SLP_Blog', true);

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
          <img className="blog-slp-function-img" src={images('./Loss.svg')} alt="Loss"/>

          <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'flex-start', marginInline:'auto'}}>
            <img className="blog-slp-function-img" src={images('./Loss_Derivative_Derivation_1.svg')} alt="Loss_Derivative_Derivation_1" />
            <img className="blog-slp-function-img" src={images('./Loss_Derivative_Simplified.svg')} alt="Loss_Derivative_Simplified" />
          </div>
        </div>

        <p>This derivative is specific to our SLP and changes based on the structure, activation functions, and loss function used. For more complex networks with multiple layers, a technique called <i>Backpropagation</i> is used to efficiently calculate the derivative.</p>
        
        <p>Once the derivative of the Loss function has been calculated, the weights can be adjusted.</p>

        <ImageWithText image={images('./Weight_Update.svg')} width='500px' text="Weight adjustment is scaled by α, the learning rate." />

        <p>By subtracting the weights with their derivative, the Loss function decreases. A single <i>epoch</i> has passed once the entire training dataset has been used, however it takes many iterations over the dataset for the loss to converge.</p>
        
        <p>Gradient Descent is an art and there is a lot of nuance being left out for simplicity. I suggest reading about <i>Generalization</i>, <i>Stochastic Gradient Descent</i>, and <i>Learning Rate Scheduling</i> to learn more.</p>

        <p>Now let's put what we've learned to use!</p>

        <h3>Handwriting Predictor Example</h3>

        <p>In this example, a One-vs-Rest model is made to classify an image as one of the 10 digits. One-vs-Rest model means that there will be 10 different models, each outputting how confident it is that the input image is its particular digit.</p>

        <h4>Data Preparation</h4>

        <p>The <a href='https://www.kaggle.com/datasets/hojjatk/mnist-dataset'><i>MNIST database of handwritten digits</i></a> is the data set used. It consists of 70,000, 28x28 pixel images labeled and  partitioned into testing and training sets.</p>

        <p>The first thing we need to do is prepare the data. The input to the network is a 784 length array of each pixel's intensity (+1 for the bias term). The data is normalized so that each value ranges from [0, 1) rather than [0, 255).</p>

        <ImageWithText image={images('./Feature_Normalization.svg')} width='105%' text='A demonstration of how the data is normalized. Smaller sample images are used, the actual size of the data is 28x28' textWidth="50%"/>


        <p>Ten label vectors need to be made, one for each model. We want each network's output to be 1 for its corresponding digit and 0 otherwise. For example, the following labels would be used to train the model classifying 4.</p>

        <code>Y = [7, 2, 1, 0, 4, 1, 4, ...] → [0, 0, 0, 0, 1, 0, 1, ...]</code>

        <p>Now Gradient Descent is performed using the training set to calibrate the weights.</p>


        <CodeBlock code={`#   Gradient Decent Implementation
#   Features and Labels should be from the training set
def fit(self, training_features, training_labels, max_epochs=100, learning_rate=.01):
    
    # initialize weights
    d = len(training_features[0])
    w = np.random.normal(0.5, 0.2, size=(d,))

    for i in range(max_epochs):
        # every 10 epochs
        if i % 10 == 0:
            # learning rate step decay
            learning_rate *= .5

        # calculate prediction vector for entire dataset
        y_hat = self.forward_prop(training_features, w)

        # compute gradient with added weight constraints
        gradient = np.matmul(np.subtract(y_hat, training_labels), training_features) + w  

        # weight update
        w -= learning_rate * gradient

    return w`} />

        <p>Here are my results for each of the model's weights:</p>

        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', width:'100%', maxWidth:'100%'}}>
          <img src={images('./w_0.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_1.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_2.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_3.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_4.svg')} style={{width:'20%', height:'auto'}} alt="" />
          </div>
          <div>
          <img src={images('./w_5.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_6.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_7.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_8.svg')} style={{width:'20%', height:'auto'}} alt="" />
          <img src={images('./w_9.svg')} style={{width:'20%', height:'auto'}} alt="" />
          </div>
        </div>

        <p>These weight arrays are calibrated to detect a specific digit. Each pixel is a weight value with the brighter the pixels indicating larger values and darker pixels indicating negative values.</p>

        <p>Once the 10 networks are trained, an input feature can be fed into them to get their outputs. The softmax function is then used on the vector of outputs be able to interpret them as probabilities for each digit</p>

        <ImageWithText image={images('./Softmax.svg')} text='' width='500px' textWidth='50%' />

        <h4>Example:</h4>

        <ImageWithText image={images('./SLP_Flowchart.svg')} text='' width='100%' />

        <EoFPadding length='20' />
      </div>

    </>
  );
}

export default SLPBlog;