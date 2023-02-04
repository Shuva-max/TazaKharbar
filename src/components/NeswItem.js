import React, { Component } from 'react'

export default class NeswItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl?imageUrl:"https://bilder1.n-tv.de/img/incoming/crop19951568/1981322875-cImg_16_9-w1200/07215e565cf26d1abf7081f931f61785.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title?title:""}</h5>
                <p className="card-text">{description?description:""}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-md btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
