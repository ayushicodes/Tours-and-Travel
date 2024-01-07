import { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./component/SignUp";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState([storedItems]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log("items", items);
  }, [items]);
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
