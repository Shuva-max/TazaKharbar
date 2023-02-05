import React, { Component } from "react";
import NeswItem from "./NeswItem";
import Page from "./Page";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articls: [],
      loading: false,
      totalResults:0 
    };
  }
  page = 1;
    display (){
    console.log(this.props.title)
    console.log(this.props.country)
    console.log(this.props.category)
    console.log(this.props.pageSize)
    console.log(this.state.page)
  }

  async updateArticles () {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=405cd35c9c664fef82d00a3837208804&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading:false,
    articls: parsedData.articles, 
    totalResults: parsedData.totalResults});
  }
  
  async componentDidMount() {
    this.updateArticles();
    this.display();
  };
  
  handlePrevClick = async () => {
    this.page = this.page - 1;
    this.updateArticles();
    this.display();
  };
  handleNextClick = async () => {
    this.page = this.page + 1;
    this.updateArticles();
    this.display();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container my-3">
          {/* Page component */}
          {!this.state.loading && <Page page={this.page} pageSize={this.props.pageSize} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} totalResults={this.state.totalResults} />}
          <h1 style={{margin:'0.625rem'}} >{this.props.title}</h1>
          {/* Spinner component */}
          {this.state.loading && <Spinner/>}

          <div className="my-3">
            <div className="row">
              {!this.state.loading && this.state.articls.map((element) => {
                return (
                  <div className="col-md-4 mb-2" key={element.url}>
                    <NeswItem
                      title={
                        element.title !== null
                          ? element.title
                          : "No Title"
                      }
                      description={
                        element.description ? element.description : "No Description"
                      }
                      imageUrl={element.urlToImage }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      auther={element.auther}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
              
            </div>
          </div>

          {/* Page */}
          {!this.state.loading && <Page page={this.page} pageSize={this.props.pageSize} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} totalResults={this.state.totalResults}  />}
        </div>
      </React.Fragment>
    );
  }
}

News.propTypes = {
  country:PropTypes.string,
  title:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}
News.defaltProps = {
  country:"in",
  title:"Top Headline",
  category:"general",
  pageSize:9
}