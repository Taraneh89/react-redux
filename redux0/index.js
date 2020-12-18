//Add Redux in the form of nodejs
const redux = require("redux");
//create logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
//create store
const createStore = redux.createStore;
//comineReducers
const combineReducers = redux.combineReducers;
//creatr=e middelware
const applyMiddleware = redux.applyMiddleware;

//action creator
const BUY_MOB = "BUY_MOB";
const BUY_TAB = "BUY_TAB";

function buyMob() {
  return {
    type: BUY_MOB,
    info: "first Action",
  };
}
function buyTab() {
  return {
    type: BUY_TAB,
    info: "second Action",
  };
}

//reducer
// state
//const initialState = {
// numOfMobs: 100,
//numOfTab: 50,
//};
//

//Separate the state
const initialMobState = {
  numOfMobs: 100,
};
const initialTabState = {
  numOfTab: 50,
};

//const reducer = (state = initialState, action) => {
///check action
//switch (action.type) {
//case BUY_MOB:
///new state
//return { ...state, numOfMobs: state.numOfMobs - 1 };
//case BUY_TAB:
//return { ...state, numOfTab: state.numOfTab - 1 };

//default:
//return state;
//}
//};
//
///Separate the reducer

const MobReducer = (state = initialMobState, action) => {
  //check action
  switch (action.type) {
    case BUY_MOB:
      //new state
      return { ...state, numOfMobs: state.numOfMobs - 1 };
    default:
      return state;
  }
};

const TabReducer = (state = initialTabState, action) => {
  //check action
  switch (action.type) {
    case BUY_TAB:
      //new state
      return { ...state, numOfTab: state.numOfTab - 1 };
    default:
      return state;
  }
};
//introduce reducers
const rootReducer = combineReducers({
  Mob: MobReducer,
  Tab: TabReducer,
});
//Add all state to store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state is ", store.getState());
//create a lisener(subscribe) for When the store changes
const unSubscribe = store.subscribe(
  () => {}
  //console.log("update state is ", store.getState())
);
//updata state
store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyTab());
store.dispatch(buyTab());

unSubscribe();
