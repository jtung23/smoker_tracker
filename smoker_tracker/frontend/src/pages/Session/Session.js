import React, {Component} from 'react'

import DataGrid from '../../components/DataGrid';

import API from '../../utils/API';
import TableFn from '../../utils/TableFn'
import ReactDataGrid from 'react-data-grid';
import update from 'immutability-helper';

class Session extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            columns: []
        }
    }

    render() {
        return (
            <div>
            
            </div>
        )    
    }
}
export default Session