import React from "react";
import { Provider, connect, useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Пример action creator'a для проекта в дз
// const loadProjectsActionCreator = () => (dispatch, getState) => {
//   apiService.loadProjects()
//     .then(projects => {
//       const action = {
//         type: 'PROJECTS_LOADED',
//         payload: projects
//       }
//     })
// }

// const Comp = () => {
//   const dispatch = useDispatch()

//   return <button onClick={() => dispatch(loadProjectsActionCreator())}>LOAD</button>
// }

const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const updateMessageActionCreator = (newMsg) => (dispatch, getState) => {
  console.log("result of getState:", getState());

  setTimeout(() => {
    dispatch({
      type: UPDATE_MESSAGE,
      payload: newMsg,
    });
  }, 2000);
};

const initialState = {
  message: "Initial message",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

const App = ({ message, update }) => {
  return (
    <div>
      <div>
        <button onClick={update}>update message</button>
      </div>
      <div>{message}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch(updateMessageActionCreator("Updated message")),
});

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWithProvider = () => (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

export default AppWithProvider;