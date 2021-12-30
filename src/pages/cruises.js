import * as React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import CruiseMap from "../components/CruiseMap";


export default function Cruises({data}){
    return (
        <Layout pageTitle={"Cruises"}>
            <MapContent>
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