import React, {Component} from 'react'
import API from '../../utils/API';
import SearchResult from '../../components/SearchResult';
import ResultsContainer from '../../components/ResultsContainer';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessions: []
        }
    }

    componentDidMount = () => {
        API.getAllSessions()
            .then(res => {
                this.setState({
                    sessions: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <ResultsContainer>
                    {this.state.sessions ? this.state.sessions.map((val, i) =>
                        <SearchResult
                            title={val.title}
                            ogWeight={val.ogWeight}
                            animal={val.animal}
                            cut={val.meatCut}
                            smoker={val.smoker}
                            date={val.created_at}
                            data={val.data}
                            columns={val.columns}
                            key={i}
                        /> 
                    ) : null}
                </ResultsContainer>
            </div>
        )
    }
}
export default Profile