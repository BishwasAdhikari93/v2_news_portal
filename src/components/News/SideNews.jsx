import React, { Component } from "react";
import axios from "axios";
import SingleSideNews from "./SingleSideNews";
import Error from "./Error";

class SideNews extends Component {
  //received news props
  state = {
    sidenews: [],
    error: false,
  };
  componentDidMount() {
    const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.source}&apiKey=your-api-key`;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles,
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
      return this.state.sidenews.map((item) => (
        <SingleSideNews item={item} key={item.url} />
      ));
    } else {
      //otherwise return Error Component with a message
      return <Error />;
    }
  };

  render() {
    return <ul className="collection">{this.RenderItems()}</ul>;
  }
}

export default SideNews;
