import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ma0 pa0 w-100 animated fadeIn">
        <div className="w-100 h01 bg-rainbow" />
        <div className="fl mw6 w-100 ph4 pt3">
          <h1 className="f3 fw4 lh-copy">Hey <span className="absolute spin">👋</span><br />I'm Dennis Cortés.</h1>
          <h2 className="f5 fw4 lh-copy mb4">Designer, Illustrator, Developer, &amp; Writer.<br />Lead Designer at Satchel Health,<br />Co-Founder at Quarry.</h2>
          <h2 className="f6 fw4 lh-copy">New website coming soon, watch me<br />stream my process on <a className="black rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://twitch.tv/cortesarts">Twitch.</a></h2>
          <p><a rel="noopener noreferrer" target="_blank" href="mailto:hi@cortes.us" className="f6 rainbow">hi@cortes.us</a></p>
          <div id="Work">
            <ul className="list pl0 pv2">
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://dribbble.com/fromcortes">
                Blog
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://dribbble.com/fromcortes">
                Portfolio
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://instagram.com/calligritype">
                Calligritype
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://coffee.cortes.us">
                Taste Notes
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://fieldy.co">
                Fieldy
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://sogol.co">
                Sogol
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://instagram.com/illustree">
                Illustree
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://usequarry.com">
                Quarry
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://soundcloud.com/cordio/tracks">
                Cordio
              </a></li>
            </ul>
          </div>
          <div id="Social">
            <ul className="list pl0 pt2">
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://twitch.tv/cortesarts">
                Twitch
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://twitter.com/fromcortes">
                Twitter
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="http://youtube.com/cortesarts">
                YouTube
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://instagram.com/fromcortes">
                Instagram
              </a></li>
              <li className="pv1 link lh-title f6"><a className="black-50 rainbow-hover" rel="noopener noreferrer" target="_blank" href="https://github.com/fromcortes">
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
