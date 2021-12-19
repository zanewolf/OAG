import * as React from 'react';
import {useState,useEffect} from "react";
import Layout from "../components/Layout";
import { Link,graphql } from "gatsby";
import Card from "../components/Card";
import { FaMapMarker, FaExternalLinkAlt } from 'react-icons/fa';
import styled from "styled-components";
import {Button} from "../components/Button";
import PeopleDirectory from "./peopleDirectory";
import ProgramDirectory from "./programDirectory";
import OppsDirectory from "./oppsDirectory";
import SearchBar from "../SearchBar";


export default function Directory({data}){

    const [dirFilter, setDirFilter] = useState('people')
    const [dirData, setDirData] = useState(data['people'])
    //     set search query to empty string
    const [q, setQ] = useState("");
    //     set search parameters
    //     we only what to search countries by capital and name
    //     this list can be longer if you want
    //     you can search countries even by their population
    // just add it to this array
    const [searchParam, setSearchParam] = React.useState(["capital", "name"]);

    // console.log(dirData)


    useEffect(()=>{
        setDirData(data[dirFilter])
    },[dirFilter])



    let filteredData={}


    useEffect(()=>{
        filteredData['nodes']= data[dirFilter].nodes.filter((node)=>{
            return Object.values(node.data).join(' ').toLowerCase().includes(q.toLowerCase())
        })

        setDirData(filteredData)
    },[q])

    const searchReset = () =>{
        document.getElementById('search-form').value=''
        setDirData(data[dirFilter])
        setQ('')
    }



    console.log(dirData)


/*    useEffect(()=>{

    },q)*/
    // return items.filter((item) => {
    //     return searchParam.some((newItem) => {
    //         return (
    //             item[newItem]
    //                 .toString()
    //                 .toLowerCase()
    //                 .indexOf(q.toLowerCase()) > -1
    //         );
    //     });
    // });
    // filter data here, separate out into another function, return data

    return (
        <Layout pageTitle="Directory">

            <DirectoryMenu>
                <SwitchGrid>
                    <DirLink
                        className={dirFilter ==='people'? 'dir-toggle-check': 'dir-toggle-uncheck'}
                        onClick = {()=>setDirFilter('people')}
                    >
                        People
                    </DirLink>
                    <DirLink
                        className={dirFilter ==='programs'? 'dir-toggle-check': 'dir-toggle-uncheck'}
                        onClick = {()=>setDirFilter('programs')}
                    >
                        Programs
                    </DirLink>
                    <DirLink
                        className={dirFilter ==='opps'? 'dir-toggle-check': 'dir-toggle-uncheck'}
                        onClick = {()=>setDirFilter('opps')}
                    >
                        Opportunities
                    </DirLink>

                    {/*<Button*/}
                    {/*    onClick = {()=>setDirFilter('people')}*/}
                    {/*    primary*/}
                    {/*    fontBig*/}
                    {/*>*/}
                    {/*    People*/}

                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*    onClick = {()=>setDirFilter('programs')}*/}
                    {/*    primary*/}
                    {/*    fontBig*/}
                    {/*>*/}
                    {/*   Programs*/}

                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*    onClick = {()=>setDirFilter('opportunities')}*/}
                    {/*    primary*/}
                    {/*    fontBig*/}
                    {/*>*/}
                    {/*    Opportunities*/}

                    {/*</Button>*/}
                </SwitchGrid>
                <FilterMenu>
                    <div className="search-wrapper" id={'searchBar'}>
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search by name"
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <button
                                onClick={()=>searchReset()}
                                >
                                Reset
                            </button>
                            {/*<span className="sr-only">Search countries here</span>*/}
                        </label>
                    </div>
                    {/*<SearchBar data={data[dirFilter]}/>*/}
                </FilterMenu>

            </DirectoryMenu>
            <DirectorySection>
                {dirFilter === 'people' ?
                    <PeopleDirectory data={dirData}/>
                    : dirFilter === 'programs' ?
                        <ProgramDirectory data={dirData}/>
                        :<OppsDirectory data={dirData}/>}
            </DirectorySection>
        </Layout>
    )
}

// function isNotNull(value){
//     if (value != null){
//         return true
//     } else {
//         return false
//     }
// }


export const query = graphql`
   query DirectoryData {
    programs: allAirtable(filter: {data: {}, table: {eq: "Programs"}}) {
      nodes {
        data {
          Image
          Name       
          Location_Name__from_Locations_
          Specializations
          Website
          Acronym
        }
        id
      }
    }
    people: allAirtable(filter: {table: {eq: "People"}}, sort: {fields: data___Name}) {
        nodes {
          data {
              Name
              Keywords__csv_
              Image
              Email
              University_Institute
              Title
              Website
              Research_Focus
              About
              slug     
          }
          id
        }
    }
    
    opps: allAirtable(filter: {table: {eq: "Opportunities"}}) {
        nodes {
          data {
            Due_Date
            DIvision
            Affiliated_University_s_
            Grant_type
            Funder
            Program_Number
            Program_Title
            Proposal_Level
            System
            Website
          }
          id
        }
    }
}
`

const FilterMenu = styled.div`
 margin: 2vh;
`
const DirLink = styled.a`
  text-align: center;
  margin: auto 0.5vw;
  z-index: 1000;
  cursor: pointer;
  font-size: 2em;
  padding: 0 2vw;

  //&:before{
  //  content: '\\00B7';
  //  padding-right: 5px;
  //}

  &.dir-toggle-check {
    color: #262626;
    font-weight: 700;
  }

  &.dir-toggle-uncheck {
    color: #383838;
    font-weight: 500;

  }

  &:hover {
    transition: 0.5s;
    font-weight: 700;
  }

  //&.sideMenu {
  //  margin: 4vw;
  //  font-size: 3em;
  //}

`
const DirectoryMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 2vh;
  //align-content: center;
  //justify-content: center;
  height: 5vh;
  min-height: 5vh;
  margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 900px){
    margin-top: var(--phone-nav-bar-height);
    padding-top: 2vh;
  }
  
    `

const DirectorySection = styled.div`
  padding-top: 2vh;
  //align-content: center;
  //justify-content: center;
  height: auto;
  min-height: 100vh;
  margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 900px){
    margin-top: var(--phone-nav-bar-height);
    padding-top: 2vh;
  }
  
    `
const SwitchGrid = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 75vw;
  border-bottom: 3px solid grey;
  
`
const DirectoryGrid = styled.div`
  display: flex;
  //flex-grow: 4;
  flex-flow: row wrap;
  justify-content: center;
  //align-items: auto;
  //align-content: center;
  //.item{
  //  flex-basis: 10vw | auto;
  //} 
  
  @media screen and (max-width: 900px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
  
  .item {
    //flex-basis: auto;
  }
`

// {/*<DirectoryGrid>*/}
// {/*    {data[dirFilter].nodes.map((node) => {*/}
//
// {/*        if (dirFilter==='programs'){*/}
// {/*            return (*/}
//
// {/*                <li className={"card"} key={node.id}>*/}
// {/*                    <Card*/}
// {/*                        type={"program"}*/}
// {/*                        header={node.data.Name}*/}
// {/*                        // subheader={node.data.Acronym}*/}
// {/*                        image={node.data.Image}*/}
// {/*                        // tags={node.data.Specializations}*/}
// {/*                    >*/}
// {/*                        <ul className={"card-list"}>*/}
// {/*                            <li key={node.id}>*/}
// {/*                                <FaMapMarker/>*/}
// {/*                                {node.data["Location_Name__from_Locations_"][0]}*/}
// {/*                            </li>*/}
// {/*                            <li>*/}
// {/*                                <FaExternalLinkAlt/>*/}
// {/*                                <a href={node.data.Website}>Website</a>*/}
// {/*                            </li>*/}
// {/*                        </ul>*/}
// {/*                    </Card>*/}
// {/*                </li>*/}
// {/*            )}*/}
// {/*            else {*/}
// {/*                return (*/}
// {/*                    <li className={"card"} key={node.data.slug}>*/}
// {/*                        <Card*/}
// {/*                            type={"person"}*/}
// {/*                            header={node.data.Name}*/}
// {/*                            subheader = {node.data.Title + " at " + node.data.University_Institute}*/}
// {/*                            image={node.data.Image}*/}
// {/*                            buttonText = "Contact"*/}
// {/*                            buttonLink = {node.data.Email}*/}
// {/*                            // tags={node.data.Keywords}*/}
// {/*                        >*/}
// {/*                            <ul className={"card-list"}>*/}
// {/*                                <li>*/}
// {/*                                    <Link to={"/directory/" + node.data.slug} key={node.data.slug}>*/}
// {/*                                        <Button >*/}
// {/*                                            Read More*/}
// {/*                                        </Button>*/}
// {/*                                    </Link>*/}
//
// {/*                                </li>*/}
// {/*                            </ul>*/}
// {/*                        </Card>*/}
// {/*                    </li>*/}
// {/*                )*/}
// {/*            }*/}
// {/*    })}*/}
// {/*</DirectoryGrid>*/}