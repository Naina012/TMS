import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            {/* You can add an image related to your task management system here */}
                            {/* <img src={`${teamPic}`} alt="" className="img-fluid"/> */}
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle">about us</p>
                            <h1 className="headerTitle">HOW OUR TASK MANAGEMENT SYSTEM CAN HELP YOU</h1>
                            <p className="headerContent">
                                Our task management system is designed to streamline your work, enhance productivity, and keep your projects organized. Here's how we can help your business achieve its goals:
                            </p>
                            <ul className="features-list">
                                <li>
                                    <i className="fas fa-check-circle"></i> Efficient Task Organization: Easily create, assign, and track tasks for your projects.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> Collaboration: Foster collaboration among your team members with shared tasks and projects.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> Progress Tracking: Monitor the progress of tasks and projects in real-time.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> Deadline Management: Set deadlines and never miss an important date.
                                </li>
                            </ul>
                            <button className="branBtn">Learn More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
