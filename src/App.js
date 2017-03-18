import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ma0 pa0 w-100">
        <div className="w-100 h01 bg-rainbow" />
        <div className="fl mw6 w-100 ph4 pv3">
          <h1 className="f2 fw4 lh-copy">Hey <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h1>
          <h2 className="f5 fw4 lh-copy mb4">Designer, Illustrator, Developer, &amp; Writer.</h2>
          <h2 className="f5 fw4 lh-copy">New website coming soon, watch me<br />stream my process on <a className="black rainbow-hover" href="https://twitch.tv/cortesarts">Twitch.</a></h2>
          <p><a href="#" className="rainbow">hi@cortes.us</a></p>
          <div id="Work">
            <ul className="list pl0 pv2">
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="https://dribbble.com/fromcortes">
                Portfolio
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Calligritype
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Taste Notes
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Fieldy
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Sogol
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Illustree
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Quarry
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Cordio
              </a></li>
            </ul>
          </div>
          <div id="Social">
            <ul className="list pl0 pv2">
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Twitch
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Twitter
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                YouTube
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                Instagram
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" href="#">
                GitHub
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
