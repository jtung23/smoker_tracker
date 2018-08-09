import React, {Component} from 'react'
import API from '../../utils/API';
import SearchResult from '../../components/SearchResult';

const Profile = (props) => 
    <div>
        {console.log(props)}
        {props.haveSessions ? props.sessions.map((val, i) =>
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
    </div>
export default Profile