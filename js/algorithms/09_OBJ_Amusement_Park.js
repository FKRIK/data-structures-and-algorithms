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

// The code below doesn't work on nodejs v12 or below.. but it's right!
function simpleTicketStatus(tickets, ticketIdentifier){
  return tickets[ticketIdentifier] ?? 'invalid ticket !!!';
}

// function simpleTicketStatus(tickets, ticketIdentifier) {
//   if (
//     tickets[ticketIdentifier] != null ||
//     tickets[ticketIdentifier] != undefined
//   ) {
//     return tickets[ticketIdentifier];
//   }

//   return "invalid ticket !!!";
// }

// console.log(
//   simpleTicketStatus(
//     {
//       "0H2AZ123": null,
//       "23LA9T41": "Verena Nardi",
//     },
//     "RE90VAW7"
//   )
// );

function gtcVersion(visitor) {
  if (visitor.hasOwnProperty("gtc")) {
    return visitor.gtc["version"];
  }

  return undefined;
}

// console.log(
//   gtcVersion({
//     name: "Zohar Pekkanen",
//     age: 28,
//     ticketId: "8DGM3163",
//     gtc: {
//       signed: true,
//       version: "4.2",
//     },
//   })
// );
