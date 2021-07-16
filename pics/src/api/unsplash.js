import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID -JT-ys3vsNTawmfF827n68DCe1M28L5pxkr3YNIk5us'
    }
})