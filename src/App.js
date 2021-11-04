import React from "react";
import Route from "./route/Route";
import { GlobalState } from "./global/GlobalState";
import GlobalStyle from "./globalStyles/GlobalStyles";

function App() {
  return (
     <GlobalState>       
        <GlobalStyle/>
        <Route />             
     </GlobalState>   
  );
}

export default App;