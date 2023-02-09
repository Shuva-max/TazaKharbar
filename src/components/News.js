import React, { useEffect, useState } from "react";
import NeswItem from "./NeswItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articls, setAriticls] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)

  const updateArticles = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey?props.apiKey:'405cd35c9c664fef82d00a3837208804'}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(30);
    setAriticls(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  const capitalizedFirstLetter =(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(()=>{
    updateArticles()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page+1)
    setAriticls(articls.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log("this is from fetch fuction", articls.length,totalResults);
  };

    return (
      <React.Fragment>
        <div className="container my-2">
          <h1 style={{margin:'69px 0 14px 0', textAlign:'center'}}>
            TazaKharbar - Top {capitalizedFirstLetter(props.category)} Headlines
          </h1>
          <InfiniteScroll
            dataLength={articls.length}
            next={fetchMoreData}
            hasMore={articls.lentgh !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articls.map((element) => {
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

export default News;
