import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
    
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
           <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required />
           </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/59742601?s=460&v=4" alt="Matheus Pimentel"/>
            <div className="user-info">
              <strong>Matheus Pimentel</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
            </header>
            <p>Always looking for something new in the technology world.</p>
            <a href="https://github.com/MatheusCPimentel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/59742601?s=460&v=4" alt="Matheus Pimentel"/>
            <div className="user-info">
              <strong>Matheus Pimentel</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
            </header>
            <p>Always looking for something new in the technology world.</p>
            <a href="https://github.com/MatheusCPimentel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/59742601?s=460&v=4" alt="Matheus Pimentel"/>
            <div className="user-info">
              <strong>Matheus Pimentel</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
            </header>
            <p>Always looking for something new in the technology world.</p>
            <a href="https://github.com/MatheusCPimentel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/59742601?s=460&v=4" alt="Matheus Pimentel"/>
            <div className="user-info">
              <strong>Matheus Pimentel</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
            </header>
            <p>Always looking for something new in the technology world.</p>
            <a href="https://github.com/MatheusCPimentel">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>

  );
}

export default App;
