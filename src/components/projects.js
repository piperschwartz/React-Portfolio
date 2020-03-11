import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";
import Background1 from '../components/Foodle.png';
import Background2 from '../components/Ideaboard.png';
import Background3 from '../components/Fitnesstracker.png';
import Background4 from '../components/budget.png';
import Background5 from '../components/Notetaker.png';
import Background6 from '../components/burgerapp.png';
import Background7 from '../components/employeetrack.png';
import Background8 from '../components/weather.png';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        /*Group Projects */
    if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background1}) center / cover`}}></CardTitle>
           <CardText>
           This is a group project done as our first Group Project in Coding Bootcamp. We all worked on it equally as a team, and had a blast creating this app.
           </CardText>
           <CardActions border>
               <Button colored>
               <a href="https://github.com/piperschwartz/Project-One.git/" target="_blank" rel="noopener noreferrer">GitHub</a>
               </Button>
               <Button colored>
               <a href="https://piperschwartz.github.io/Project-One/" target="_blank" rel="noopener noreferrer">Deployed App</a>
                </Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share' />
           </CardMenu>
            </Card>

            {/* Project 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background2}) center / cover`}}></CardTitle>
        <CardText>
            This was the second Group Project done as an assignment in Coding Bootcamp. It is an Idea Board to track our ideas, thoughts, tasks, etc.
            </CardText>
        <CardActions border>
             <Button colored>
             <a href="https://github.com/kellyjones-jpg/Project-Two.git/" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
             <Button colored>
                <a href="https://secret-shelf-67225.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name='share' />
        </CardMenu>
        </Card>
        </div>
        )

          /*Express */
      } else if(this.state.activeTab === 1) {
          return(
            <div className="projects-grid">
                {/* App 1*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background5}) center / cover`}}></CardTitle>
           <CardText>
               A simple note taking app. It adds notes, and deletes them.
           </CardText>
           <CardActions border>
               <Button colored>
               <a href="https://github.com/piperschwartz/Note-Taker.git/" target="_blank" rel="noopener noreferrer">GitHub</a>
               </Button>
               <Button colored>
               <a href="https://serene-garden-12542.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a>
                </Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share' />
           </CardMenu>
            </Card>

            {/* App 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background6}) center / cover`}}> Project 2</CardTitle>
        <CardText>
            This app was an assignment using express handlebars and mysql to add burgers, and move them to devoured list when devoured.
            </CardText>
        <CardActions border>
             <Button colored>
             <a href="https://github.com/piperschwartz/burger.git/" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
             <Button colored>
                <a href="https://burgerjaws.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name='share' />
        </CardMenu>
        </Card>
        </div>
          )

            /*Mongoose */
      } else if(this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
            {/* App 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background3}) center / cover`}}></CardTitle>
           <CardText>
               This app is a fitness tracker. You can create a new workout for resistance or cardio.
           </CardText>
           <CardActions border>
               <Button colored>
               <a href="https://github.com/piperschwartz/Fitness-Tracker.git/" target="_blank" rel="noopener noreferrer">GitHub</a>
               </Button>
               <Button colored>
               <a href="https://whispering-chamber-33784.herokuapp.com/?id=5e4d858e76ccbf0017a18032/" target="_blank" rel="noopener noreferrer">Deployed App</a>
                </Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share' />
           </CardMenu>
            </Card>

            {/* App 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background4}) center / cover`}}> </CardTitle>
        <CardText>
        An app to track your budget and finances. You can add, subtract, and see using the graph the ups and downs of your budget over time.
            </CardText>
        <CardActions border>
             <Button colored>
             <a href="https://github.com/piperschwartz/Progressive-Budget.git/" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
             <Button colored>
                <a href="https://agile-fortress-21441.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name='share' />
        </CardMenu>
        </Card>
        </div>
        )

        /*Other Apps */
        }else if(this.state.activeTab === 3) {
            return(
                 <div className="projects-grid">
            {/* App 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background7}) center / cover`}}></CardTitle>
           <CardText>
               This is an app that is used in terminal to make an employee directory, and add, update, remove the employees. 
           </CardText>
           <CardActions border>
               <Button colored>
               <a href="https://github.com/piperschwartz/Employee-Tracker.git" target="_blank" rel="noopener noreferrer">GitHub</a>
               </Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share' />
           </CardMenu>
            </Card>

            {/* App 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background8}) center / cover`}}> </CardTitle>
        <CardText>
            Using OpenWeatherApi, I created a Weather Dashboard where you can search by City. 
            It shows current weather conditions, and a 5 day forecast.
            </CardText>
        <CardActions border>
             <Button colored>
             <a href="https://github.com/piperschwartz/Weather-Dashboard.git" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
             <Button colored>
                <a href="file:///Users/piperschwartz/Coding/Weather-Dashboard/index.html/" target="_blank" rel="noopener noreferrer">Deployed App</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name='share' />
        </CardMenu>
        </Card>
        </div>
            )
        }
    }

    render() {
    return(
        <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Group Projects</Tab>
            <Tab>Express</Tab>
            <Tab>Mongoose</Tab>
            <Tab>Other Projects</Tab>
           </Tabs>

           <Grid>
                   <Cell col={12}>
                       <div className="content">{this.toggleCategories()}</div>
                   </Cell>
           </Grid>
        </div>

    )
    }
}

export default Projects;