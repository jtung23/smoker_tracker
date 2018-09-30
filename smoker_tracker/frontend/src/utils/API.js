import axios from 'axios';
// const API_KEY = process.env.REACT_APP_API_KEY_YT

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

    // search for session
    searchSessions: function(id) {
        return axios.get(`/api/session/${id}/`)
    },

    // deletes a session
    deleteSession: function(id) {
        return axios.delete(`/api/session/${id}/`)
    },

    // updates a session
    updateSession: function(id) {
        return axios.update(`/api/session/${id}/`)
    },

    loginRegUser: function(url, requestObj, headers) {
        return axios.post(url, requestObj, headers)
    },

    getUser: function(id) {
        return axios.get(`api/users/${id}/`)
    }
}