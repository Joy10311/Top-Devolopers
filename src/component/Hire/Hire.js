import React from 'react';
import './Hire.css'

const Hire = (props) => {
    const { hire } = props;
    let total = 0;
    for (const employee of hire) {
        total = total + parseInt(employee.salary);
    }



    return (

        <div>
            <h2>Employee Hired: {props.hire.length} </h2>
            <h4>Total Cost: {total} </h4>
        </div>
    );
};

export default Hire;