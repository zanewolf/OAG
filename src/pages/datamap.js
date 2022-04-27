import * as React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import loadable from '@loadable/component'
import {useEffect, useState} from "react";
import {MultiSelect} from 'react-multi-select-component';
import {useWindowSize} from "../components/useWindowSize";

import {AiOutlinePlus} from 'react-icons/ai'

const CruiseMap = loadable(()=>import('../components/CruiseMap'))

let airtableDataForm = "https://airtable.com/shrlU4ivGTFhQn6vb"



let options=  [
    {
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
    "value": "Cross-Cutting",
    "label": "Cross-Cutting Fields"
    }
]



export default function Datamap({data}){

    const [mapData, setMapData] = useState(data.cruises)
    const [q, setQ] = useState("");
    const [selected, setSelected] = useState(options);

    let size = useWindowSize()




    useEffect(()=>{
        let filteredData={}
        let filteredData2={}
        let primaryFields={}
        selected.forEach((d,i)=> {return primaryFields[d.value]=i})


        filteredData['nodes']= data.cruises.nodes.filter((node)=>{
            return Object.values(node.data).join(' ').toLowerCase().includes(q.toLowerCase());
        })

        filteredData2['nodes'] = filteredData.nodes.filter((node)=>{
            return node.data.Primary_Field in primaryFields
        })

        setMapData(filteredData2)
    },[q,selected,data])


    return (
        <Layout
            pageTitle={"Datamap"}
            pageContent={"Our global map showcasing data collected by the OAHU community."}
        >
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <MapContent>
                <CruiseMenu>
                    <SelectMenu>
                        <MultiSelect
                            options={options}
                            value={selected}
                            className={'dropdownMultiSelect'}
                            onChange={setSelected}
                            disableSearch={true}
                            labelledBy={"Select"}
                        />
                    </SelectMenu>
                    <JoinButton
                        as={'a'}
                        aria-label={"Join Buttn"}
                        onClick={(e)=>{
                        e.preventDefault()
                        window.open(airtableDataForm);}}>
                        {size.width > 900 ? <><AiOutlinePlus className={'add-button'}/> Data</>:<AiOutlinePlus/>}
                    </JoinButton>
                    <SearchContainer className="search-wrapper" >
                        <label htmlFor="search-form">
                            <SearchInput
                                type="search"
                                name="search-form"
                                id="search-form"
                                // className="search-input"
                                placeholder="Search"
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

//styles
const MapContent = styled.div`
  margin-top: var(--screen-nav-bar-height);
  height: 100%;
  min-height: 89vh;
  //display: flex;
  //flex-flow: column nowrap;
  
  //height:auto;

  @media screen and (max-width: 1045px) {

    //margin-top: var(--phone-nav-bar-height);
    //min-height: 84vh;
    //@media screen and (max-width: 1045px) {
    padding-top: clamp(90px,var(--phone-nav-bar-height),115px);
    margin-top:0;

      //padding-top: 2vh;
      //margin-top: 13vh;
      //padding-top: 2vh;
    
  }


  @media (orientation:landscape) and (max-height: 400px)  {
  padding-top: clamp(20px,var(--phone-nav-bar-height),115px);
    margin-top: 0;

  //padding-top: 2vh;
  //margin-top: 13vh;
  //padding-top: 2vh;
}

  @media (orientation: landscape) {
    //z-index: -1000;
  }
  
  
`
const CruiseMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 100vw;
  padding-left: 3vw;
  padding-right: 3vw;
  border-bottom: 3px solid grey;
  height: 7vh;
  position: sticky;
  z-index: 100;
  //min-height: 7vh;
  //margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 1045px) {

    padding-left: 2vw;
    padding-right: 2vw;
    width: 100vw;
    height: 7vh;
    min-height: 40px;
  }
  
  @media screen and (max-width: 500px){
    min-height: 50px;
  }

  @media (orientation: landscape) and (max-width: 1045px) {
    font-size: var(--size-8);
    height: 7vh;
    min-height: 40px;
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
  font-size: var(--size-24);
  color: gray;
  background-repeat: no-repeat;
  background-position: left center;
  height: 5vh;
  padding-left: 2vw;

  ::-webkit-search-cancel-button {
    display: none;
  }


  @media screen and (max-width: 1024px) {
    font-size: var(--size-16);
    height: 5vh;
    min-height: 42px;
  }

  @media (orientation: landscape) and (max-width: 1045px) {
    font-size: var(--size-12);
    height: 5vh;
    min-height: 20px;
  }

`
const SelectMenu=styled.div`
  width: 40vw;
  margin: auto;



  @media screen and (max-width: 1024px) {
    width: 40vw;
  }

  @media (orientation: landscape) and (max-height: 400px){
    
    .dropdown-container .dropdown-heading{
      height: 5vh;
      min-height: 20px;
    }

    
  }
`
const JoinButton = styled.button`
  font-size: var(--size-24);
  cursor: pointer;
  color: white;
  margin: auto 1vw auto 1vw;
  text-align: center;
  background: none;
  min-width: 10vw;
  width: auto;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: inline-block;
  justify-content: center;
  align-content: center;
  padding: 5px;
  //border: 1px solid rgba(255, 255, 255, 0.18);
  
  .add-button{
    padding-top: 5px;
  }

  :hover {
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    //color: blue;
    }

  @media screen and (max-width: 1045px){
    font-size: var(--size-28); 
    min-width: 7vw;
    padding: 0;
  }

  @media (orientation: landscape) {
    //margin-bottom: 1vh;
  }
  
`