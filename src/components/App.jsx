import React, { Component } from "react";
import News from "../components/News/News";
import SideNews from "../components/News/SideNews";

class App extends Component {
  state = {
    news1: {
      type: "everything",
      source: "domains=wsj.com&language=en",
    },
    news2: {
      type: "top-headlines",
      source: "sources=bbc-news",
    },
    news3: {
      type: "everything",
      source: "domains=comicbookmovie.com&language=en",
    },
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="http://localhost:3000" className="brand-logo center">
                News Feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <h4>Latest News</h4>
            <News news={this.state.news2} />
            <News news={this.state.news1} />
          </div>
          <div className="col s4">
            <h4>More News</h4>
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
