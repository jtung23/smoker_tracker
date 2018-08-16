import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default {
    // retrieves all sessions
    getAllSessions: function() {
        return axios.get('/api/sessions/')
    },
    // posts a new session
    postNewTable: function(data) {
        return axios.post('/api/sessions/', data)
    },

    // searches for session(s)
    searchSessions: function(params) {
        return axios.get('api/sessions/', params)
    },

    // deletes a session
    deleteSession: function(id) {
        return axios.delete('api/sessions/'+id)
    },

    // updates a session
    updateSession: function(id) {
        return axios.update('api/sessions/'+id)
    },

    loginRegUser: function(url, requestObj, headers) {
        return axios.post(url, requestObj, headers)
    },

    getUser: function(id) {
        return axios.get(`api/users/${id}/`)
    }
}