const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch');

const REBUILD_URL = process.env.GATSBY_NETLIFY_BUILD_HOOK;

const handler = async function(event, context) {
    console.log("Received event:", event)

    await fetch(REBUILD_URL, { method: 'POST'});

    return {
        statusCode: 200,
    };
};

module.exports.handler = schedule("@daily", handler);