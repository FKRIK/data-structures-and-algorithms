function cookingStatus(remainingTime) {
  // Undefined is falsy
  if (!remainingTime) return "You forgot to set the timer.";
  if (remainingTime === 0) return "Lasagna is done.";
  return "Not done, please wait.";
}
// console.log(cookingStatus());

// if there insn't a second argument when the function is invoked, the default value will be 2 =)
function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}
// console.log(preparationTime(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'], 3));

function quantities(layers) {
  let noodlesLayers = 0;
  let sauceLayers = 0;

  for (let counter = 0; counter < layers.length; counter++) {
    switch (layers[counter]) {
      case "noodles":
        noodlesLayers += 50;
        break;

      case "sauce":
        sauceLayers += 0.2;

      default:
        break;
    }
  }
  return {
    noodles: noodlesLayers,
    sauce: sauceLayers,
  };
}
// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));

function addSecretIngredient(friendRecipe, myRecipe) {
  myRecipe.push(friendRecipe[friendRecipe.length - 1]);
}
// const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
// const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];
// addSecretIngredient(friendsList, myList);
// console.log(myList);

function scaleRecipe(recipe, portionsToCook) {
  let scaledRecipe = {};

  for (const key in recipe) {
    scaledRecipe[key] = (recipe[key] / 2) * portionsToCook;
  }

  return scaledRecipe;
}
// const recipe = {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };
// console.log(scaleRecipe(recipe, 4));
