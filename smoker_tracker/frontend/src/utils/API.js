import axios from 'axios';

export default {

    getAllSessions: function() {
        return axios.get('/api/sessions/')
    },

    postNewTable: function(data) {
        return axios.post('/database', data)
    }

}