import axios from 'axios'

let api = {
fetchPopularRepos: function (language) {
        let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
    
        return axios.get(encodedURI) // return promise
            .then(response => response.data.items)
    
}
}
export default api
    
