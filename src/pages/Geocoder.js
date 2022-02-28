// import opencage from "opencage-api-client";
// import {graphql} from "gatsby";
// import * as React from "react";
//
// async function getLatLong (location) {
//
//     // console.log(location)
//
//     let coords = opencage
//         .geocode({key:process.env.GATSBY_OPENCAGE_API_KEY, q: location})
//         .then(response=>{
//             // console.log([response.results[0].geometry.lat,response.results[0].geometry.lng])
//             return ([response.results[0].geometry.lat,response.results[0].geometry.lng])
//         })
//
//     console.log('getlatlong', coords)
//
//     return coords
//
// }
//
// function ProcessData({data}){
//
//
//     data.cruises.nodes.forEach(node=>{
//
//         if (node.data.Latitude && node.data.Longitude){
//             node.data.Latitude = +node.data.Latitude
//             node.data.Longitude = +node.data.Longitude
//             node.data.position=[node.data.Latitude,node.data.Longitude]
//         } else{
//             // node.data.position =[0,0]
//
//             node.data.position = getLatLong(node.data.Main_Location)
//                 .then(coords => {console.log(coords); return coords})
//         }
//     })
//
//     console.log(data)
//
//
//
//     return (
//         <>
//         Hi
//         </>
//     )
// }
// export const query = graphql`
//    query dataData {
//     cruises: allAirtable(filter: {table: {eq: "Data"}}) {
//     nodes {
//       data {
//         Longitude
//         Latitude
//         Main_Location
//         Year
//         Data_Available
//         Primary_Field
//       }
//       id
//     }
//   }
// }
// `