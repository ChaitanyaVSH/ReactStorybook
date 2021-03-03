import React from "react";
import './App.css';
import ListItem from "./components/ListItem/ListItem";

const App = () => {
  const lists = ["Up to $1,000,000 of buildings cover", "$35,000 towards alternative accomodation", "$50,000 for contents", "$10,000 for unspecified valuables"];

  return (
    <div className="App">
      <h1>Amazon Standard of Cover 1</h1>
      <div className="policy">

        <div>
          {lists.map(list =>(
          <ListItem variant="iconPrimary">{list}</ListItem>
          ))}
          {lists.map(list =>(
          <ListItem variant="iconOrdered">{list}</ListItem>
          ))}
        </div>

        <div>
          <p>No policy covers the below</p>
          {lists.map(list =>(
          <ListItem variant="iconOrdered">{list}</ListItem>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
