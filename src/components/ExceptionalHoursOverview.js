import React from 'react';
import {format} from 'date-fns'

const ExceptionalHoursOverview = ({ exceptionalHours }) => (
  <ul>
    { exceptionalHours.map((day, key) =>
      <li key={key}>
        {format(day.open, 'YYYY-MM-DD: HH:mm')} - {format(day.close, 'HH:mm')}
      </li>
    )}
  </ul>
)

export default ExceptionalHoursOverview;
