#!node
const fetch = require('node-fetch');

const username = "user1";
const password = "pass2";
// const url = "http://172.16.1.10:9200/";
// const url = "http://172.16.1.10:9200/product/default/2";

const url =  "http://203.159.241.122/";

fetch(url, {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64')
    },
    method: 'GET',
    // body: 'a=1'
})
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
