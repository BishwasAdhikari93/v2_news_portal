import React from "react";
const SingleSideNews = ({ item }) => (
  <li className="collection-item avatar" key={item.url}>
    <img src={item.urlToImage} alt={item.title} className="circle" />
    <a href={item.url}>
      <span className="title">{item.title}</span>
    </a>
    <p>
      {item.source.name} <br />
      {item.author}
    </p>
  </li>
);
export default SingleSideNews;
