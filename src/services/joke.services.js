import axios from 'axios';

const API_URL = 'http://api.icndb.com/jokes/';

class JokeService{
    getall_joke(){
        return axios.get(API_URL)
    }
    add_joke(){
        return
        
        // return axios.get(API_URL)
    }

}

export default new JokeService