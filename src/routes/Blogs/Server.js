import React from 'react';

import EoFPadding from '../../components/EoFPadding';

import '../../css/Blog.css';


function ServerBlog() {
    return (
        <div className='blog-div'>

            <div>
                <h1 style = {{lineHeight:'1em'}}>Minecraft Server using AWS</h1>
                Jonathan Borghese<br/>
                July 17th, 2024
            </div>

            <p>This post outlines the steps in order to make a Minecraft server using Amazon's EC2 Service. Disclaimer, this will cost around $0.01 - $0.05 an hour to run depending on how strong you want it to be.</p>

            <p>The first thing you need to do is to setup an AWS root account. This can be done by going to <a href="https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Faws.amazon.com%2Fmarketplace%2Fmanagement%2Fsignin%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Faws-mp-seller-management-portal&forceMobileApp=0&code_challenge=qmJ48qfti6PxIiESuJqLdCw70Vu6b9fbgWLKIC46aMY&code_challenge_method=SHA-256"><u>AWS</u></a> and start the account creation process. The Root account can be used for this but it is best practice to make a user and do everything through that user instead.</p>

            <h2>Launch an EC2 Instance</h2>

            <p>Locate your name in the top left and then click <b>Your AWS Console.</b> You want to first want to select the region where you want the server to run. There are many different locations AWS offers to host your server, you should choose the one that is closest to you. I live in Virginia so I will be using <b>us-east-1</b> availability zone. Then use the search bar and search for <b>EC2.</b> Once you're on the EC2 service, navigate to the <b>Instances</b> section on the left side. Last, click <b>Launch Instances.</b></p>

            <p>You are now ready to configure your instance. Name the instance <b>My Minecraft Server</b> and make sure the OS is <i><b>Amazon Linux 2023 AMI.</b></i></p>

            <h3>Choosing Instance Type</h3>

            <p>By default, the instance type is <i><b>t2.micro</b></i>. In my experience, this is not strong enough to support even 2 players. I would go with at least <i><b>t2.small</b></i> or better depending on the number of expected players; however, this tier is not free and will cost ~$0.015 an hour.</p>

            <h2>Setup Minecraft Server on Instance</h2>

            <p>To start the server, navigate back to the Instance tab in EC2, click the checkmark next to your running instance, click the <i><b>Instance State</b></i> button near the top right and click <i><b>Start Instance.</b></i></p>
            <p>Note: To stop the instance, do the same thing but click <i><b>Stop Instance</b></i> instead. You are only billed for the time the instance is running so make sure to stop it whenever the server is not being used. </p>

            <h3>SSH into Instance</h3>

            <p>Here is the command for using ssh to access Instance:</p>

            <div className="code-snip">ssh -i (.pem filepath) ec2-user@(instance IPv4)</div>

            <p>This is where the Key Pair file comes into play. This file is used in place of a password.</p>

            <h3>EC2 Instance Connect</h3>

            <p>This is an alternative to SSH to access instance. Once an instance is running, select it and click the <b>Connect</b> button. Keep the default params and click Connect. You then have an online terminal to the instance.</p>

            <h3>Setting up Server</h3>

            <p>In the terminal, run the following commands:</p>

            <div className="code-snip">sudo yum install java</div>

            <p>This will install the latest version of java. This is necessary for running the server jar file.</p>

            <div className="code-snip">adduser minecraft<br/>
            sudo -i -u minecraft<br/>
            cd ~</div>

            <p>This adds a user called 'minecraft', changes to that user, and then changes directory to the home directory.</p>

            <p>The next thing to do is to install the minecraft server file that we will be running. You first need to find the link to the file download. This can be done by visiting <a href="https://www.minecraft.net/en-us/download/server"><u>Minecraft Java Server Download Page</u></a> and then copy the link address of the <i><b>minecraft_server.version.jar</b></i> file.</p>

            <p>Next, run this command:</p>

            <div className="code-snip">wget (server.jar link)</div>

            <p>This will download the file to your Instance in your current directory.</p>

            <p>All that needs to be done now is running it using this command:</p>

            <div className="code-snip">java -Xmx1024M -Xms1024M -jar minecraft_server.jar nogui</div>

            <p>Replace <i><b>minecraft_server.jar</b></i> with the name of your jar file as the version number changes the file name.</p>

            <p>The first time you run this, it will ask you to accept the EULA. This is done by changing the <i><b>False</b></i> to <i><b>True</b></i> in the EULA.txt file created.</p>

            <p>Once that's done, simply run the java command again and your good to go! Server commands can be typed out in the current terminal and the connection IP address is: <b>(Instance IPv4):25565</b></p>

            <p>Note: The IPv4 address will change every time the instance is shutdown and started again. There is a method for keeping a single IP address for an instance using something called <i><b>Elastic IPs.</b></i></p>


            <EoFPadding length='10' />
        </div>
    );
}

export default ServerBlog;