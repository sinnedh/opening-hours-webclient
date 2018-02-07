import React from 'react';
import { format } from 'date-fns';
import { Divider, Grid } from 'semantic-ui-react';
import ExceptionalHoursCreate from './ExceptionalHoursCreate';
import ExceptionalHoursDelete from './ExceptionalHoursDelete';

const ExceptionalHoursOverview = ({ exceptionalHours }) => (
  <React.Fragment>
    <h2>Exceptional hours</h2>
    <ExceptionalHoursCreate />

    <Divider />
    { exceptionalHours.map((day, key) =>
      <React.Fragment>
        <Grid>
          <Grid.Column width={4}>
            <strong>{ format(day.open, 'YYYY-MM-DD') }</strong>
          </Grid.Column>
          <Grid.Column width={4}>
            { day.isClosed
              ? 'Closed'
              : <span>{format(day.open, 'HH:mm')} - {format(day.close, 'HH:mm')}</span>
            }
          </Grid.Column>
          <Grid.Column width={4}>
            { day.comment && ' ' + day.comment }
          </Grid.Column>
          <Grid.Column width={2}>
            <ExceptionalHoursDelete id={day.id} />
          </Grid.Column>
        </Grid>
        <Divider />
      </React.Fragment>
    )}
  </React.Fragment>
)

export default ExceptionalHoursOverview;
