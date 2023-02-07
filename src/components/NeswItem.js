import React from "react";

export default function NeswItem (props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card mx-1 my-1">
          <div>
          <span className="badge rounded-pill bg-danger"  style={{display:'flex',right:'-9px',top:'-4px',position:'absolute'}}>{source}</span>
            
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-end">
              <small className="text-muted">
                {author?"By "+author:""} on {new Date(date).toGMTString()}
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
