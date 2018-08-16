import React from 'react';
// stats to show:
// title, date, meat, cut of meat, pounds pre and post trim

const SearchResult = props => 
    <div className="container result">
        {console.log(props)}
        <div className="row">
            <div className="col-lg-5 result__title">
                <h1>{props.title}</h1>
                <p>By {props.username}</p>
            </div>
            <div className="offset-lg-5">
                <h4>Weight: {props.ogWeight}</h4>
            </div>
        </div>
        <div className="row">
            <div className="col=lg-1">
                <h4>Animal: {props.animal}</h4>
            </div>
            <div className="col=lg-1">
                <h4>Cut: {props.cut}</h4>
            </div>
        </div>
    </div>

export default SearchResult