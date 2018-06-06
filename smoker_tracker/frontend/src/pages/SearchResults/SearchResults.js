import React, {Component} from 'react';
import API from '../../utils/API.js';

class SearchResult extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Search Results</h1>
                        <p>Search parameters used</p>
                </div>
                <div className="displayResults">
                </div>
            </div>
        )
    }
}

export default SearchResult;