import React from 'react'; 
import { Switch, Route } from 'react-router-dom';


import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';



const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/landingpage" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />




    </Switch>
)

export default Main;