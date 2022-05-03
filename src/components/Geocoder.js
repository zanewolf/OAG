import axios from 'axios';

let baseGeoCodeURL = "https://maps.googleapis.com/maps/api/geocode/json?key=";
let baseHereGeoCodeUrl = "https://geocode.search.hereapi.com/v1/geocode?q=";


export default function getLatLon(address){

    if(address){
        let address_clean = address.replace(/[^\w\s\']|_/g, "")
            .replace(/\s+/g, " ");

            return axios.get(baseHereGeoCodeUrl + address_clean+"&apiKey="+ process.env.GATSBY_HERE_API_KEY);
    }

}