function timeToMixJuice(juice) {
  let time = 0;
  switch (juice) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;

    case "Green Garden":
    case "Energizer":
      time = 1.5;
      break;

    case "Tropical Island":
      time = 3;
      break;

    case "All or Nothing":
      time = 5;
      break;

    default:
      time = 2.5;
      break;
  }

  return time;
}
// console.log(timeToMixJuice('Green Garden'));

function limesToCut(necessarylimeWedges, array) {
  const small = 6,
    medium = 8,
    large = 10;
  let limesCounter = 0;
  let totalLimesWedges = 0;

  while (
    totalLimesWedges < necessarylimeWedges &&
    limesCounter < array.length
  ) {
    switch (array[limesCounter]) {
      case "small":
        totalLimesWedges += small;
        break;

      case "medium":
        totalLimesWedges += medium;
        break;

      case "large":
        totalLimesWedges += large;
        break;
    }
    limesCounter++;
  }

  return limesCounter;
}
// console.log(limesToCut(20, ['small', 'small']));

function remainingOrders(minutesLeft, arrayJuices) {
  let sumMinutes = 0;

  while(sumMinutes < minutesLeft){
    sumMinutes += timeToMixJuice(arrayJuices[0]);
    arrayJuices.shift();
  }

  return arrayJuices;
}
// console.log(
//   remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
// );