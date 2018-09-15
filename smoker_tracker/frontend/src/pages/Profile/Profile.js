import React, {Component} from 'react';
import API from '../../utils/API';

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        const id = localStorage.getItem('id')
        API.searchSessions(id)
            .then((res,err)=> {
                if (err) {
                    console.log('ERR',err)
                }
                console.log('RES',res)
            })
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )    
    }
}
export default Profile