import React from 'react';
import './HappyClient.css';
import CountUp from 'react-countup';

const TaskManagementInfo = () => {
    const taskDetails = [
        { title: 'Tasks Completed', number: 1000, id: 1 },
        { title: 'Projects Managed', number: 50, id: 2 },
        { title: 'Hours Spent', number: 5000, id: 3 },
        { title: 'Team Members', number: 20, id: 4 }
    ];

    return (
        <section className="taskManagementInfo">
            <div className="container">
                <div className="row">
                    {taskDetails.map(({ title, number, id }) => (
                        <div className="col-md-6 col-lg-3" key={id}>
                            <div className="taskInfoDetails">
                                <div className="taskInfoIcon">
                                    <img
                                        src={`your-icon-${id}.png`}
                                        alt={title}
                                    />
                                </div>
                                <div>
                                    <p className="taskInfoTitle">{title}</p>
                                    <h4 className="taskInfoNumber">
                                        <CountUp end={number} start={0} duration={4} />
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TaskManagementInfo;
