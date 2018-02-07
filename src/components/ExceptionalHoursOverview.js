import React from 'react';
import { format } from 'date-fns';
import ExceptionalHoursCreate from './ExceptionalHoursCreate';

const ExceptionalHoursOverview = ({ exceptionalHours }) => (
  <React.Fragment>
    <h2>Exceptional hours</h2>
    <ExceptionalHoursCreate />
    <ul>
      { exceptionalHours.map((day, key) =>
        <li key={key}>
          { format(day.open, 'YYYY-MM-DD') + ': ' }
          { day.isClosed
            ? 'Closed'
            : <span>{format(day.open, 'HH:mm')} - {format(day.close, 'HH:mm')}</span>
          }
          { day.comment && ' ' + day.comment }
        </li>
      )}
    </ul>
  </React.Fragment>
)

export default ExceptionalHoursOverview;
