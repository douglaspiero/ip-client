const express = require('express');
const app = express();
const requestIp = require('request-ip');
let request = require('request');
const port = 3000;


app.get('/', (req,res) => {
    var clientIp = requestIp.getClientIp(req); 
    console.log(clientIp);
    res.json({clientIp});
});


app.get('/ip', (req,res) => {
    let url = `http://ip-api.com/json`
    let dados = '';
 
    request(url, function (err, response, body) {
         if(err){
         console.log('error:', err);
   } else {
       let ipInfo = JSON.parse(body);
       dados = `IP: ${ipInfo.query}
                Country: ${ipInfo.country}
                City: ${ipInfo.city}
                Region: ${ipInfo.regionName}
                Lat: ${ipInfo.lat}
                Lon: ${ipInfo.lon}
                Organization: ${ipInfo.org}
                `
       res.json({ipInfo});
        }
    });
});



app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
  