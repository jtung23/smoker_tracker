import React, {Component} from 'react'

import DataGrid from '../../components/DataGrid';

import API from '../../utils/API';
import TableFn from '../../utils/TableFn'
import ReactDataGrid from 'react-data-grid';

class Session extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            columns: []
        }
    }
    componentDidMount = () => {
        API.searchSessions(this.props.location.state.sessionId)
            .then(res => {
                console.log(res)
            })
    }
    rowGetter = (i) => {
		return this.state.rows[i];
	};

    render() {
        return (
            <div>
                <DataGrid>
                    <ReactDataGrid
                        enableCellSelect={false}
                        columns={this.state.columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.state.rows.length}
                    />
                </DataGrid>
            </div>
        )    
    }
}
export default Session