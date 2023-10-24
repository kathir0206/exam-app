import React from "react";
import hi1 from "./hi.jpeg"

const App = () => {
  return (
    <>
      <h1 className="text-center bg-red-700 ">Hello World!</h1>
      <img className="h-220 w-223 rounded-300px"  src={hi1} alt="leaf" />
    </>
  );
};

export default App;
