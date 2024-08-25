import React from "react";
import HS from "./components/herosection";
import L from './components/logo'


const App = () => {
  return (
    <div className="flex flex-col relative combined-gradient">
      <HS/>
       <L/>
    </div>
  );
};

export default App;
