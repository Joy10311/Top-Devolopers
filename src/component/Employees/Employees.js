import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css'

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('./employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    return (
        <div className="employees-container">
            <div className="employee-container">
                {
                    employees.map(employee => <Employee employee={employee}></Employee>)
                }

            </div>
            <div className="hire-container">
                <h2>Employee Added</h2>
                <h4>Total Cost</h4>
            </div>
        </div>
    );
};

export default Employees;