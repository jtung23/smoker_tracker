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
        
    }
    componentDidUpdate = () => {
        console.log('didupdate: ', this.props)
    }
    render() {
        return (
            <div>
                <ResultsContainer>
                    {this.props.sessions ? this.props.sessions.map(val =>
                        <SearchResult
                            title={val.title}
                            ogWeight={val.ogWeight}
                            animal={val.animal}
                            cut={val.meatCut}
                            smoker={val.smoker}
                            date={val.created_at}
                            data={val.data}
                            columns={val.columns}
                        /> 
                    ) : null}
                </ResultsContainer>


            </div>
        )    
    }
}
export default Profile