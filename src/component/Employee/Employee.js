import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import './Employee.css'

const Employee = (props) => {
    const { name, email, gender, position, salary, company, image } = props.employee;
    const icon = <FontAwesomeIcon icon={faHeadphones} />
    return (
        <div className="employee-card">

            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
                <h5>Position: {position}</h5>
                <p>Gender: {gender}</p>
                <p >Salary: {salary}</p>
                <p>Company: {company}</p>
                <p>Email: {email} </p>
                <button
                    onClick={() => props.handleAddToCart(props.employee)}
                    className="btn-regular">{icon} Hire Me</button>
                <br />


                <SocialIcon className="social-icon" url="https://twitter.com/jaketrent" />
                <SocialIcon className="social-icon2" url="https://linkedin.com/in/jaketrent" />
                <SocialIcon className="social-icon3" url="https://facebook.com/in/jaketrent" />
            </div>

        </div>




    );
};

export default Employee;