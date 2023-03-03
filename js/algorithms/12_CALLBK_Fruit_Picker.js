function onSuccess() {
  notify({ message: "SUCCESS" });
}

function onError() {
  notify({ message: "ERROR" });
}

function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

function postOrder(variety, quantity) {
  let obj = {
    variety: variety,
    quantity: quantity,
  };
  return order(obj, onSuccess, onError);
}
