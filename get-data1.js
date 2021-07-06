#!node
'use strict'

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://172.16.1.10:9200/' })

async function run() {
    await client.index({
        index: 'game-of-thrones',
        id: '1',
        body: {
            character: 'Ned Stark',
            quote: 'Winter is coming.'
        }
    })

    const { body } = await client.get({
        index: 'game-of-thrones',
        id: '1'
    })

    console.log(body.hits[2])
}

run().catch(console.log)
