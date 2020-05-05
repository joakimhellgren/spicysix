import React, { useState } from "react";
import "./App.scss";
import Data from "./assets/initiative.json";
import Infographic from "./components/Infographic";

//components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState(Data);
  let covidSum = 0;
  Data.map(x => {
    return x.ActiveOnCovid === 1 ? covidSum++ : null
  })
  

  const totalOrganizations = Data.length;
  // const partnerArray = Data.filter((object) => {
  //   return object.Type.search("partnership") > -1;
  // });
  // console.log(partnerArray.length);

  return (
    <div className="App">
      <Navbar />
      <Infographic totalOrg={totalOrganizations} partners={50} covidSum={covidSum} />

      <Search data={data} setData={setData} defaultData={Data} />
      <Cards data={data} />
    </div>
  );
}

export default App;
