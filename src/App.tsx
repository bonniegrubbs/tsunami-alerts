import { useState } from "react";
import logo from "./TsunamiAlertGraphic.jpg";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const fetchTsunamiAlert = () => {
    fetch(
      "http://localhost:3103/?url=https://www.tsunami.gov/events/xml/PAAQAtom.xml"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  // fetchTsunamiAlert();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{JSON.stringify(data, null, 2)}</p> */}
      </header>
    </div>
  );
}

export default App;
