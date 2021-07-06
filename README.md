# node-logstash

node-logstash

## send log to logstash kibana

```
const winston = require('winston');

const logger = require('winston-logstash-transport').createLogger(null, {
    application: 'DESKTOP-XCVDFGH',
    logstash: { 
        host: '192.168.4.42', 
        port: 514 },
    transports: [
        new winston.transports.Console(),
    ]
})

logger.log('info', 'TIME' + Date.now()  );
// logger.log('error', 'some message err');
logger.on('finish', () => process.exit());
logger.end();
```

## get data with node-fetch

```
#!node
const fetch = require('node-fetch');

const username = "user1";
const password = "pass2";

const url = "http://172.16.1.10:9200/product/default/2";

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
 ```
