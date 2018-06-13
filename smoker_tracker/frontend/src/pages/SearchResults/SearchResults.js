import React, {Component} from 'react';
import SearchResult from '../../components/SearchResult';
import API from '../../utils/API.js';

class SearchResults extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        API.getAllSessions()
            .then(res=> {
                console.log(res.data)
            })
        const params = {
            userId: 1
        }
        API.searchSessions(params)
            .then(res => {
                console.log('search result:', res)
            })
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