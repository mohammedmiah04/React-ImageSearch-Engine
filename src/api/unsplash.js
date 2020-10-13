import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6oO4DzzGr14EOHpVJz8E-i2PO2O-fp3RTRy-RQk8-AY'
    }
});