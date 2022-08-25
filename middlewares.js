const fetch = require("node-fetch");

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying you!");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};

const fetchTodosMiddleware = (store) => (next) => async (action) => {};

module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
};
