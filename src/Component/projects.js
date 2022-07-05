import React, { Component, Fragment } from 'react';
import Header from '../header';
import Footer from '../footer';

class Projects extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="container-fluid display-5">
                        <h3>&rarr;Projects</h3>
                    </div>
                    <div className="card card-image"
                    style={{backgroundImage: "url(https://w3hubs.com/wp-content/uploads/2021/06/Netflix-Home-Page-In-Bootstrap-5Home-1600x581.png)"}}>

                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                            <h3 className="card-title pt-2"><strong>Netflix Project</strong></h3>
                            <p>This is a Netflix clone website in which you can visit my website and take every advantage of the websites same as that available on Netflix Original Websites ! This project is completed within just 2 months interval of time. </p>
                            <a target="_blank" href="https://netflixankit.netlify.app/" className="btn" style={{backgroundColor:"red",color:"white"}}><i className="fas fa-clone left"></i> View project</a>
                            </div>
                    </div>
                    </div>

                    <br/>

                    <div className="card card-image"
                    style={{backgroundImage: "url(https://www.linkpicture.com/q/zomato-ss.png)"}}>

                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                            <h3 className="card-title pt-2"><strong>Zomato Project</strong></h3>
                            <p>This is a Zomato clone website in which you can visit my website and take every advantage of the websites same as that available on Zomato Original Websites ! This project is completed within just 2 months interval of time. </p>
                            <a target="_blank" href="https://zomatoappankit2.netlify.app/" className="btn btn-danger"><i className="fas fa-clone left"></i> View project</a>
                            </div>
                    </div>
                    </div>
                </div>

                <Footer/>
            </Fragment>
        )
    }
}

export default Projects;