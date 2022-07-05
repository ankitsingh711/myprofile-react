import React, { Component, Fragment } from 'react';
import './contact.css';
import Header from '../header';
import Footer from '../footer';

class Contact extends Component{

    render(){
        return(
            <Fragment>
                <Header/>

                <div className="float-left my-5 mx-1 ">
                    <a  target="_blank" href="https://github.com/ankitsingh711">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://www.linkedin.com/in/ankit-singh-422980227/">
                    <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="linked in" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://www.youtube.com/itsankitsingh">
                    <img src="https://www.pngmart.com/files/20/Youtube-Logo-PNG-HD.png" alt="youtube" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://stackoverflow.com/users/17924891/ankit-singh">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111640.png" alt="stackoverflow" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://www.quora.com/profile/Ankit-Singh-14104">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/quora-12-761707.png" alt="quora" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://www.instagram.con/itssankitsingh">
                    <img src="https://p.kindpng.com/picc/s/1-19853_instagram-logo-black-transparent-instagram-logo-black-png.png" alt="instagram" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://www.facebook.com/profile.php?id=100004977828705">
                    <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png" alt="facebook" width="40px"/>
                    </a><br/>
                    <a className='my-2' target="_blank" href="https://twitter.com/ItsAnkit5ingh">
                            <img src="https://www.witness.org/wp-content/uploads/2018/11/5a2fe479cc45e43754640849.png" alt="twitter" width="40px"/>
                    </a><br/><br/>
                            
                </div>

                <div id="main" className="container text-light bg-dark">
                    <div className="row">
                        <div className="col">
                            <div id="heads" className="container">
                            <h3 className='font-weight-bold'><i className="fa-solid fa-phone-missed"></i>Contact Me</h3>
                            </div>
                            <form id="form">
                                <div className="form-outline mb-4">
                                <input type="text" id="form4Example1" className="form-control" placeholder='Type Your Name...' />
                                <label className="form-label" for="form4Example1" >Name</label>
                                </div>


                                <div className="form-outline mb-4">
                                <input type="email" id="form4Example2" className="form-control" placeholder='Type Your Email...' />
                                <label className="form-label" for="form4Example2">Email address</label>
                                </div>


                                <div className="form-outline mb-4">
                                    <textarea className="form-control" id="form4Example4" rows="4" placeholder='Type Your Messgae...'></textarea>
                                    <label className="form-label" for="form4Example4">Message</label>
                                </div>

                                
                                <button type="submit" className="btn btn-light btn-block mb-4">Send</button>
                                <label className="form-label">You can Directly Mail</label>
                                <a href="mailto:itsankitsingh711@gmail.com" className="btn btn-light btn-block mb-4">itsankitsingh711@gmail.com</a>
                                
                            </form>

                            <div classname="container display-5">
                                <h4 className="font-weight-bold">Address</h4> &rarr; 395-A Village + Post : Majhauwa, Ballia(U.P)
                            </div>

                            <iframe className='mx-3' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635689.793072721!2d80.8833819!3d27.141237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656915425749!5m2!1sen!2sin" width="500" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div id="myimg" className="col">
                            <img src="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  width="100%"/> 
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Contact;