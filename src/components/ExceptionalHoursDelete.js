import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Button } from 'semantic-ui-react';

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

class ExceptionalHoursDelete extends React.Component {

  handleClick = () => {

    this.props.mutate(
      {
        variables: {
          id: this.props.id,
        },
        refetchQueries: [ { query: fetchExceptionalHoursQuery }],
      }
    )
    .then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  render() {
    return (
      <Button size="mini" compact negative onClick={this.handleClick}>
        Delete
      </Button>
    );
  }
}

const deleteExceptionalHoursMutation = gql`
  mutation deleteExceptionalHours($id: ID!) {
    deleteExceptionalHours(id: $id) {
      id
    }
  }
`;

export default graphql(deleteExceptionalHoursMutation)(ExceptionalHoursDelete);
