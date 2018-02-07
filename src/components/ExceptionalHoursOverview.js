import React from 'react';
import {format} from 'date-fns'

const ExceptionalHoursOverview = ({ exceptionalHours }) => (
  <React.Fragment>
    <h2>Exceptional hours</h2>
    <ul>
      { exceptionalHours.map((day, key) =>
        <li key={key}>
          {format(day.open, 'YYYY-MM-DD: HH:mm')} - {format(day.close, 'HH:mm')}
        </li>
      )}
    </ul>
  </React.Fragment>
)

export default ExceptionalHoursOverview;
