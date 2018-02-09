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

const isNowOpenQuery = gql`
query {
  now {
    weekday
    isOpen
  }
  allRegularHourses(filter: {
    venue: {id: "cjcq6xxe1bmg40149mxjjpgmt"}
    weekday: Wednesday
  }) {
    id
    weekday
    isClosed
    openTime
    closeTime
  }
  allExceptionalHourses(filter: {
    venue: {id: "cjcq6xxe1bmg40149mxjjpgmt"}
    open_gt: "2018-02-07T00:00:00"
    open_lt: "2018-02-08T00:00:00"
  }) {
    id
    comment
    isClosed
    open
    close
  }
}`;

export { isNowOpenQuery, fetchExceptionalHoursQuery, fetchInitialDataQuery };
