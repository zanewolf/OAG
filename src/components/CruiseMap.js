import React from 'react'
// import Leaflet from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, LayerGroup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {FaCheckSquare, FaTimes} from "react-icons/all";
import L from 'leaflet';
import styled from "styled-components";


import icon from '../images/marker-icon-violet.png';
import peIcon from '../images/marker_map_icon_dp.png';
import comIcon from '../images/marker_map_icon_com.png';
import humIcon from '../images/marker_map_icon_hum.png';
import esIcon from '../images/marker_map_icon_es.png';
import bsIcon from '../images/marker_map_icon_bs.png';
import enIcon from '../images/marker_map_icon_en.png'
import oIcon from '../images/marker_map_icon_other.png'


let DefaultIcon = null;

let iconDict = {'Biological Sciences': bsIcon,
    'Engineering': enIcon,
    'Environmental Sciences': esIcon,
    'Humanities':humIcon,
    'Communications': comIcon,
    'Policy/Economics': peIcon
}


if (typeof window !== 'undefined'){
    DefaultIcon = L.icon({
        iconUrl: oIcon,
        // iconSize:[20,20]
        // shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
}

function GetIcon(primaryField){
    let thisIcon = primaryField in iconDict ? iconDict[primaryField] : oIcon
    // console.log(thisIcon)
    return L.icon({
        iconUrl: thisIcon,
        // iconSize: [48]
    })
}



//
function prepData(data){

    data.cruises.nodes.forEach(node=>{

        if (node.data.Latitude && node.data.Longitude){
            node.data.Latitude = +node.data.Latitude
            node.data.Longitude = +node.data.Longitude
            node.data.position=[node.data.Latitude,node.data.Longitude]
        } else{
            // node.data.position =[0,0]

            // node.data.position = getLatLong(node.data.Main_Location)
            //     .then(coords => {console.log(coords); return coords})
        }
        node.data.dataIcon = node.data.Data_Available ? FaCheckSquare : FaTimes
    })



    return data;
}

export default function CruiseMap ({data}) {


    let displayData = prepData(data)

    return (
        <MapPage>
                <MapContainer
                center={[0, 0]}
                noWrap={true}
                continuousWorld={false}
                maxBoundsViscosity={1}
                maxBounds={[[-90, -180],[90, 180]]}
                zoom={2}
                minZoom={2}
                maxZoom={16}
                scrollWheelZoom={true}
                style={{
                    height: `80vh`,
                    width: '80%',
                    float: 'bottom',
                    margin: 'auto',
                    position: 'relative'}}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                />
                {/*<LayerGroup>*/}
                {/*    {displayData}*/}
                {/*</LayerGroup>*/}

                {displayData.cruises.nodes.map((node, i) => {
                    return (
                        <Marker
                            position={node.data.position}
                            key={node.id}
                            icon={GetIcon(node.data.Primary_Field)}
                        >
                            <Popup>
                                <h1>{node.data.Year}</h1>
                                {/*<h3> {node.data.position}</h3>*/}
                                {/*<h2>{node.data.Purpose}</h2>*/}
                                {/*<h3>Data collected: {node.data.Collected}</h3>*/}
                                <h3>Data available: {node.data.Data_Available ? <FaCheckSquare/> : <FaTimes/>} </h3>
                            </Popup>
                        </Marker>
                    )

                })}
            </MapContainer>
        </MapPage>
    )
}

const MapPage = styled.div`
height: 100%;
`