import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const resFunc = async () => {
    const res = await axios.get("http://localhost:8080");
    setData(res.data);
  };
  resFunc();
  return <div className="App">{data}</div>;
}

export default App;
