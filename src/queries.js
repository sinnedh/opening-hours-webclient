import gql from 'graphql-tag';

const fetchExceptionalHoursQuery = gql`
query {
  allExceptionalHourses(filter: {
    venue: {id: "cjcq6xxe1bmg40149mxjjpgmt"},
  }) {
    id
    comment
    isClosed
    open
    close
  }
}`;

const fetchInitialDataQuery = gql`
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
}`;

export { fetchExceptionalHoursQuery, fetchInitialDataQuery };
