export default function getBaseURL(){
    let url = REACT_APP_SERVER_BASE_URL + ":" + REACT_APP_SERVER_PORT
    return url;
}