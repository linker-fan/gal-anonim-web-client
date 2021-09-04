import axios from 'axios';
import getBaseURL from '../Utils/url_getter';

class AuthService {
    login(username, password) {
        let payload = {
            "username": username,
            "password": password,
        };

        return axios
            .post(getBaseURL() + REACT_APP_LOGIN_ENDPOINT, payload)
            .then((response) => {
                console.log(response);
                if(response.data.token){
                    localStorage.setItem("token", JSON.stringify(response.data));   
                }

                return response.data;
            });
    }

    logout(){
        localStorage.removeItem("token");
    }

    register(username, email, password1, password2){
        let payload = {
            "username": username,
            "email": email,
            "password1": password1,
            "password2": password2
        }

        return axios.post(getBaseURL() + REACT_APP_REGISTER_ENDPOINT, payload);
    }
}


export default new AuthService();