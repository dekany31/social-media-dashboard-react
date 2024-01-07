
import './App.css';
import React, { useState } from 'react';
import data from './sample-data.js';
import ToggleSwitch from './components/ToggleSwitch.jsx';
import Platforms from './components/PlatformCard.jsx';
import Events from './components/EventsCard.jsx';



function App() {

  const totalFollowers = data.platforms.reduce((sum, platform) => {//végig iterál a platforms tombon
    return sum + Object.values(platform)[0].followers;//kinyeri a kovetoszámokat
  }, 0);

  const formattedTotalFollowers = totalFollowers.toLocaleString();//vesszot tesz az ezres utan
  //console.log("Összes követőszám: " + totalFollowers);

  const [theme, setTheme] = useState("true");

  // ha a téma korábban true volt, most false-ra változik,
  const handleToggle = () => {
    setTheme((prevTheme) => !prevTheme);
  };


  return (
    <div className={"App " + (theme ? "dark" : "light")}> {/* a class-ot változtatja */}

      <div className="socialHeader">
        <div className="socialH">
          <h1>Social Media Dashboard</h1>
          <h5>Total Followers: {formattedTotalFollowers} </h5>
        </div>

        <div className="switch">
          <p>Dark Mode</p>
          <ToggleSwitch onChange={handleToggle} checked={theme} />
        </div>
      </div>

      <div className="platforms">
        <Platforms />
      </div>

      <div className="overview">
        <h2>Overview - Today</h2>
      </div>

      <div className="events">
        <Events />
      </div>
    </div>
  );
}

export default App;
