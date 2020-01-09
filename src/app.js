import axios from 'axios';
import urlBuilder from '../helpers/utils'
require('dotenv').config();

exports.handler = (event, context, callback) => {
    const lat = '49.2859524'
    const long = '-123.1137529'
    let url = urlBuilder(lat, long);

    axios.get(url)
        .then(res => {

        })
        .catch(err => {
            callback(err);
        })
};