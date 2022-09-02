// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes ,Route} from 'react-router-dom';

import BMmusic from './Components/BMmusic/BMmusic';
import BMjewel from './Components/BMJewel/BMjewel';
import BMmega from './Components/BMmega/BMmega';
import BMgalaxy from './Components/BMgalaxy/BMgalaxy';
import BMgame from './Components/BMgame/BMgame';
import BMlast from './Components/BMlast/BMlast';
import Glowbg from './Components/General_Components/Glowbg/Glowbg';
// import Glowbg from './Components/General_Components/Glowbg/Glowbg';





function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/final" element={<BMmusic></BMmusic>} />
        <Route path="/final/bmjewel" element={<BMjewel></BMjewel>} />
        <Route path="/final/bmmega" element={<BMmega></BMmega>} />
        <Route path="/final/bmgalaxy" element={<BMgalaxy></BMgalaxy>} />
        <Route path="/final/bmgame" element={<BMgame></BMgame>} />
        <Route path="/final/bmlast" element={<BMlast></BMlast>} />
      </Routes>
          {/* <BMmusic></BMmusic> */}
          {/* <BMjewel></BMjewel> */}
          {/* <BMmega></BMmega> */}
          {/* <BMgalaxy></BMgalaxy> */}
          {/* <BMgame></BMgame> */}
          {/* <BMlast></BMlast> */}
    </HashRouter>

    // <Glowbg></Glowbg>

    // <Glowbg></Glowbg>
    
    
  );
}

export default App;
