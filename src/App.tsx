import React, { useState } from 'react';
import './App.css';
import NavBar from 'components/NavBar';
import dataExport from 'contexts/LangContext'

function App() {
  const {LanguageContext}=dataExport;
  const [lang, setLang] = useState<string>('ES')
  return (
    <LanguageContext.Provider value={{ lang,setLang}}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>

        </main>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
