import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import RegularHoursOverview from './components/RegularHoursOverview';
import ExceptionalHoursOverview from './components/ExceptionalHoursOverview';
import { fetchInitialDataQuery } from './queries';
import 'semantic-ui-css/semantic.min.css';



// TODO
// + extract component
// + implement isCloses handling
// + isNowOpenQuery date is currently hardcoded
import { isNowOpenQuery } from './queries';
import { isNowOpen } from './datetimeUtils';

const IsNowOpen = ({ data }) => {
  if(data.allRegularHourses && data.allExceptionalHourses) {
    const now = new Date()
    return isNowOpen(now, data.allRegularHourses, data.allExceptionalHourses)
      ? <Icon color="green" name="wait" size="large" />
      : <Icon color="red" name="wait" size="large" />
  }

  return <span />
}

const IsNowOpenContainer = graphql(
    isNowOpenQuery,
    { options: { notifyOnNetworkStatusChange: true, } }
)(IsNowOpen);


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
