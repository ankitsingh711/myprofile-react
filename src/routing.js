import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/Component/Home';
import Contact from './Component/contact';
import About from '../src/Component/about';
import Projects from '../src/Component/projects';
import Skills from '../src/Component/skills';

const Routing = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about"component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/skills" component={Skills}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;