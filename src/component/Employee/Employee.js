import React from 'react';
import './Employee.css'

const Employee = (props) => {
    const { name, email, gender, position, salary, country, company, image } = props.employee
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
                <p>Country: {country}</p>
                <p>Company: {company}</p>
                <p>Email: {email} </p>
            </div>

        </div>




    );
};

export default Employee;