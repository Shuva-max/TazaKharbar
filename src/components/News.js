import React, { Component } from "react";
import NeswItem from "./NeswItem";
import Page from "./Page";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articls: [],
      loading: false,
      page: 1,
      totalResults:0,
      pageSize:18 
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=405cd35c9c664fef82d00a3837208804&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articls: parsedData.articles, 
                    totalResults: parsedData.totalResults,
                    loading: false });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=405cd35c9c664fef82d00a3837208804&page=${this.state.page - 1}&pageSize=18`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articls: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      articls: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading: false
    });
  };
  handleNextClick = async () => {
    console.log("next"); let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=405cd35c9c664fef82d00a3837208804&page=${this.state.page + 1}&pageSize=18`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articls: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading:false
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Page component */}
        <div className="container my-3">
          {/* Page component */}
          {!this.state.loading && <Page page={this.state.page} pageSize={this.state.pageSize} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} totalResults={this.state.totalResults} />}
          <h1>{this.props.title}</h1>
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
                          : "Click to know more"
                      }
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage ? element.urlToImage : "/"}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
              
            </div>
          </div>

          {/* Page */}
          {!this.state.loading && <Page page={this.state.page} pageSize={this.state.pageSize} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} totalResults={this.state.totalResults}  />}
        </div>
      </React.Fragment>
    );
  }
}