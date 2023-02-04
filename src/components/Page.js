import React from 'react';


export default function Page(props) {
  return (
    <div className="d-flex justify-content-between">
      <button onClick={props.handlePrevClick} disabled={props.page <= 1} type="button" className="btn btn-dark"> &larr; Previous</button>
      <button onClick={props.handleNextClick} disabled={props.page + 1 > Math.ceil(props.totalResults/props.pageSize)} type="button" className="btn btn-dark">Next &rarr;</button>
    </div>
  )
}
