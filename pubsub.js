
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// const port = 4500
const port = process.env.PORT || 4500;


// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-2'});


// const params = {
//   TopicArn : process.env.ARN,
//   Protocol: 'https',
//   Endpoint : 'https://sns-pub-sub.herokuapp.com/events'

// }

// const sns = new AWS.SNS({apiVersion: '2010-03-31'});

// sns.subscribe(params, (err, data) => {
//     if (err) {
//         console.log("<<<<<<<<<<<<<<<<<<<<< Error")
//         console.log(err);
//     } else {
//         console.log(">>>>>>>>>>>>>>>>>> Success")
//         console.log(data);
//         // console.send(data);
//     }
// });





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/events', (eq, res) => {
    
    if(req.headers['x-amz-sns-message-type'] == 'SubscriptionConfirmation'){
        console.log(req.headers)
        console.log("*************************")
        console.log(req.body)
    }

    console.log(req.body)

    res.send("This is good")
  }) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
