import axios from 'axios';
import {urlBuilder, messageBuilder} from '../helpers/utils'

const AWS = require('aws-sdk');

exports.handler = (event, context) => {
    const lat = '49.2859524'
    const long = '-123.1137529'
    let url = urlBuilder(lat, long);

    axios.get(url)
        .then(res => {
            console.log(res);
            if (res) {
                const sns = new AWS.SNS();
                const params = {
                    Message: messageBuilder(res.data),
                    PhoneNumber: process.env.PHONE_NUMBER,
                    MessageAttributes: {
                        'AWS.SNS.SMS.SenderID': {
                            'DataType': 'String',
                            'StringValue': 'Weather'
                        }
                    }
                }
                console.log(params.PhoneNumber);
                console.log(params.Message);

                sns.publish(params, context.done);
            }
        })
        .catch(err => {
            context.fail(err);
        })
};