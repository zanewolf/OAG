import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup, LayerGroup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {FaCheckSquare, FaTimes,FaExternalLinkAlt} from "react-icons/all";
import {HiOutlineMail} from 'react-icons/hi'
import L from 'leaflet';
import styled from "styled-components";
import peIcon from '../images/marker_map_icon_dp.png';
import comIcon from '../images/marker_map_icon_com.png';
import humIcon from '../images/marker_map_icon_hum.png';
import esIcon from '../images/marker_map_icon_es.png';
import bsIcon from '../images/marker_map_icon_bs.png';
import enIcon from '../images/marker_map_icon_en.png'
import oIcon from '../images/marker_map_icon_other.png';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

let DefaultIcon = null;

let iconDict = {'Biological Sciences': bsIcon,
    'Engineering': enIcon,
    'Environmental Sciences': esIcon,
    'Humanities':humIcon,
    'Communications': comIcon,
    'Policy/Economics': peIcon
}

const fieldColors={
    'Policy/Economics': '#66275f',
    'Communications':'#823c3a',
    'Humanities':'#f5a578',
    'Environmental Sciences': '#01477d',
    'Biological Sciences': '#01778c',
    'Engineering': '#52b69a',
    'Other': '#818588'

}
let fieldColor;

if (typeof window !== 'undefined') {
    DefaultIcon = L.icon({
        iconUrl: oIcon,
        // iconSize:[20,20]
        // shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;


    // L.popup({autoPan:false})
    //     .setLatLng([0, 0])
}

function GetIcon(primaryField){
    let thisIcon = primaryField in iconDict ? iconDict[primaryField] : oIcon
    // console.log(thisIcon)
    return L.icon({
        iconUrl: thisIcon,
        // iconSize: [48]
    })
}

function prepData(data){
    // console.log(data)

    data.nodes.forEach(node=>{

        if (node.data.Latitude && node.data.Longitude){
            node.data.Latitude = +node.data.Latitude
            node.data.Longitude = +node.data.Longitude
            node.data.position=[node.data.Latitude,node.data.Longitude]
        } else{
            // node.data.position =[0,0]

            // node.data.position = getLatLong(node.data.Main_Location)
            //     .then(coords => {console.log(coords); return coords})
        }
        // node.data.dataIcon = node.data.Data_Available ? FaCheckSquare : FaTimes
    })
    return data;
}





export default function CruiseMap ({data}) {


    const copy =  (email) => {
        console.log(email)
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }


    let displayData = prepData(data)
    var size = useWindowSize()

    return (
        <MapPage>
                <MapContainer
                center={[0, 0]}
                noWrap={true}
                continuousWorld={false}
                maxBoundsViscosity={1}
                // maxBounds={[[-90, -180],[90, 180]]}
                zoom={2}
                minZoom={2}
                maxZoom={16}
                scrollWheelZoom={true}
                style={{
                    height: `82vh`,
                    width: '100%',
                    float: 'bottom',
                    margin: 'auto',
                    position: 'relative'}}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                />

                {displayData.nodes.map((node, i) => {
                    fieldColor = node.data.Primary_Field in fieldColors ? fieldColors[node.data.Primary_Field] : '#818588'
                    return (
                        <Marker
                            position={node.data.position}
                            key={node.id}
                            icon={GetIcon(node.data.Primary_Field)}
                        >
                            {/*<ResponsivePopup/>*/}
                            <StyledPopup bandColor = {fieldColor} size={size}>
                                <h1>{node.data.Research_Subject}</h1>
                                <h2>{node.data.Year}</h2>
                                {/*<h3> {node.data.position}</h3>*/}
                                {/*<h4>{node.data.Other_Locations}</h4>*/}
                                <h2>{node.data.People_Involved}</h2>
                                <hr/>
                                <h3>Data Collected: <span>{node.data.Data_Medium}</span></h3>
                                <h3>Research Focus: {node.data.Research_Focus}</h3>

                                <h3>Data available: {node.data.Data_Available == 'Public'?
                                    <a href={node.data.Data_Link} target={"_blank"} >Public Link <FaExternalLinkAlt/></a>
                                    :
                                    node.data.Data_Available == 'Upon Request' ?
                                        <EmailButton onClick={()=>copy(node.data.Data_Email)}>Email Me <HiOutlineMail/></EmailButton>
                                        :
                                        'Not Yet'
                                }
                                </h3>

                                <hr/>
                                {node.data.Other_Locations && <Accordion>

                                    <AccordionSummary expandIcon={<ExpandMore/>}>
                                        OTHER LOCATIONS
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        {node.data.Other_Locations}
                                    </AccordionDetails>

                                </Accordion>
                                }
                                {node.data.About && <Accordion>

                                    <AccordionSummary expandIcon={<ExpandMore/>}>
                                        ABOUT
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        {node.data.About}
                                    </AccordionDetails>

                                </Accordion>
                                }
                            </StyledPopup>
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

const EmailButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  //width: 5vw;
  border: none;
  //margin: auto;
  //color: #000000;
  //border-right: 2px solid #828282
  display: inline-block;
  cursor: pointer;
  color: #0375ac;
  font-weight: bold;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;

    background-color: black;
    color: #000000;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;

  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  //&:hover {
  //
  //  transition: 0.5s;
  //  //color: purple;
  //  -webkit-transform: scale(1.02) translateZ(0);
  //  transform: scale(1.02) translateZ(0);
  //}
`

const StyledPopup = styled(Popup)`
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border: 6px solid ${props => props.bandColor || "#a70bea"};
  border-radius: 20px;
  position: absolute;
  margin:auto;
  width:35vw;
  min-width: 350px;
  //max-width: 40vw;
  display:flex;
  flex-flow: column nowrap;
  gap: 10px;
  
  h1, h2, h3, h4 {
    margin: 10px;
  }
  
  .leaflet-popup leaflet-popup-content-wrapper{
    width: 30vw;
  }
  
  .leaflet-popup-content{
    width: 30vw !important;

    @media screen and (max-width: 900px){
     width: 80vw !important;
    }

  }
  
`