import React from "react";
const SingleNews = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>
          <b>{item.title}</b>
        </p>
        <br />
        <b>Published:</b>
        <span>{item.publishedAt}</span>
      </div>
      <div className="card-action">
        <a className="header" href={item.url}>
          Full Article
        </a>
      </div>
    </div>
  </div>
);
export default SingleNews;
