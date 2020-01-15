import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [articleBought, setArticleBought] = useState(false);
  let popUpRef: HTMLStPopUpElement | undefined;

  const setpopUpRef = (ref: HTMLStPopUpElement) => {
    if (ref) {
      popUpRef = ref;
      popUpRef.addEventListener('popUpClose', (e: any) => {
        if (e.detail === true) {
          console.log('article bought', e);
          setArticleBought(true);
        } else {
          console.log('dialog cancelled', e);
          setArticleBought(false);
        }
      });
    }
  };

  const renderTiles = () => {
    return (<>
      <h1>Wählen Sie einen Modell:</h1>
      <div className="tiles">
        <st-tile>
          <h3>Basis</h3>
          <p>5 € / Monat</p>
          <div className="list-wrapper">
            <ul>
              <li>
                Unbegrenzte Anzahl Anwendungen
              </li>
              <li>1GB Speicherplatz</li>
              <li>
                1 Entwickler
              </li>
              <li>
                1 Jahr Updates
              </li>
            </ul>
          </div>
          <st-button label="Auswählen"/>
        </st-tile>
        <st-tile>
          <h3>Pro</h3>
          <p>15 € / Monat</p>
          <ul>
            <li>
              Unbegrenzte Anzahl Anwendungen
            </li>
            <li>10GB Speicherplatz</li>
            <li>
              5 Entwickler
            </li>
            <li>
              3 Jahre Updates
            </li>
          </ul>
          <st-button button-type={ 'primary' }
                     label="Auswählen"
                     onClick={ () => {
                       if (popUpRef != null) {
                         popUpRef.show();
                       }
                     } }/>
        </st-tile>
        <st-pop-up ref={ setpopUpRef }
                   headline="Kaufbestätigung"
                   message="Möchten Sie den Artikel in der Pro Variante kaufen ?"/>
      </div>
    </>)
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          { articleBought ? <p>Artikel erfolgreich eingekauft!</p> : renderTiles() }
        </header>
      </div>
    </div>
  );
}

export default App;
