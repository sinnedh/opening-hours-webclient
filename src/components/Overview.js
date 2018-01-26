import React from 'react';
import RegularHoursOverview from './RegularHoursOverview'

const Overview = ({ name, regularHours, exceptionalHours }) => (
    <React.Fragment>
        <h1>{name}</h1>
        <h2>Regular hours</h2>
        <RegularHoursOverview regularHours={regularHours} />

        <h2>Exceptional hours</h2>
        <ul>
        { exceptionalHours.map((item, key) =>
            <li key={key}>
                {item.open} - {item.close}
            </li>
        )}
        </ul>
    </React.Fragment>
)

export default Overview;
