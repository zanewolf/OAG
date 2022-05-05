
const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch');

const REBUILD_URL = process.env.GATSBY_NETLIFY_BUILD_HOOK;

// absolute vs relative urls?
// build hook?

const handler = async function(event, context) {
    console.log("Received event:", event)

    try{
        let response = await fetch(REBUILD_URL, { method: 'POST'});
        if (!response.ok){
            throw new Error(response.statusText);
        }
    } catch (err){
        console.log('automated_build_function error: ', err)
    }

    return {
        statusCode: 200,
    };
};

module.exports.handler = schedule("@hourly", handler);