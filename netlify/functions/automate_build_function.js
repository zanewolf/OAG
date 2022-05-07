

const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch');

const handler = async function(event, context) {
    console.log("Received event:", event)

    const REBUILD_URL = `https://api.netlify.com/build_hooks/${process.env.NETLIFY_BUILD_HOOK}`;

    let response = await fetch(REBUILD_URL, { method: 'POST'});
    // if (!response.ok){
    //     throw new Error(response.statusText);
    // }
    const result = await response.json();
    console.log("automated build function result: ", result);
//
    return {
        statusCode: 200,
    };
};

module.exports.handler = schedule("@hourly", handler);
