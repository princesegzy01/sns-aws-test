
const express = require('express')
const app = express()
// const port = 4500
const port = process.env.PORT || 8080;


// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-2'});


const params = {
  TopicArn : process.env.ARN,
  Protocol: 'https',
  Endpoint : 'https://sns-pub-sub.herokuapp.com/events'

}

const sns = new AWS.SNS({apiVersion: '2010-03-31'});

sns.subscribe(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        res.send(data);
    }
});





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/events', (req, res) => {
    res.send(req.body)
  }) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
