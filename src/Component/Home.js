import React, { Component, Fragment } from 'react';
import Header from '../header'
import { Link } from 'react-router-dom';
import Footer from '../footer';
import './home.css';


class Home extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div  className='col-sm my-5'>

                        {/* <!-- Back to top button --> */}
                        <button type="button" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
                        <i class="fas fa-arrow-up"></i>
                        </button>

                            <audio id="my_audio" src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a" autoPlay={true} loop={false} onload={true}></audio>

                            <div className='container text-align-center display-4 mx-5'>
                                Ankit Singh
                            </div><br/>

                            <div className='container display-5 mx-5'>
                            <h3 id="para">&#1548;&#1548;</h3>Passionate Full Stack Engineer with 1 year of hands on experience in developing scalable websites using a wide range of front-end and back-end skills like HTML5, CSS3, Bootstrap(3,4,5), JavaScript, MongoDB, NodeJS and Heroku,etc.Built 4 MERN websites and it is live also. Now looking forward to work in a bigger companies and want to contribute with my skills.  <h3>&#44;&#44;</h3>
                            </div><br/>

                            <section className='mx-5'>
                                <a href="#explore" type="button" className="btn btn-outline-gray btn-rounded waves-effect">Explore</a>
                            </section>

                        </div>

                        {/* My Photo  */}

                        <div className='col-sm'>
                            <div id="photo" className='container'>
                                <img src="https://www.linkpicture.com/q/ankit-removebg-preview.png" width="100%" alt="my-profile"/>
                                
                            <div id="full-stack" className="container display-5 bg-dark text-light mx-4">Certified: Full Stack Engineer / Full Stack Developer having 1 Year as Experience.
                            </div>

                            </div>

                        </div>
                    </div>

                </div><br/><br/><br/>

                <div id="explore" className="container-fluid reveal">
                    <div className="row">
                        <div className="col">
                            <h3>Super Intern at Edureka&rarr;</h3>
                            <span>I was a Super Intern after completing the Internship with Edureka as a Full Stack Developer and I was a Super Intern because I worked very hard to achieve that milestone and I had completed the assignments, Projects, and many more at the fixed interval of time and I was a best performer during the internship with edureka. In the right side of the screen you can see my certificate which is glittering like a star but ask me that I have to work very hard to achieve that and I thinknow I can work in a company because it was a company based relevant experience which I got on Edureka. I had worked on yhe projects like Netflix and Zomato which is very tough to achieve a clone of Netflix and Zomato Websites.</span>
                        </div>
                        <div style={{boxShadow:"4px 4px 4px gray"}} className="col mx-3">
                            <img src="https://www.linkpicture.com/q/Edureka-Certificate-img.png"  alt="certificate" width="80%"/>
                        </div>
                    </div>
                </div>

                <div className='container-fluid my-5'/>
                    <div className="row">
                        <div className="col">
                            <div className="container reveal mx-2">
                                <video src="https://cdn.videvo.net/videvo_files/video/free/2013-05/large_watermarked/FuturisticGraphicsSet1_preview.mp4" controls={false} autoPlay="true" loop="true" width="100%"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container display-5 reveal">
                            <h3>Full Stack Developer Journey</h3>
                                &rarr;&nbsp;&nbsp;Full stack developers are computer programmers who are proficient in both front and back end coding. Their primary responsibilities include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.
                            </div>
                            <br/>
                            <div className="container reveal">
                                &rarr;&nbsp;&nbsp;I have done Internship with Edureka in my second year of graduation only and that internship was of 6 months duration. It started from the month of January 2022 and I got certificate of Super_Intern at end of july by completing and bulting 4 projects with the help of MERN stack developer. 
                            </div>
                            <br/>
                            <div className="container reveal">
                                &rarr;&nbsp;&nbsp;I am doing B.Sc from Mathematics Subject and I am doing B.Sc from Math Subject as I love logics and you know there are many logics in the mathematics subject and thats why I also love codings and I want to build my carrier in Codings. 
                            </div>
                        </div>
                    </div>
                <div/><br/><br/><br/>

                {/* Location div starts here */}

                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col reveal">
                            <h3>Studies</h3>
                        &rarr;&nbsp;&nbsp;I use to read in a small village when I was a child and then I have completed my Play group to class 5th studies in my village onlt and then I admissioned in a new bigger school than the previous one. I have learnt many things with the studies like playing chess and yes I love to play chess game as it is my favourite of all games. I completed my class 5th to 9th studies in the school and then I visited to Varanasi for the preparation of JEE. I got admission in Super 30 and then after that I have completed my class 12th studies with the 78%. Then I take admissions in SMMTD College Ballia and doing B.Sc from Mathematics because I love Mathematics. I have done Internship and built 4 to 5 Projects with the MERN stack development which is live also on the Internet.
                        </div>
                        <div className="col display-5 mx-5 reveal">
                            <video autoPlay="true" loop="true" controls={false} muted="true" src="https://cdn.videvo.net/videvo_files/video/free/2022-03/large_watermarked/220302_02_Books_4k_003_preview.mp4" width="100%"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;