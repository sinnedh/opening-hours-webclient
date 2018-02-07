import React from 'react';
import gql from 'graphql-tag';
import { Container, Menu } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import Overview from './components/Overview'
import 'semantic-ui-css/semantic.min.css';

const App = ({ data }) => (
    <React.Fragment>
        <Menu inverted fixed="top">
            { !data.loading && data.Venue && <Menu.Item>{data.Venue.name}</Menu.Item> }
            <Menu.Item>Regular hours</Menu.Item>
            <Menu.Item>Exceptional hours</Menu.Item>
        </Menu>

        <Container style={{ marginTop: '5em' }} >
            { !data.loading && data.Venue &&
                <Overview
                    regularHours={data.allRegularHourses}
                    exceptionalHours={data.allExceptionalHourses}
                />
            }
        </Container>
    </React.Fragment>
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
