import React from 'react'
// import Leaflet from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, LayerGroup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {FaCheckSquare, FaTimes} from "react-icons/all";
import L from 'leaflet';
import icon from '../images/marker-icon-violet.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    // shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const innerBounds = [
    [49.505, -2.09],
    [53.505, 2.09],
]
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
export default function CruiseMap ({data}) {




    const [bounds, setBounds] = React.useState(outerBounds)

    let displayData = prepData(data)

    console.log(displayData.cruises.nodes[1].data)


    // map.setMaxBounds(map.getBounds());


    return (
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

            {/*<Marker*/}
            {/*    position={[51.505, -0.09]}*/}
            {/*>*/}
            {/*    <Popup>*/}
            {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker*/}
            {/*    position={displayData.cruises.nodes[1].data.position}*/}
            {/*>*/}
            {/*    <Popup>*/}
            {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}

        </MapContainer>
    )
}


// class CruiseMap {
//
//     /*
//      *  Constructor method
//      */
//     constructor(parentElement, displayData, mapCenter, lineData) {
//         this.parentElement = 'mapbox';
//         this.displayData = displayData;
//         this.mapCenter = mapCenter;
//         this.lineData = lineData;
//
//         this.initVis();
//     }
//
//
//     /*
//      *  Initialize station map
//      */
//     initVis () {
//         let vis = this;
//
//         L.Icon.Default.imagePath = 'images/';
//
//
//         vis.map=L.map(vis.parentElement).setView(vis.mapCenter, 13);
//
//         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(vis.map);
//
//
//         // initialize custom icons
//         let LeafIcon = L.Icon.extend({
//             options: {
//                 shadowUrl: 'icons/marker-shadow.png',
//                 iconSize: [25, 41],
//                 iconAnchor: [12, 41],
//                 popupAnchor: [0, -28]
//             }
//         });
//
//         vis.redMarker = new LeafIcon({ iconUrl:  'icons/marker-red.png' });
//         vis.blueMarker = new LeafIcon({ iconUrl:  'icons/marker-blue.png' });
//         vis.yellowMarker = new LeafIcon({ iconUrl:  'icons/marker-yellow.png' });
//
//
//         vis.wrangleData();
//     }
//
//
//     /*
//      *  Data wrangling
//      */
//     wrangleData () {
//         let vis = this;
//
//         // No data wrangling/filtering needed
//
//         // Update the visualization
//         vis.updateVis();
//     }
//
//     updateVis() {
//         let vis = this;
//
//         // see ya, dworky
//         // let dworkin = L.marker([42.378774,-71.117303]).bindPopup("Maxwell Dworkin");
//         // vis.map.addLayer(dworkin);
//
//         // add markers
//         vis.stations = L.layerGroup().addTo(vis.map)
//
//         vis.displayData.forEach((d,i)=>{
//
//             let myicon = styleIcon(d)
//             // myicon=vis.redMarker
//
//             vis.marker = L.marker([d.lat, d.long],{icon: myicon}).addTo(vis.map).bindPopup(d.station + "<br> Available Bikes: " + d.bikes + "<br> Available Docks: " + d.docks)
//             vis.stations.addLayer(vis.marker)
//
//         })
//
//         // add MBTA lines
//         let lines = L.geoJson(vis.lineData, {
//             style: styleLines,
//             weight: 5,
//             fillOpacity: 0.7
//         }).addTo(vis.map)
//         // L.geoJson(vis.lineData).addTo(vis.map)
//
//
//         function styleLines(feature){
//             // console.log(feature)
//             switch(feature.properties.LINE){
//                 case 'RED': return {color: "red"};
//                 case 'GREEN': return {color: "green"};
//                 case 'ORANGE': return {color: "orange"};
//                 case 'SILVER': return {color: "grey"};
//                 case 'BLUE': return {color: "blue"};
//             }
//         }
//
//         function styleIcon(d){
//             console.log(d);
//
//             if (d.bikes === 0 | d.docks === 0 ) {
//                 return vis.redMarker;
//             } else {
//                 return vis.blueMarker;
//             }
//         }
//
//     }
// }
//
