#!node
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
