
const express = require('express')
const app = express()
const port = 4500

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-2'});


const params = {
  TopicArn : process.env.ARN,
  Protocol: 'http',
  Endpoint : 'http://localhost:4500/data'

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

app.post('/data', (req, res) => {
    res.send(req.body)
  }) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
