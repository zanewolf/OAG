//
// // rebuild-redirects.js
// // - Scheduled function to automatically rebuild the site at a set schedule
// // - Schedule is defined in the `netlify.toml` in the repository root though
// //   it is possible to define it in this function. For more see
// //   https://github.com/netlify/labs/tree/main/features/scheduled-functions/documentation
// // - Time is set in the project `netlify.toml`
// //
// //
// // SPDX-License-Identifier: Jam
//
//
// import fetch from "node-fetch";
//
// const handler = async function(event, context) {
//
//
//     // Trigger a rebuild
//     const postUrl = `https://api.netlify.com/api/v1/sites/${process.env.GATSBY_NETLIFY_SITE_ID}/builds`;
//
//     const response = await fetch(postUrl, {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${process.env.GATSBY_NETLIFY_UA_TOKEN}`,
//             "User-Agent": `${process.env.GATSBY_API_UA_STRING}`
//         }
//     });
//
//     const result = await response.json();
//     console.log("Result: ", result);
//
//     return {
//         statusCode: 200,
//     };
// };
//
// module.exports.handler = handler;