const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware } = require("./middlewares");

// initial state
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state, ...action.payload],
      };

    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// acton dispatch
store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn Redux form LWS",
});
