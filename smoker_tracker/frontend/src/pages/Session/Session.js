import React, {Component} from 'react'

import DataGrid from '../../components/DataGrid';
import InfoBox from '../../components/InfoBox';
import API from '../../utils/API';
import TableFn from '../../utils/TableFn'
import CustomButton from '../../components/CustomButton';
import ReactDataGrid from 'react-data-grid';
import moment from 'moment';

class Session extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            columns: [],
            sessionData: {},
            userId: localStorage.getItem('id'),
            editStatus: true
        }
    }
    componentDidMount = () => {
        const locData = this.props.history.location.state.data
        const date = moment(locData.last_modified).toDate().toLocaleDateString() // converts to user friendly date
        let editStatus = true
        locData.last_modified = date
        if (this.state.userId == locData.userId) {
            editStatus = false
        }
        this.setState({
            rows: locData.data,
            columns: locData.columns,
            sessionData: locData,
            editStatus: editStatus
        })
    }

    rowGetter = (i) => {
		return this.state.rows[i];
    };
    
    editHandler = () => { // allows editing if userId matches from cookie
        // go to newsmoke page
        return
    }

    render() {
        const stateSession = this.state.sessionData
        return (
            <div className="session__page">
                <div className="session__container container noMaxWidth">
                    <div>
                        <h1 className="font--freightSans">
                            {stateSession.title}
                            <CustomButton 
                                disabled={this.state.editStatus}
                                className="btn"
                                in="Edit"
                                value="edit"
                                clickHandler={this.editHandler} />
                        </h1>

                    </div>
                    <DataGrid>
                        <ReactDataGrid
                            enableCellSelect={false}
                            columns={this.state.columns}
                            rowGetter={this.rowGetter}
                            rowsCount={this.state.rows.length}
                        />
                    </DataGrid>
                    
                    <InfoBox
                        animal={stateSession.animal}
                        meatCut={stateSession.meatCut}
                        ogWeight={stateSession.ogWeight}
                        smoker={stateSession.smoker}
                        physDesc={stateSession.physDesc}
                        notes={stateSession.notes}
                        created_at={stateSession.created_at}
                        last_modified={stateSession.last_modified}

                    />
                </div>
            </div>
        )    
    }
}
export default Session