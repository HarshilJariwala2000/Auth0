const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');

const app = express();
app.use(cors());

const verifyJwt = jwt({
    secret:jwks.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksRequestsPerMinute:5,
        jwksUri:'https://dev-bzg646bh.us.auth0.com/.well-known/jwks.json'
    }),
    audience:'https://api.com',
    issuer:'https://dev-bzg646bh.us.auth0.com/',
    algorithms:['RS256']
}).unless({path:['/']})

app.use(verifyJwt);

app.get('/',(req,res)=>{
    res.send('Index');
})

app.get('/protected',(req,res)=>{
    res.send('Protected');
})

app.listen(4000,()=>console.log('Port 4000'));