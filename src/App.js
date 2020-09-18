import React from 'react';

import './App.css';
import { MainPage } from './Components/MainPage';
import { SectionheaderMain } from './Components/Sectionheader/SectionheaderMain';
import {GlobalDataProvider} from './Components/GlobalContext/GlobalContext' 

function App() {
  return (
    <GlobalDataProvider>
    <div>
      <SectionheaderMain/>
     <MainPage/>
      
      </div>
       </GlobalDataProvider>
  );
}

export default App;
