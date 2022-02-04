const express = require('express');
const app = express();
const requestIp = require('request-ip');
let request = require('request');
const port = 3000;


app.get('/', (req,res) => {
    var clientIp = requestIp.getClientIp(req); 
    console.log(clientIp);

    let url = `http://ip-api.com/json/${clientIp}`;
    let dados = "";

    request(url, function (err, response, body) {
        if(err){
            console.log('error:', err);
        } else {
            let ip = JSON.parse(body);
            console.log(ip)
           res.json(ip);
        }
     });
});


app.get('/ip', (req,res) => {
 
});



app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
  