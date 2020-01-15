import React from 'react';
import './App.css';

const App: React.FC = () => {
  let navBarRef;
  const setNavBarRef = (ref: HTMLStNavBarElement) => {
    if (ref) {
      navBarRef = ref;
      navBarRef.labels = ['Home', 'Contact', 'Info'];
    }
  };
  let popUpRef : HTMLStPopUpElement | undefined;
  const setpopUpRef = (ref: HTMLStPopUpElement) => {
    if (ref) {
      popUpRef = ref;
      popUpRef.addEventListener('popUpAccepted', e => console.log('AAA ', e));
    }
  };
  return (
    <div>
      <st-nav-bar ref={ setNavBarRef }/>
      <div className="App">
        <header className="App-header">
          <h1>Select a plan:</h1>
          <div className="tiles">
            <st-tile>
              <h3>Lite</h3>
              <p>5 $ / month</p>
              <div className="list-wrapper">
                <ul>
                  <li>
                    No ads on your decks
                  </li>
                  <li>1GB storage</li>
                  <li>
                    1 collaborator per deck
                  </li>
                  <li>
                    Present offline
                  </li>
                  <li>
                    Export to PDF
                  </li>
                </ul>
              </div>

              <st-button label="Select Lite Bundle"/>
            </st-tile>
            <st-tile>
              <h3>Pro</h3>
              <p>15 $ / month</p>
              <ul>
                <li>
                  No ads on your decks
                </li>
                <li>10GB storage</li>
                <li>
                  5 collaborators per deck
                </li>
                <li>
                  Present offline
                </li>
                <li>
                  Export to PDF
                </li>
              </ul>
              <st-button class="primary" label="Select Pro Bundle" onClick={ () => {
                if (popUpRef != null) {
                  popUpRef.show();
                }
              } }/>
            </st-tile>
            <st-pop-up ref={ setpopUpRef } headline="Kaufbestätigung"
                       message="Möchten Sie den Artikel in der Pro Variante wirklich kaufen ?"></st-pop-up>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
