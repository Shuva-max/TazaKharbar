import React, { useEffect, useState } from "react";
import NeswItem from "./NeswItem";
import Spinner from "./Spinner"
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";

const News =(props)=> {
  const fpage = 9;
  const [articls, setAriticls] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(props.category);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const handleChangeCategory = ()=>{
    if(location.pathname === '/'){
      setCategory("");
    } else{
      setCategory(props.category);
    }
  }
  useEffect(()=>{
    handleChangeCategory();
    // eslint-disable-next-line
  }, [category])

  const updateArticles = async()=> {
    props.setProgress(10);
    setLoading(true)

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(30);
    setAriticls(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
    setLoading(false)
  }

  const capitalizedFirstLetter =(str)=> {
    if(str !== ""){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return ;
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
    // console.log("this is from fetch fuction", articls.length,totalResults, page);
  };

    return (
      <React.Fragment>
        <div className="container my-2">
          <h1 style={{margin:'69px 0 14px 0', textAlign:'center'}}>
            TazaKharbar - Top {capitalizedFirstLetter(category)} Headlines
          </h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articls.length}
            next={fetchMoreData}
            hasMore={fpage*page <= totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {/* Map function */}
                {articls.map((element) => {
                  return (
                    <div className="col-md-4 mb-1" key={element.url}>
                      <NeswItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description
                            ? element.description
                            : ""
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
  pageSize: PropTypes.number
};
News.defaltProps = {
  country: "in",
  title: "Top Headline",
  category: "general",
  pageSize: 9
};

export default News;
