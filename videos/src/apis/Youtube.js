import axios from 'axios';

//const KEY = 'AIzaSyAnM_1T-nwe8QRVzeVejjnUFumV5ay2p8Q';

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    // params: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     key: KEY
    // }
});