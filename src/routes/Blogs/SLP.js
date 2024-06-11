import React from 'react';

import {BrowserView} from 'react-device-detect';

import ImageWithText from '../../components/ImageWithText.js';
import EoFPadding from '../../components/EoFPadding.js';
import CodeBlock from '../../components/CodeBlock.js';
import SLPPlayground from '../../components/SLP_Playground.js';

import '../../css/Blog.css'

const images = require.context('../../images/SLP_Blog', true);

function SLPBlog() {
  return (
    <>
      <div className='blog-div'>
        <div>
          <h1 style={{lineHeight:'1em'}}>Introduction to Single Layer Perceptrons</h1>
          Jonathan Borghese<br></br>
          April 29th, 2024
        </div>

        <p>Machine Learning simply put is the art of approximating functions. Say you want to predict the price of a house given its size, age, location. How much do these variables effect the price of the house? These relationships between variables are what an <i>artificial neural network (ANN)</i> "learns" and manifests through the <i>weights</i> of the network.</p>

        <ImageWithText image={images('./SLP.svg')} text='Structure of a Single Layer Perceptron' width='400px'/>

        <p>This is a single layer perceptron, the simplest form of an ANN. It consists of the input layer, followed by a single layer of neurons for the output layer. I The input, X, is scaled by the weights, W, which are then added up and sent to an activation function, σ, to get the predicted output.</p>

        <p>Here are some common examples of activation functions:</p>

        <div style={{display:'flex', justifyContent:'center'}}>
          <ImageWithText image={images('./Sigmoid.svg')} text='Sigmoid Activation Function. Used in output layers for binary classification cases' width='90%' textWidth='90%'/>
          <ImageWithText image={images('./Relu.svg')} text='Rectified Linear Unit. Typically used in hidden layers' width='90%' textWidth='90%'/>
        </div>

        <p>The activation functions used depend on the application of the network. A <i>sigmoid</i> or <i>tanh</i> activation function may be used for binary classification cases because of their clamped outputs. For multi-classification, the <i>softmax</i> function is a popular option as its outputs can be interpreted as probabilities for each class.</p>

        <p>The training process involves modifying the weights of a network in order to fit the data given to it. Single layer networks can classify datasets that are linearly separable, however, if hidden layers are introduced, non-linear relationships can be found as well. But how does the network "learn" the optimal weight vectors? That is where Gradient Descent comes in.</p>

        <h2>Gradient Descent</h2>

        <p>Gradient Descent is a method of minimizing a function by iteratively subtracting the input by the gradient, which lowers the output. The function that is minimized is called the <i>Loss function</i> and the input to the loss function are the weights. The loss function quantifies how well the network is performing, expressed as a number. <b>Mean Square Error (MSE)</b>, function is a popular choice among neural networks.</p>

        <div style={{display:'flex', justifyContent:'center'}}>
          <ImageWithText image={images('./MSE.svg')} text='Mean Squared Error loss' width='400px' />
          <ImageWithText image={images('./CrossEntropy.svg')} text='Muli-Class Cross Entropy loss' width='90%' />
        </div>

        <p>Say for example we have 100 data points and their expected output, the MSE would be the average difference between the expected output and the output of the network, squared. The closer the output of the network is to expected output, the lower the overall loss is. By minimizing the loss function, we are maximizing the network's correct outputs.</p>

        <p>Gradient descent requires the derivative of the loss function with respect to the weights. Here is the derivation for the example network:</p>

        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <img className="blog-slp-function-img" src={images('./Loss.svg')} alt="Loss"/>

          <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'flex-start', marginInline:'auto'}}>
            <img className="blog-slp-function-img" src={images('./Loss_Derivative_Derivation_1.svg')} alt="Loss_Derivative_Derivation_1" />
            <img className="blog-slp-function-img" src={images('./Loss_Derivative_Simplified.svg')} alt="Loss_Derivative_Simplified" />
          </div>
        </div>

        <p>This derivative is specific to our SLP and changes based on the structure, activation functions, and loss function used. For more complex networks with multiple layers, a technique called <i>Backpropagation</i> is used to efficiently calculate the derivative. The direction of the gradient is the part we are most interested in; the magnitude of the gradient is scaled by the <i>Learning Rate</i> of the model.</p>

        <ImageWithText image={images('./Weight_Update.svg')} width='500px' text="Weight adjustment is scaled by α, the learning rate" />

        <p>By subtracting the weights with their derivative, the Loss function decreases. Single inputs, mini-batches, or even the entire dataset can be used to calculate the gradient at a time. One <i>epoch</i> has passed once the entire training dataset has been used for gradient calculations. To train a network, it takes many epochs for the loss to stabilize. Eventually, a minima will be reached <i style={{fontSize:'.75em'}}>(or close to it).</i></p>
        
        <p>Gradient Descent is an art and there is a lot of nuance being left out for simplicity. I suggest reading about <i>Generalization</i>, <i>Stochastic Gradient Descent</i>, and <i>Learning Rate Scheduling</i> to learn more.</p>

        <h3>Weight Constraints</h3>

        <p>One last thing needed to be explained is the use of weight constraints. </p>

        <p>Now let's put what we've learned to use!</p>

        <h2>Handwriting Digit Classifier</h2>

        <p>Let's try to make an ANN model that can tell which digit has been written down. The first step is choosing the architecture of the model. The input will be an array of pixel intensities and the output should be a probability vector of the classes. The <i>softmax</i> activation function is a good fit as it excels with classification problems. Last, <i>argmax</i> chooses the class with the hights probability.</p>

        <ImageWithText image={images('./NetworkDiagram.svg')} width='100%' text='' />

        <h3>Data Preparation</h3>

        <p>The <a href='https://www.kaggle.com/datasets/hojjatk/mnist-dataset'><i>MNIST database of handwritten digits</i></a> is the data set used. It consists of 70,000, 28x28 pixel images labeled and  partitioned into testing and training sets.</p>

        <p>The first thing we need to do is prepare the data. The input to the network is a 784 length array of each pixel's intensity (+1 for the bias term). The data is normalized so that each value ranges from [0, 1) rather than [0, 255).</p>

        <ImageWithText image={images('./Feature_Normalization.svg')} width='105%' text='A demonstration of how the data is normalized. The actual image size is 28x28' textWidth="50%"/>


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
        gradient = np.matmul(np.subtract(y_hat, training_labels), training_features)  

        # weight update
        w -= learning_rate * gradient

        # weight constraint
        w = w / np.sqrt(np.sum(w**2))

    return w`} />

        <a href='https://github.com/JonathanBorghese/SLP_Playground'>Github Repository</a>

        <span style={{display:'flex', justifyContent:'center'}}>
          <p style={{alignSelf:'center'}}>Here is a visual representation of each model's weights:</p>
        </span>

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

        <p>These weight arrays are calibrated to detect a specific digit. The dot product between the input image and the weights is taken. The greater the overlap between the weights, the larger the result is. The vector of all 10 results is then fed into the <i>softmax</i> function which outputs a probability vector. Last, the digit with the highest probability is selected as the class.</p>

        <ImageWithText image={images('./SLP_Flowchart.svg')} text='The more overlap there is between the input feature, X, and the weights, W, the larger the output number is and the higher the resulting probability' width='100%' />
        <br />

        <BrowserView>

          <span style={{display:'flex', justifyContent:'center'}}><h1>Try it yourself!</h1></span>

          <SLPPlayground width='500' />
        </BrowserView>

        <p>These outputs can be further improved by processing the input image. The training images were all scaled and centered to the canvas, so the model is only trained to classify images processed the same way.</p>

        <h3>Final Thoughts</h3>

        <p>You might notice that the <i>Softmax</i> activation function used for the output layer is not necessary as the largest resulting dot product will also result in the largest probability. This is true for this network because of its simplicity, however, most models are non-linear and this may not hold anymore.</p>

        <p>Hopefully I've given some understanding of how neural networks work. There are ML libraries that make creating and training models much easier. I would suggest <i>Tensorflow</i> or <i>Scikit Learn</i> for your ML adventures.</p>

        <p>Fun Fact, according to the <b>Universal Approximation Theorem</b>, any function can be represented as an artificial neural network! <i style={{fontSize:'.75em'}}>(given enough complexity)</i></p>

        <EoFPadding length='10' />
      </div>
    </>
  );
}

export default SLPBlog;