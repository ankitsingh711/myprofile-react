import React, { Component, Fragment } from 'react';
import Header from '../header';
import Footer from '../footer';
import './about.css';

class About extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col display-5 text-dark mx-5 my-5">
                                <h3>About<span id="arr">&rarr;</span></h3>
                                <br/>
                                <span>&rarr;&nbsp;&nbsp;Myself Ankit Singh the Full Stack Developer graduated from Shri Murali Manohar Town Degree College. I have done B.Sc from Mathematics along with that I have done Internship with Many Companies like Edureka and many more. </span><br/><br/>

                                <span>&rarr;&nbsp;&nbsp;I am starting it from my childhood that I was a very naughty child. I started my schooling at the age of 4 years only. My father admissioned me in the small school name in my village named Mother Teresa Convent School. I completed my stuudies starting from the PG to class 5th in that school only. </span><br/><br/>

                                <span>&rarr;&nbsp;&nbsp;After that I got admission in another school which was better than my previous school because there was a lot of curricular activities along with the studies are there in the school. In that  school I had done many extra curricular activites like playing cricket and Handwriting Competition. That was my first prize which I won during the handwriting Competition in my school getting the first rank in the whole school. I can't forget that priceless certificate. </span><br/><br/>

                                <span>&rarr;&nbsp;&nbsp;I completed my studies from class 6th to class 9th in that school only named Shemushi Vidyapeeth. After that I went Varanasi Uttar Pradesh preparing for IIT JEE and then I got admission in one of the top coaching institue in the India that is Super 30. After that I studied at Varanasi from 9th standard to 10th and after mt high schools, again I have to come to my village Home. I got only 68% in my high schools due to many Problems I faced in that two years in Varanasi. </span><br/><br/>

                                <span className="reveal">&rarr;&nbsp;&nbsp;And then I decided that I will first focus on my 12th board exam and after that I will think about others so I had done hard work in 12th standard for my boards. After hard work I got 77.2% in my 12th class and I was very happy because it was a inclination for me comparing from 10th class. </span><br/><br/>

                                <span className="reveal">&rarr;&nbsp;&nbsp;After that I take admissions in B.Sc Mathematics because I love Mathematics Subject and it is because of the reason I like logics and thats why I also want to achieve the best in the Coding carrier and then I had seen one ad on youtube one day of Edureka Full Stack Development Course then I instantly decided that I have to learn codings. I joined edureka program and built 2 projects like Zomato and Netflix and got Super Intern at the End. </span><br/><br/>

                                <div className="container">
                                    <img src="https://pngimage.net/wp-content/uploads/2018/05/about-png-images-5.png" alt="img"/>
                                </div>
                            </div>
                            <div className="col">
                                <img style={{margin:"0%",padding:"0%"}} src="https://www.linkpicture.com/q/mera_photo-removebg-preview.png" alt="mY_img" width="100%"/>
                                <div className="container-fluid display-4 text-light" style={{backgroundColor:"#022c42",boxShadow:"4px 4px 4px gray"}}>D.O.B &rarr; 23-07-2004</div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default About;