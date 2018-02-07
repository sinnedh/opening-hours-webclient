import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import gql from 'graphql-tag';
import { Container, Menu } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import RegularHoursOverview from './components/RegularHoursOverview';
import ExceptionalHoursOverview from './components/ExceptionalHoursOverview';
import 'semantic-ui-css/semantic.min.css';

const App = ({ data }) => (
    <Router>
        <React.Fragment>
            <Menu inverted fixed="top">
                { !data.loading && data.Venue && <Menu.Item>{data.Venue.name}</Menu.Item> }

                <Menu.Item
                    as={Link}
                    to={'/'}
                    name='regular_hours'>
                    Regular hours
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={'/exceptional_hours/'}
                    name='exceptional_hours'>
                    Exceptional hours
                </Menu.Item>
            </Menu>

            <Container style={{ marginTop: '5em' }} >
                { !data.loading && data.Venue &&
                    <Switch>
                        <Route exact path="/" render={() =>
                            <RegularHoursOverview regularHours={data.allRegularHourses} />
                        } />
                        <Route path="/exceptional_hours" render={() =>
                            <ExceptionalHoursOverview exceptionalHours={data.allExceptionalHourses} />
                        } />
                    </Switch>
                }
            </Container>
        </React.Fragment>
    </Router>
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
