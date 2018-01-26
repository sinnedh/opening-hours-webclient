import React from 'react';

const RegularHoursForWeekday = ({ weekday, regularHours }) => {
    const timeStringToInt = (timeString) => parseInt(timeString.replace(':', ''), 10)
    const regularHoursForWeekday = regularHours
      .filter((item) => item.weekday === weekday)
      .sort((a, b) => timeStringToInt(a.openTime) - timeStringToInt(b.openTime));

    if(regularHoursForWeekday.length === 0) {
      return <div />
    }

    return (
      <div>
        <span>{weekday}:</span>
        <ul>
        { regularHoursForWeekday.map((item, key) => (
            <li key={key}>
              {item.openTime} - {item.closeTime}
            </li>

        ))}
        </ul>
      </div>
    )
}

export default RegularHoursForWeekday;
