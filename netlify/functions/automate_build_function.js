
/*
const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch');

const handler = async function(event, context) {
    console.log("Received event:", event)

    const REBUILD_URL = process.env.NETLIFY_BUILD_HOOK;

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

module.exports.handler = schedule("@hourly", handler);*/
