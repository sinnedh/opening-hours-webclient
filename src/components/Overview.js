import React from 'react';
import RegularHoursOverview from './RegularHoursOverview'
import ExceptionalHoursOverview from './ExceptionalHoursOverview'

const Overview = ({ name, regularHours, exceptionalHours }) => (
    <React.Fragment>
        <h1>{name}</h1>
        <h2>Regular hours</h2>
        <RegularHoursOverview regularHours={regularHours} />

        <h2>Exceptional hours</h2>
        <ExceptionalHoursOverview exceptionalHours={exceptionalHours} />
    </React.Fragment>
)

export default Overview;
