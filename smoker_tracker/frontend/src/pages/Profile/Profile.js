import React, {Component} from 'react';
import API from '../../utils/API';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userSessions: []
        }
    }

    componentDidMount = () => {
        console.log('page loads')
        const id = localStorage.getItem('id') // string
        API.getAllSessions() // gets every session then filters
            .then((res,err)=> {
                if (err) {
                    console.log('ERR',err)
                }
                const filtered = res.data.filter( ele => ele.userId == id)
                this.setState({
                    userSessions: filtered
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.userSessions.map(ele =>
                    <div key={ele.sessionId}>
                        {ele.title}
                    </div>
                )}
            </div>
        )    
    }
}
export default Profile