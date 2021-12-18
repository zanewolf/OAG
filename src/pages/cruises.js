import * as React from 'react';
import Layout from "../components/Layout";
import { Link,graphql } from "gatsby";
import Card from "../components/Card";
import { FaMapMarker, FaExternalLinkAlt } from 'react-icons/fa';
import styled from "styled-components";
import {Button} from "../components/Button";
import PeopleCard from "../components/PeopleCard";
import OppsCard from "../components/OppsCard";
import ocean3 from "../images/ocean3.jpg";
import {teamData} from "../data/TeamData";
import CruiseMap from "../components/CruiseMap";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


export default function Cruises({data}){
    return (
        <Layout pageTitle={"Cruises"}>
            <MapContent>
                {/*<div>*/}
                {/*    <h1>Map of Cruises</h1>*/}
                {/*    <p> this is a map of stuff. </p>*/}
                {/*</div>*/}
                <CruiseMap data={data}/>
            </MapContent>

        </Layout>
    )
}
export const query = graphql`
   query CruiseData {   
    
    
    cruises: allAirtable(filter: {table: {eq: "Cruises"}}) {
    nodes {
      data {
        Longitude
        Purpose
        Shipname
        Location__Ocean_Lake_Sea_
        Latitude
        Year
        Collected
        Data_Available
      }
      id
    }
  }
}
`

const MapContent = styled.div`
  margin-top: var(--screen-nav-bar-height)
`