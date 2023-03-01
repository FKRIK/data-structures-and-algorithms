function createVisitor(name, age, ticketIdentifier) {
  return {
    name: name,
    age: age,
    ticketId: ticketIdentifier,
  };
}
// console.log(createVisitor("Imran Kudrna", 21, "ECMZR67C"));
// let visitor1 = createVisitor("Nālani Sansone", 76, "YX52GB06");
// console.log(visitor1);

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
// console.log(
//   revokeTicket({ name: "Nālani Sansone", age: 76, ticketId: "YX52GB06" })
// );

function ticketStatus(tickets, ticketIdentifier) {
  // if ticketId doesn't exists, return 'unknown'
  // if ticketId is null, return 'not sold'
  // if ticketId has a client, return 'sold to {client}'
  if (tickets[ticketIdentifier] === null) {
    return "not sold";
  }
  if (tickets[ticketIdentifier] === undefined) {
    return "unknown ticket id";
  }
  return `sold to ${tickets[ticketIdentifier]}`;
}
// console.log(
//   ticketStatus(
//     {
//       "0H2AZ123": null,
//       "23LA9T41": "Verena Nardi",
//     },
//     "23LA9T41"
//   )
// );

// TODO: refactor the faunction below 👇
// Retrieve the value for a given ticketId with bracket notation like in the previous task.
// No if-statement is needed to solve this task.
// Use the nullish coalescing operator ?? instead.
function simpleTicketStatus(tickets, ticketIdentifier) {
  if (
    tickets[ticketIdentifier] != null ||
    tickets[ticketIdentifier] != undefined
  ) {
    return tickets[ticketIdentifier];
  }

  return "invalid ticket !!!";
}
// console.log(
//   simpleTicketStatus(
//     {
//       "0H2AZ123": null,
//       "23LA9T41": "Verena Nardi",
//     },
//     "RE90VAW7"
//   )
// );

function gtcVersion() {}
