import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Overview from './components/Overview'

const App = ({ data }) => (
    <div className="App">
    { !data.loading && data.Venue &&
        <Overview
            name={data.Venue.name}
            regularHours={data.allRegularHourses}
            exceptionalHours={data.allExceptionalHourses}
        />
    }
    </div>
)

const query = gql`
query {
  Venue(id: "cjcq6xxe1bmg40149mxjjpgmt") {
    name
  }
  allRegularHourses(filter: {
    venue: {id: "cjcq6xxe1bmg40149mxjjpgmt"}
  }) {
    id
    weekday
    isClosed
    openTime
    closeTime
  }
  allExceptionalHourses(filter: {
    venue: {id: "cjcq6xxe1bmg40149mxjjpgmt"},
  }) {
    id
    comment
    isClosed
    open
    close
  }
}`

export default graphql(
    query,
    { options: { notifyOnNetworkStatusChange: true, } }
)(App);
