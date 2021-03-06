import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import RegularHoursOverview from './components/RegularHoursOverview';
import ExceptionalHoursOverview from './components/ExceptionalHoursOverview';
import { fetchInitialDataQuery } from './queries';
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
);

export default graphql(
    fetchInitialDataQuery,
    { options: { notifyOnNetworkStatusChange: true, } }
)(App);
