const express = require('express');
const app = express();
const requestIp = require('request-ip');
const port = 3000;


app.get('/', (req,res) => {
    var clientIp = requestIp.getClientIp(req); 
    console.log(clientIp);
    res.json({clientIp});
});


app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
  