import * as React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
// import CruiseMap from "../components/CruiseMap";
import loadable from '@loadable/component'
import Select from 'react-select'
import {useEffect, useState} from "react";
import {MultiSelect} from 'react-multi-select-component';


const CruiseMap = loadable(()=>import('../components/CruiseMap'))


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

let options=  [{
    "value": "Biological Sciences",
    "label": "Biological Sciences",
    "color": "blue",
    }, {
    "value": "Environmental Sciences",
    "label": "Environmental Sciences"
    }, {
    "value": "Engineering",
    "label": "Engineering"
    }, {
    "value": "Policy/Economics",
    "label": "Policy/Economics"
    }, {
    "value": "Communications",
    "label": "Communications"
    }, {
    "value": "Humanities",
    "label": "Humanities"
    }, {
    "value": "Cross-Cutting Fields",
    "label": "Cross-Cutting Fields"
}]



export default function Datamap({data}){

    // console.log(data.cruises)

    const [mapData, setMapData] = useState(data.cruises)
    const [q, setQ] = useState("");
    const [selected, setSelected] = useState(options);


    let filteredData={}
    let filteredData2={}
    let primaryFields={}

    selected.forEach((d,i)=> {return primaryFields[d.label]=i})

    useEffect(()=>{

        filteredData['nodes']= data.cruises.nodes.filter((node)=>{
            // console.log(node)
            return Object.values(node.data).join(' ').toLowerCase().includes(q.toLowerCase());
        })

        filteredData2['nodes'] = filteredData.nodes.filter((node)=>{
            return node.data.Primary_Field in primaryFields
            // in )
        })

        setMapData(filteredData2)

    },[q,selected])


    const resetButton = document.getElementsByClassName('.clear-selected-button')

    console.log(resetButton)

    // resetButton.addEventListener('click', ()=>setSelected([...options]))

    // const resetOptions = (event)=>{
    //     console.log('resetting')
    //     setSelected([...options])
    // }
    //
    // React.useEffect(() => {
    //     console.log('effect triggered')
    //     window.addEventListener('.clear-selected-button', resetOptions);
    //
    //     // cleanup this component
    //     return () => {
    //         window.removeEventListener('.clear-selected-button', resetOptions);
    //     };
    // }, []);
    //     })

    return (
        <Layout pageTitle={"Datamap"}>
            <MapContent>
                <CruiseMenu>
                    <SelectMenu>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            disableSearch={true}
                            labelledBy={"Select"}
                        />
                    </SelectMenu>
                    <SearchContainer className="search-wrapper" >
                        <label htmlFor="search-form">
                            <SearchInput
                                type="search"
                                name="search-form"
                                id="search-form"
                                // className="search-input"
                                placeholder="Search by anything"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                    </SearchContainer>
                </CruiseMenu>
                <CruiseMap data={mapData}/>
            </MapContent>
        </Layout>
    )
}
export const query = graphql`
   query CruiseData {
    cruises: allAirtable(filter: {table: {eq: "Data"}}) {
    nodes {
      data {
        Longitude
        Latitude
        Main_Location
        Year
        Data_Available
        Primary_Field
        Data_Medium
        Research_Subject
        Research_Focus
        Data_Available
        Data_Link
        Data_Email
        Keywords
        People_Involved
        Other_Locations
        About
      }
      id
    }
  }
}
`

const MapContent = styled.div`
  margin-top: var(--screen-nav-bar-height);
  height: auto;
  min-height: 89vh;
  //display: flex;
  //flex-flow: column nowrap;
  
  //height:auto;

  @media screen and (max-width: 1045px) {

    margin-top: var(--phone-nav-bar-height);
  }
  
  
`

const CruiseMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  border-bottom: 3px solid grey;
  height: 7vh;
  //min-height: 7vh;
  //margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 1045px) {

    padding-left: 2vw;
    padding-right: 2vw;
    width: 100vw;
  }


`

const SearchContainer = styled.div`
  display: block;
  margin: auto;
  align-content: center;
  width: 50vw;

  @media screen and (max-width: 1024px) {
    width: 40vw;


  }


`
const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #636363;
  border-radius: 15pt;
  font-size: 1.5em;
  color: gray;
  background-repeat: no-repeat;
  background-position: left center;
  height: 5vh;
  padding-left: 2vw;

  ::-webkit-search-cancel-button {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1em;


  }


`
const SelectMenu=styled.div`
  width: 40vw;
  z-index: 1000000;
  margin: auto;
  //text-align: left;
  &.dropdown-content {
    text-align: left;
  }

  @media screen and (max-width: 1024px) {
    width: 40vw;


  }
`
// const DataType=styled.div``