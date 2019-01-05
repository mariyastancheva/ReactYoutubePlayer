import axios from 'axios';

const KEY = 'AIzaSyAU1M_stjts5AafJ95aqEwstzmsujP3-80';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        part: 'snippet',
        key: KEY
    }
});

