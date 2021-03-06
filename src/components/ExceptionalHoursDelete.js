import React from 'react';
import { graphql } from 'react-apollo';
import { Button } from 'semantic-ui-react';
import { fetchExceptionalHoursQuery } from '../queries';
import { deleteExceptionalHoursMutation } from '../mutations';

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


export default graphql(deleteExceptionalHoursMutation)(ExceptionalHoursDelete);
