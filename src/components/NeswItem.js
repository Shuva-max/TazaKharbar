import React, { Component } from "react";

export default class NeswItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, auther, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "21rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'93%',zIndex:'1'}} >{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-end">
              <small className="text-muted">
                By {auther} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-md btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
