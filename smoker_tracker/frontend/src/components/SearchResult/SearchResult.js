import React from 'react';
// stats to show:
// title, date, meat, cut of meat, pounds pre and post trim

const SearchResult = props => 
    <div 
        className="container result"
        onClick={() => props.sessionClick(props.sessionId)}
    >
        <div className="row noMargLeftRight" value={props.value}>
            <div className="col-lg-5 result__title">
                <p className="font--header">
                    <span className="bold">{props.title} </span> 
                    <span className="font--normal"> by </span>
                     {props.first_name}
                </p>
            </div>

        </div>
        <div>
            <div className="col-lg-4">
            <h4>Weight: {props.ogWeight}</h4>
            </div>
        </div>
        <div className="row noMargLeftRight">
            <div className="col-lg-2">
                <h4>Animal: {props.animal}</h4>
            </div>
            <div className="col-lg-2">
                <h4>Cut: {props.cut}</h4>
            </div>
        </div>
    </div>

export default SearchResult