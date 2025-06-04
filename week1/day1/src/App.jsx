import Button from "./Button";
import Count from "./Count";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="app">
        {number < 10 ?( <Count number={number} /> 
        ) : (
          <span className="limit-text">Limit Reached</span>
        )}
 
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;