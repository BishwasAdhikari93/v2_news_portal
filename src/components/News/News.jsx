import React, { Component } from "react";
import SingleNews from "./SingleNews";
import Error from "./Error";
class News extends Component {
  state = {
    news: [],
    error: false,
  };
  componentDidMount() {
    const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.source}&apiKey=your-api-key`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  RenderItems = () => {
    //runs if no error
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <SingleNews item={item} key={item.url} />
      ));
    } else {
      //otherwise return Error Component with a message
      return <Error />;
    }
  };

  render() {
    return (
      <div className="container ui">
        <div className="ui divided items">{this.RenderItems()}</div>
      </div>
    );
  }
}

export default News;
