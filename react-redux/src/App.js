import React from "react";
import { Provider } from "react-redux";
import HooksMobContainer from "./components/HooksMobContainer";
import Mob from "./components/Mob";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HooksMobContainer/>
        <Mob />
      </div>
    </Provider>
  );
}
export default App;
