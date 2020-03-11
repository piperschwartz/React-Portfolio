import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
           <Grid className='landing-grid'>
               <Cell col={12}></Cell>
                {/* <img 
                src="../IMG_9074.jpg"
                alt="avatar"
                className="avatar-img"
                /> */}

                <div className="banner-text">
                    <h1>Piper Schwartz</h1>
                    <hr/>
                    <h2 className="position-title">Full Stack Web Developer</h2>
                

                <p>HTML | CSS | Bootstrap | React | NodeJS | MongoDB | Materialize | MySQL | Javascript | Express</p>

                    {/* LinkedIn */}
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/piper-schwartz-60531071/"  rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                </div>

                     {/* LinkedIn */}
                <div className="social-links">
                    <a href="https://github.com/piperschwartz"  rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                </div>


                </div>
           </Grid>
        </div>

    )
   }
}

export default Landing;