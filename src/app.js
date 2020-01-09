import axios from 'axios';
import {urlBuilder, messageBuilder} from '../helpers/utils'
import AWS from 'aws-sdk';

require('dotenv').config();

exports.handler = (event, context) => {
    const lat = '49.2859524'
    const long = '-123.1137529'
    let url = urlBuilder(lat, long);

    axios.get(url)
        .then(res => {
            const sns = AWS.SNS();
            const params = {
                Message: messageBuilder(res),
                PhoneNumber: process.env.PHONE_NUMBER,
                MessageAttributes: {
                    'AWS.SNS.SMS.SenderID': {
                        'DataType': 'String',
                        'StringValue': 'Weather Notification Service'
                    }
                }
            }
            sns.publish(params, context.done);
        })
        .catch(err => {
            context.fail(err);
        })
};