import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Hire from '../Hire/Hire';
import People from '../People/People';
import './Employees.css'

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [hire, setHire] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('./employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    const handleAddToCart = (employee) => {
        const newHire = [...hire, employee];
        setHire(newHire);
        const showPeople = [...people, employee];
        setPeople(showPeople);
    }

    return (
        <div className="employees-container">
            <div className="employee-container">
                {
                    employees.map(employee => <Employee
                        key={employee.salary}
                        employee={employee}
                        handleAddToCart={handleAddToCart}
                    ></Employee>)
                }

            </div>
            <div className="hire-container">
                <Hire hire={hire}></Hire>
                {
                    people.map(data => <People data={data}></People>)
                }
            </div>
        </div>
    );
};

export default Employees;