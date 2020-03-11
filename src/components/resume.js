import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
 
class Resume extends Component {
  render() {
      return(
         <div>
             <Grid>
                 <Cell col={4}>
                     <div style={{textAlign: 'center'}}>
                     <img src={require('../components/IMG_9074.jpg')} alt="avatar" className="avatar-img" />
                     </div>

                     <h2 style={{paddingTop: '2em', fontFamily: 'Anton'}}>Piper Schwartz</h2>
                     <h4 style={{color: 'grey', fontFamily: 'Oxygen'}}>Web Developer</h4>
                     <hr style={{borderTop: '3px solid purple', width:'50%'}} />
                    <section>
                     <p>I am originally from Oklahoma City, Oklahoma, but I spent the last 4 year in Perth, Western Australia. I moved to Denver in 2019, and I am loving life here so far. 
                         My background is in Hospitality Management, but I have forever had a love for all things technology. I decided it was time to make a career change, and here I am. 
                        In my free time I am hanging out with friends, being outdoors, learning to code, and being a self-proclaimed pun queen. I am a fast learner, who loves to constantly expand my knowledge of coding languages, databases, and frameworks.
                        I just completed the Full Stack Web Development Coding Bootcamp at the University of Denver, so I am proud to say I have the mindset to accomplish a lot in a short amount of time with dedication and persistence.
                         </p>
                     </section>

                    <hr style={{borderTop: '3px solid purple', width:'50%'}} />
                    <h5 className="contact-names">Address</h5>
                    <p> 6178 Balsam St, Arvada, CO 80004</p>
                    <h5 className="contact-names">Phone</h5>
                    <p>(405)888-2170
                    </p>
                    <h5 className="contact-names">Email</h5>
                    <p>piperschwartz@aol.com</p>
                    <hr style={{borderTop: '3px solid purple', width:'50%'}}/>

                 </Cell>
                 <Cell className="resume-right-col" col={8}>
                 <h2 className="resume-titles">Education</h2>
                 <Education 
                 startYear={2020}
                 endYear={2019}
                 schoolName= "University of Denver"
                 schoolDescription="Coding Bootcamp for Full Stack Web Development"
                 />

                 <Education 
                 startYear={2011}
                 endYear={2015}
                 schoolName= "Oklahoma State University"
                 schoolDescription="Bachelor of Human Sciences, with a Major in Hotel and Restaurant Administraion "
                 />     

                <Education 
                 startYear={2009}
                 endYear={2010}
                 schoolName= "Moore Norman Technology Center"
                 schoolDescription="Web Masters Certificate in Web Design"
                 />     
                 <hr style={{borderTop: '3px solid #00e6e6'}} />

                 <h2 className="resume-titles">Experience</h2>
                 <Experience
                 startYear={2020}
                 endYear={2019}
                 jobName="Bed Bath and Beyond"
                 jobDescription="Sales Associate, Cashier, etc. Duties are to be on the selling floor, helping guests, stocking, and using time management to complete daily projects. Duties also include being a cashier when needed. " 
                 />

                <Experience
                 startYear={2019}
                 endYear={2019}
                 jobName="Tacos Tequila Whiskey"
                 jobDescription="My role was a Manager. My duties included ensuring the shift runs smoothly, managing a staff of bartenders, servers, bussers, hosts, and kitchen, 
                 problem-solving and conflict resolution, and end of night reports/ banking. " 
                 />

                <Experience
                 startYear={2013}
                 endYear={2019}
                 jobName="Charleston's Restaurant"
                 jobDescription="As an intern, I was able to carry out duties in all aspects of the restaurant. I was able to learn and develop management skills. 
                 I continued as a head waiter after the internship ended, doing the administrative side of managing at the end of the shift as well as working as wait staff. I worked here during College,
                  after, and after I moved home from living in Australia for 4 years." 
                 />

                <Experience
                 startYear={2017}
                 endYear={2018}
                 jobName="Ivy and Jack - Holiday Inn Perth City Centre"
                 jobDescription="I was Team Leader/ Supervisor. Duties were helping the staff to the best of my ability and being on the floor with them so I can be hands-on. Guest conflict resolution and service recovery is a requirement. My duties were also the banking at the
                 end of the shift, and the reports. I was in charge of the floor staff, bar staff, as well as the room service staff. Being cross trained at this venue is a must, therefore I have a wide range of skills and abilities."
                 /> 

            <hr style={{borderTop: '3px solid #00e6e6'}} />
            <h2>Skills</h2>
            <Skills 
            skill="Javascript"
            progress={90}
            />
            <Skills 
            skill="HTML/CSS"
            progress={100}
            />
            <Skills 
            skill="React"
            progress={75}
            />
            <Skills 
            skill="NodeJS"
            progress={80}
            />
             <Skills 
            skill="Express"
            progress={70}
            />
             <Skills 
            skill="MongoDB"
            progress={60}
            />
             <Skills 
            skill="CSS/Frameworks"
            progress={90}
            />
             <Skills 
            skill="MySQL"
            progress={85}
            />

                 </Cell>
             </Grid>
         </div>
      )
  }
  };



export default Resume;