import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.nicepng.com/png/detail/83-838746_batman-arkham-knight-logo-background-logo-background-batman.png"/>
      </header> 
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
        <a>Messages</a>
        </div>
        <div>
        <a>News</a>
        </div>
        <div>
        <a>Music</a>
        </div>
        <div>
        <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>
            post 1 
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
