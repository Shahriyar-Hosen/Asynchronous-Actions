const fetch = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  const todos = await res.json();

  dispatch({
    type: "todos/todoLoaded",
    payload: todos,
  });

  console.log(`Number of updated todos: ${getState().todos.length}`);
};

module.exports = {
  fetchTodos,
};
