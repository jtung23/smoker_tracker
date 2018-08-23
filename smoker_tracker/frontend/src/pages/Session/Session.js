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
        const locData = this.props.history.location.state.data
        this.setState({
            rows: locData.data,
            columns: locData.columns,
            sessionData: locData
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