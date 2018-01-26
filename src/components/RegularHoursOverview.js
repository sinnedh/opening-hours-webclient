import React from 'react';
import RegularHoursForWeekday from './RegularHoursForWeekday'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const RegularHoursOverview = ({ regularHours }) => (
  <div>
    { weekdays.map((weekday, i) =>
      <RegularHoursForWeekday key={i} weekday={weekday} regularHours={regularHours} />
    )}
  </div>
)

export default RegularHoursOverview;
