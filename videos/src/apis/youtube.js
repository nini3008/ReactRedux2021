import axios from 'axios'

const KEY = "AIzaSyBchRpqvXfs-zoK2ASUh-hSRJJ8VwH3V0U"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})