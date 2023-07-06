import { useState, useEffect, useDeferredValue } from "react";

/* Hello 컴포넌트가 실행될 때 useEffect를 거쳐 hiFn이 실행되고, 컴포넌트가 종료될 때 byeFn이 실행된다. */
function Hello() {
  function byeFn() {
    console.log("bye :)");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
