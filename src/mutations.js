import gql from 'graphql-tag';

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

const deleteExceptionalHoursMutation = gql`
  mutation deleteExceptionalHours($id: ID!) {
    deleteExceptionalHours(id: $id) {
      id
    }
  }
`;

export { createExceptionalHoursMutation, deleteExceptionalHoursMutation };
