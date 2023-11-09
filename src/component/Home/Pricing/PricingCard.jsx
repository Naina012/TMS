import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const PricingCard = ({ data, id }) => {
    const taskManagementPlans = [
        {
            title: 'Basic Plan',
            name: 'Starter',
            price: 19.99,
            features: [
                'Unlimited task creation',
                'Basic task analytics',
                'Email support',
            ],
        },
        {
            title: 'Pro Plan',
            name: 'Professional',
            price: 49.99,
            features: [
                'Advanced task management',
                'Priority support',
                'Team collaboration',
            ],
        },
        {
            title: 'Enterprise Plan',
            name: 'Enterprise',
            price: 99.99,
            features: [
                'Custom task workflows',
                'Dedicated account manager',
                '24/7 premium support',
            ],
        },
    ];

    return (
        <Tab.Pane eventKey={id + 1}>
            <Row>
                {taskManagementPlans.map((plan, index) => {
                    return (
                        <Col md={4} key={index}>
                            <Fade bottom duration={1800} distance='40px'>
                                <div className={`pricingCard pricingCard${id + 1}`}>
                                    <div className="pricingBox">
                                        <h4>{plan.title}</h4>
                                        <p className="pricePlan">
                                            <span className={`ph${id + 1}`}>${plan.price}/</span>month
                                        </p>
                                        <h5>{plan.name}</h5>
                                        <p className="planDescription">Efficient task management solution for your team.</p>
                                    </div>
                                    <ul>
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <span className="checkIcon">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Fade>
                        </Col>
                    );
                })}
            </Row>
        </Tab.Pane>
    );
};

export default PricingCard;
