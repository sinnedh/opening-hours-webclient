import React from 'react';
import gql from 'graphql-tag';
import { parse } from 'date-fns';
import { graphql } from 'react-apollo';
import { Checkbox, Input, Form } from 'semantic-ui-react';


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

class ExceptionalHoursCreate extends React.Component {
  state = { date: '2018-02-07', isClosed: false, openAt: '10:00', closeAt: '19:00', comment: '' }

  handleSubmit = () => {

    this.props.mutate(
      {
        variables: {
          venueId: 'cjcq6xxe1bmg40149mxjjpgmt',
          open: parse(`${this.state.date}T${this.state.openAt}:00`),
          close: parse(`${this.state.date}T${this.state.closeAt}:00`),
          isClosed: this.state.isClosed,
          comment: this.state.comment
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

  handleChange = (e, { checked, name, type, value }) => {
    if(type === 'checkbox') {
      this.setState({ [name]: checked })
    } else {
      this.setState({ [name]: value })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field label="Date" name="date" value={this.state.date} onChange={this.handleChange} control={Input} />
        <Form.Field label="Commment" name="comment" value={this.state.comment} onChange={this.handleChange} control={Input} />
        <Form.Field toggle label="Is closed on that day" name="isClosed" onChange={this.handleChange} control={Checkbox}  />
        { !this.state.isClosed &&
          <Form.Group>
            <Form.Field label="Open at" name="openAt" value={this.state.openAt} onChange={this.handleChange} control={Input} />
            <Form.Field label="Close at" name="closeAt" value={this.state.closeAt} onChange={this.handleChange} control={Input} />
          </Form.Group>
        }
        <Form.Button content="Create" />
      </Form>
    );
  }
}

const createExceptionalHoursMutation = gql`
  mutation createExceptionalHours(
    $venueId: ID!,
    $open: DateTime!,
    $close: DateTime!,
    $comment: String
    $isClosed: Boolean
  ) {
    createExceptionalHours(venueId: $venueId, open: $open, close: $close, comment: $comment, isClosed: $isClosed) {
      id
    }
  }
`;

export default graphql(createExceptionalHoursMutation)(ExceptionalHoursCreate);
