#!node
const fetch = require('node-fetch');

const username = "user1";
const password = "pass1";
// const url = "http://172.16.1.10:9200/";
// const url = "http://172.16.1.10:9200/product/default/2";

const url =  "http://hostname_address/";

fetch(url, {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64')
    },
    method: 'GET',
    // body: 'a=1'
})
    // .then(res => res.json())
    .then(res => res.text())
    .then(text => {
        // console.log(json);
        console.log(text);
    })
    .catch(err => console.log(err));
