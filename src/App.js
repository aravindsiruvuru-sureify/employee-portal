import React from "react";
import { Provider } from "react-redux";

import store from "./EmployeePortal/store";
import EmployeePortal from "./EmployeePortal/";

function App() {
  return (
    <>
      <Provider store={store}>
        <EmployeePortal />
      </Provider>
    </>
  );
}

export default App;
