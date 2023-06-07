import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description, imageurl, newsUrl} = this.props;


    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
      <img src={!imageurl?"https://c.biztoc.com/p/64eb424d4da71532/s.webp":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target='_blank' className="btn btn-s, btn-primary">Read more</a>
      </div>
    </div></div>
    )
  }
}
