const express = require('express');
const app = express();
const axios = require('axios')

const NAME = process.env.NAME || 'default service name';
const PORT = process.env.PORT;

app.get('/health', function(req, res) {
    res.send({
        NAME,
        PORT,
        message: "/health end point"
    })
})

app.get('/deep-health', async function(req, res) {
    try {
        //from docs and here: https://zetcode.com/javascript/axios/
        const {data: res1} = await axios.get(`${process.env.POSTS_URL}:${PORT}/health`);
        const {data: res2} = await axios.get(`${process.env.VOTES_URL}:${PORT}/health`);
        res.send({
            res1,
            res2
        })
    } catch(err) {
        console.log(err);
        res.send({
            err
        })
    }
})

app.listen(PORT, function() {
    console.log(`Listening to requests on ${PORT}`);
});