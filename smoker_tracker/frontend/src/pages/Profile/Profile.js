import React, {Component} from 'react'
import API from '../../utils/API';
import SearchResult from '../../components/SearchResult';
import ResultsContainer from '../../components/ResultsContainer';
import Mathy from '../../utils/Mathy';
import {Link} from "react-router-dom";
import history from '../../utils/history';

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
                console.log(res.data)
                res.data.forEach((val, i) => {
                    console.log('USERID: ', val.userId)
                    API.getUser(val.userId)
                        .then(u => {
                            res.data[i].username = u.data.username
                            res.data[i].first_name = u.data.first_name
                            res.data[i].last_name = u.data.last_name
                            
                            res.data[i].ogWeight = `${Mathy.round(parseInt(val.ogWeight), 2).toFixed(2)} lbs`
                            
                            this.setState({
                                sessions: res.data
                            })
                        })
                        .catch(err => {console.log(err)})
                })
            })
    }

    goToSession = (sessionId) => {
        console.log(sessionId)
        const string = sessionId.toString()
        history.push({
            pathname: `/session/${string}`,
            state: {sessionId: sessionId}
          })
    }
    render() {
        console.log(this.state.sessions)
        return (
            <div>
                <ResultsContainer>
                    {this.state.sessions ? this.state.sessions.map((val, i) =>
                        <SearchResult
                            first_name={val.first_name}
                            username={val.username}
                            title={val.title}
                            ogWeight={val.ogWeight}
                            animal={val.animal}
                            cut={val.meatCut}
                            smoker={val.smoker}
                            date={val.created_at}
                            data={val.data}
                            columns={val.columns}
                            key={val.sessionId}
                            value={val.sessionId}
                            sessionClick={() => this.goToSession(val.sessionId)}
                        /> 
                    ) : null}
                </ResultsContainer>
            </div>
        )
    }
}
export default Profile