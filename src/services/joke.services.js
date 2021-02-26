import axios from 'axios';
import authHeader from './auth-header';

const API_URL_JOKE = 'http://api.icndb.com/jokes/';
const API_URL = "http://localhost:8600/api/joke/"
const API_random = "http://api.icndb.com/jokes/random"


class JokeService{
    getall_joke(){
        return axios.get(API_URL_JOKE)
    }
    add_joke(payload){        
        console.log(payload)
        return axios.post(API_URL,payload,{headers: authHeader()})
    }
    search(account){        
        console.log(account)
        const firstName = account.firstName
        const lastName = account.lastName
        return axios.post(API_random+'?firstName='+firstName+'&lastName='+lastName)
        // return axios.post('http://api.icndb.com/jokes/random?firstName=John&lastName=Doe')
        
    }

    getmyjoke(id) {
        return axios.get(API_URL +'get/'+ id , { headers: authHeader() });
      }
    chang_status(payload) {
        console.log(payload)
        const id = payload.id
        return axios.put(API_URL +'status/'+id, payload, { headers: authHeader() });
      }
    deletejoke(id) {
      console.log(id)
        return axios.delete(API_URL +'delete/'+id, { headers: authHeader() });
      }
}

export default new JokeService