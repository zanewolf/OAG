import * as React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
// import {CruiseMap} from "../components/CruiseMap";

import {MapContainer, TileLayer, Marker, Popup, LayerGroup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {FaCheckSquare, FaTimes} from "react-icons/all";
import L from 'leaflet';
import icon from '../images/marker-icon-violet.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = null;

if (typeof window !== 'undefined'){
    DefaultIcon = L.icon({
        iconUrl: icon,
        // shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
}
// else {
//     L.Marker.prototype.options.icon = DefaultIcon;
// }

const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
]


function prepData(data){

    // const innerHandlers = useMemo(
    //     () => ({
    //         click() {
    //             setBounds(innerBounds)
    //             map.fitBounds(innerBounds)
    //         },
    //     }),
    //     [map],
    // )
    // const outerHandlers = useMemo(
    //     () => ({
    //         click() {
    //             setBounds(outerBounds)
    //             map.fitBounds(outerBounds)
    //         },
    //     }),
    //     [map],
    // )
    data.cruises.nodes.forEach(node=>{

        console.log(node)
        node.data.Longitude = +node.data.Longitude
        node.data.Latitude = +node.data.Latitude
        node.data.position=[node.data.Latitude,node.data.Longitude]
        node.data.dataIcon = node.data.Data_Available ? FaCheckSquare : FaTimes
    })
    //
    return data;

}

export default function Cruises({data}){
    const [bounds, setBounds] = React.useState(outerBounds)

    let displayData = prepData(data)

    return (
        <Layout pageTitle={"Cruises"}>
            <MapContent>
                <MapContainer
                    center={[0, 0]}
                    noWrap = {true}
                    bounds={bounds}
                    // LatLngBounds={myBounds}
                    zoom={2}
                    minZoom={2}
                    scrollWheelZoom={true}
                    style={{ height: `var(--screen-full-page)`, width:'70vw', left: '0', marginLeft: '2vw'}}>
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                />
                    {/*<LayerGroup>*/}
                    {/*    {displayData}*/}
                    {/*</LayerGroup>*/}

                    {displayData.cruises.nodes.map((node,i)=>{
                        return (
                            <Marker
                                position={node.data.position}
                                key={node.id}
                            >
                                <Popup>
                                    <h1>{node.data.Year}</h1>
                                    {/*<h3> {node.data.position}</h3>*/}
                                    <h2>{node.data.Purpose}</h2>
                                    <h3>Data collected: {node.data.Collected}</h3>
                                    <h3>Data available: {node.data.Data_Available ? <FaCheckSquare/> : <FaTimes/>} </h3>
                                </Popup>
                            </Marker>
                        )

                    })}
                </MapContainer>
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