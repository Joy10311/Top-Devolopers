import React from 'react';
import './People.css'

const People = (props) => {
    const { data } = props;


    return (
        <div className="hired-people">
            <h3>{data.name}</h3>
            <img src={data.image} alt="" />

        </div>
    );
};

export default People;