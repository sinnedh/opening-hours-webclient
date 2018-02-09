import React from 'react';
import RegularHoursForWeekday from './RegularHoursForWeekday'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const RegularHoursOverview = ({ regularHours }) => (
  <React.Fragment>
    <h2>Regular hours</h2>
    <div>
      { weekdays.map((weekday, i) =>
        <RegularHoursForWeekday key={i} weekday={weekday} regularHours={regularHours} />
      )}
    </div>
  </React.Fragment>
)

export default RegularHoursOverview;
