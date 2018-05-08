import axios from 'axios';

export default {
    postNewTable: function(data) {
        return axios.post('/database', data)
    }

}