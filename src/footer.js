import React, { Component } from "react";

class Footer extends Component{

    render(){
        return(
                <footer className="text-center text-light" style={{backgroundColor:"#171612",marginTop:"5rem"}}>
                    <div className="container display-5">
                    </div>
                    <div className="container pt-4">
                        <section className="mb-4">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://twitter.com/ItsAnkit5ingh"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i className="fab fa-twitter"></i
                        ></a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.youtube.com/itsankitsingh"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i className="fab fa-youtube"></i
                        ></a>
                        <a
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.instagram.com/itssankitsingh"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i className="fab fa-instagram"></i
                        ></a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.linkedin.com/in/ankit-singh-422980227/"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i className="fab fa-linkedin"></i
                        ></a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://github.com/ankitsingh711"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i className="fab fa-github"></i
                        ></a>
                        </section>
                        Thanks for visiting to my portfolio website and I hope you liked this and enjoyed this journey to my website.<br/>
                        Majhauwa,Ballia (U.P) Pin.Code- 277403
                    </div>
                    <div className="text-center p-3">
                        © 2022 Copyright: Ankit Singh
                    </div>
                    </footer>
        )
    }
}

export default Footer;