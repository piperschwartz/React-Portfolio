import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
    return(
        <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
                  <h2>Piper Schwartz</h2>
                  <img src={require('../components/myAvatar.png')} alt="avatar" />

                  <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to reach out to me by email, phone, or LinkedIn.</p>
              </Cell>
              <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>


            <div className="contact-list">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-github-square" aria-hidden="true" />
                        <a href="https://github.com/piperschwartz" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                       </ListItemContent>
                    </ListItem>

                    <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                       <a href="www.linkedin.com/in/piper-schwartz-60531071" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                       </ListItemContent>
                    </ListItem>

                    <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                     <i className="fa fa-envelope-square" aria-hidden="true" /> 
                
                     piperschwartz@aol.com
                       </ListItemContent>
                    </ListItem>
            </List>
            </div>
            
              </Cell>
          </Grid>
        </div>

    )
    }
}

export default Contact;