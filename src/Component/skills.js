import React,{ Component, Fragment} from 'react';
import Header from '../header';
import Footer from '../footer';

class Skills extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                <div className="container-fluid mx-3 my-3">
                    <h3>Skills Acquired&rarr;</h3>
                </div>

                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                            <img src="https://www.quickstart.com/pub/media/magefan_blog/Free_Courses_to_learn_JavaScript.jpg" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png" className="card-img-top" alt="Palm Springs Road"/>                       
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://www.hostnextra.com/kb/wp-content/uploads/2021/01/4-steps-to-install-nodejs-on-ubuntu-20-04.png" className="card-img-top" alt="Los Angeles Skyscrapers"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" className="card-img-top" alt="Skyscrapers"/>
                            </div>
                        </div><br/>
                        <div className="col">
                            <div className="card">
                                <img src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg" classname="card-img-top" alt="image"/>
                            </div>
                        </div><br/>
                        <div className="col">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxRlMRbyYszSB9k_XDuD9c2fKMjIw4DLRdqEPDPbO0zdrlThC_P5mDa-o54URNYeiuJY&usqp=CAU" className="card-img-top" alt="img"/>
                            </div>
                        </div>
                        </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Skills;