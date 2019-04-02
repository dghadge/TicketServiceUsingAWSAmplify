// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTickets = `query GetTickets($id: ID!) {
  getTickets(id: $id) {
    seatId
    email
    rowNumber
    seatNumber
    description
  }
}
`;
export const listTicketss = `query ListTicketss(
  $filter: ModelTicketsFilterInput
  $limit: Int
  $nextToken: String
) {
  listTicketss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      seatId
      email
      rowNumber
      seatNumber
      description
    }
    nextToken
  }
}
`;
