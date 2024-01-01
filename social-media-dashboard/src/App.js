
import './App.css';
import data from './sample-data.js';
import ToggleSwitch from './components/ToggleSwitch.jsx';
import Platforms from './components/PlatformCard.jsx';



function App() {

  const totalFollowers = data.platforms.reduce((sum, platform) => {//végig iterál a platforms tombon
    return sum + Object.values(platform)[0].followers;//kinyeri a kovetoszámokat
  }, 0);

  const formattedTotalFollowers = totalFollowers.toLocaleString();//vesszot tesz az ezres utan
  //console.log("Összes követőszám: " + totalFollowers);

  return (
    <div className="App">

      <div className="socialHeader">
        <div className="socialH">
          <h1>Social Media Dashboard</h1>
          <h5>Total Followers: {formattedTotalFollowers} </h5>
        </div>

        <div className="switch">
          <p>Dark Mode</p>
          <ToggleSwitch />
        </div>

      </div>
      <div className="platforms">
        <Platforms />
      </div>
    </div>
  );
}

export default App;
