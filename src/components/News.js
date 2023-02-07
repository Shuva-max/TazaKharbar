import React, { Component } from "react";
import NeswItem from "./NeswItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articls: [],
      loading: true,
      totalResults: 0,
      page: 1,
    };
  }

  updateArticles = async()=> {
    this.props.setProgress(10);
    console.log(this.props.apiKey)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey?this.props.apiKey:'405cd35c9c664fef82d00a3837208804'}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(30);
    this.setState({
      loading: false,
      articls: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateArticles();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey?this.props.apiKey:'405cd35c9c664fef82d00a3837208804'}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articls: this.state.articls.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container my-2">
          <h1 style={{margin:'69px 0 14px 0', textAlign:'center'}}>
            NewsThirsty - Top {this.props.category} headlines
          </h1>
          {/* Spinner component */}
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articls.length}
            next={this.fetchMoreData}
            hasMore={this.state.articls.lentgh !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articls.map((element) => {
                  return (
                    <div className="col-md-4 mb-1" key={element.url}>
                      <NeswItem
                        title={element.title ? element.title : "No Title"}
                        description={
                          element.description
                            ? element.description
                            : "No Description"
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        date={element.publishedAt}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

News.propTypes = {
  country: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
News.defaltProps = {
  country: "in",
  title: "Top Headline",
  category: "general",
  pageSize: 9,
};
