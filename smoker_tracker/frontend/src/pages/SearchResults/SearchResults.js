import React, {Component} from 'react';
import SearchResult from '../../components/SearchResult';
import API from '../../utils/API.js';

class SearchResults extends Component {
    componentWillMount() {
        
    }
    constructor(props) {
        super(props)
    }
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

export default SearchResults;