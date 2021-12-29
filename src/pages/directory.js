import * as React from 'react';
import {useState,useEffect} from "react";
import Layout from "../components/Layout";
import { Link,graphql } from "gatsby";
import styled from "styled-components";
import PeopleDirectory from "./peopleDirectory";
import ProgramDirectory from "./programDirectory";
import OppsDirectory from "./oppsDirectory";
import {FaSearch} from 'react-icons/fa'
import '../styles/directory.module.css'
import {Button} from "../components/Button";
import {BsPlusCircleFill} from 'react-icons/bs'


let airTableForm = "https://airtable.com/shrZtj5uOH8Ncc9zC"

export default function Directory({data}){

    const [dirFilter, setDirFilter] = useState('people')
    const [dirData, setDirData] = useState(data['people'])
    const [q, setQ] = useState("");


    useEffect(()=>{
        setDirData(data[dirFilter])
    },[dirFilter,data])

    let filteredData={}

    useEffect(()=>{
        filteredData['nodes']= data[dirFilter].nodes.filter((node)=>{
            return Object.values(node.data).join(' ').toLowerCase().includes(q.toLowerCase())
        })

        setDirData(filteredData)
    },[q,dirFilter,data])

    // const searchReset = () =>{
    //     document.getElementById('search-form').value=''
    //     setDirData(data[dirFilter])
    //     setQ('')
    // }

    return (
        <Layout pageTitle="Directory">
            <DirectoryPage>
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
                        <SwitchDropDown className="dropdown" >
                            <form>
                                <MySelect
                                    className="target"
                                    onChange={(e)=>setDirFilter(e.target.value)}
                                    defaultValue={{label: 'People', value: 'people'}}
                                >
                                    {/*<option value="selected" selected="selected">Please choose...</option>*/}
                                    <option value="people" value="people">People</option>
                                    <option value="programs" value="programs">Programs</option>
                                    <option value="opps" value="opps">Opportunities</option>
                                </MySelect>
                            </form>
                        </SwitchDropDown>
                    </SwitchGrid>
                    <AddButton to={'/join'}>

                        {<BsPlusCircleFill/>}
                    </AddButton>
                    <SearchContainer className="search-wrapper" >
                        {/*<FullSize>*/}
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
                                <SearchButton
                                    className="search submit-button"
                                    type="button"
                                    type="submit"
                                    value=""
                                />
                            </label>
                        {/*</FullSize>*/}
                        {/*<AnimatedBar>*/}
                        {/*    <div className="searchBox">*/}
                        {/*        <input className="searchInput" type="text" name="" placeholder="Search"/>*/}
                        {/*            <button className="searchButton" href="#">*/}
                        {/*                <i className="material-icons">*/}
                        {/*                    search*/}
                        {/*                </i>*/}
                        {/*            </button>*/}
                        {/*    </div>*/}
                        {/*</AnimatedBar>*/}

                    </SearchContainer>
                    {/*<FilterMenu>*/}

                    {/*    /!*<JoinButton>*!/*/}
                    {/*    /!*    <Button primary onClick={(e)=>{*!/*/}
                    {/*    /!*        e.preventDefault();*!/*/}
                    {/*    /!*        window.open(airTableForm);*!/*/}
                    {/*    /!*    }}>*!/*/}
                    {/*    /!*        Join Now*!/*/}
                    {/*    /!*    </Button>*!/*/}
                    {/*    /!*</JoinButton>*!/*/}
                    {/*</FilterMenu>*/}
                </DirectoryMenu>
                <DirectorySection>
                    {dirFilter === 'people' ?
                        <PeopleDirectory data={dirData} />
                        : dirFilter === 'programs' ?
                            <ProgramDirectory data={dirData} />
                            :<OppsDirectory data={dirData} />}
                </DirectorySection>
            </DirectoryPage>
        </Layout>
    )
}

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
              Research_Keywords
              Personal_Keywords
              Image
              Email
              University_Institute
              Title
              Website
              Main_Research_Focus
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
const DirectoryPage = styled.div`
  padding-top: var(--screen-nav-bar-height);
  top: 0;
  left: 0;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 5vw;
  //padding-bottom: 10vw;
  background-color: #e8e8e8;
  background-repeat: no-repeat;
  background-attachment: fixed;


  @media screen and (max-width: 940px) {
      padding-top: var(--phone-nav-bar-height);
      //padding-top: 2vh;
    //margin-top: 13vh;
    //padding-top: 2vh;
  }
`
const DirectoryMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-content: center;
  width: 90vw;
  border-bottom: 3px solid grey;
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
  //padding-top: 2vh;
  //align-content: center;
  //justify-content: center;
  height: 10vh;
  //min-height: 7vh;
  //margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 1024px){

    padding-left: 2vw;
    padding-right: 2vw;
    width: 100vw;
  }
  
    `
const SwitchGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  width: 90vw;

  @media screen and (max-width: 1024px) {
    //margin-top: var(--phone-nav-bar-height);
    font-size: 2em;
    width: auto;
    align-content: center;
    //justify-content: start;
    //let: 0;
    //justify-content: space-evenly;
    //padding-top: 2vh;
    //margin-top: 13vh;
    //padding-top: 2vh;
  }
  
`
const DirLink = styled.a`
  text-align: center;
  margin: auto 0.5vw;
  //z-index: 1000;
  cursor: pointer;
  font-size: 2em;
  //padding: 0 2vw;
  padding-bottom: 1vh;

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

  //@media screen and (max-width: 540px) {
  //  font-size: 1em;
  //}

  @media screen and (max-width: 1300px) {
    font-size: 1.5em;
    padding: 0 1vw;
  }

  @media screen and (max-width: 1024px) {
    display:none;
  }

  //&.sideMenu {
  //  margin: 4vw;
  //  font-size: 3em;
  //}

`

// const FullSize = styled.div`
//   @media screen and (max-width: 940px){
//     display:none;
//   }
// `
// const AnimatedBar = styled.div`
//
//   display: none;
//   &.searchBox {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform:  translate(-50%,50%);
//     background: #2f3640;
//     height: 40px;
//     border-radius: 40px;
//     padding: 10px;
//
//   }
//
//   &.searchBox:hover > .searchInput {
//     width: 240px;
//     padding: 0 6px;
//   }
//
//   &.searchBox:hover > .searchButton {
//     background: white;
//     color : #2f3640;
//   }
//
//   &.searchButton {
//     color: white;
//     float: right;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background: #2f3640;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: 0.4s;
//   }
//
//   &.searchInput {
//     border:none;
//     background: none;
//     outline:none;
//     float:left;
//     padding: 0;
//     color: white;
//     font-size: 16px;
//     transition: 0.4s;
//     line-height: 40px;
//     width: 0px;
//
//   }
//   &.searchBox:hover > .searchInput {
//     width: 150px;
//     padding: 0 6px;
//   }
//
//   @media screen and (max-width: 940px) {
//     display: flex;
//
//   }
// `
const SwitchDropDown = styled.div`
  display:none;
  
  &:active{
    border-color: red;
  }
  @media screen and (max-width: 1024px) {
    display:flex;
    padding-bottom: 1vh;

    
  }
`
const MySelect = styled.select`
  
  &::selection{
    
  }
  @media screen and (max-width: 1024px) {
    padding: 0.5vw;
    padding-left: 1vw;
    width: 30vw;
    border: 1px solid #f5f5f5;
    border-radius: 15pt;
    color: gray;
    background-repeat: no-repeat;
    background-position: left center;
    height: 5vh;
    font-size: 0.5em;
    //margin-top: 1vh;
    //left: 0;
    //width: auto;
    //height: 5vh;
    //border-radius: 15pt;
    //padding-left: 1vw;
    //font-size: 1em;

  }
`
const AddButton = styled(Link)`
  color: #383838;
  cursor: pointer;
  font-size: 3em;
  align-content: center;
  display: flex;
  margin: auto;
  //padding-right: 3vw;
  //padding-top: 0.5vh;
  width: 10vw;
  justify-content: center;
  padding-bottom: 0.5vw;

  &:hover {
    transition: 0.25s;
    //font-size: 3.25em;
    color: #53A7B0;

  }

  @media screen and (max-width: 1024px) {
    font-size: 2em;
    //margin: auto;
  }
`
const SearchContainer = styled.div`
  position: relative;
  padding-top: 1vh;
  //margin: auto;
  justify-content: center;
  border: 0;
  width: 30vw;
  height: auto;
  //padding-bottom: 1vh;


`
const SearchInput = styled.input`

  padding: 0.5vw;
  padding-left: 5vw;
  width: 30vw;
  border: 1px solid #f5f5f5;
  border-radius: 15pt;
  font-size: 1.5em;
  color: gray;
  background-repeat: no-repeat;
  background-position: left center;
  height: 5vh;
  ::-webkit-search-cancel-button{
    display: none;
  }

  @media screen and (max-width: 1024px){
    //display:none;
    //min-width: 200px;
    font-size: 1em;
    padding-left: 2vw;
    //margin-top: 1vw;
    //margin: auto;

  }
  

`

const SearchButton = styled.input`
  background-image: url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png");
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  width: 35px;
  background-position: 5px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-color: transparent;
  margin-left:-45px;
  border:none;
`
// const FilterMenu = styled.div`
//  //padding: 2vh;
//  // height: 7vh;
//  // width: 80vw;
//  // margin: auto;
//  // justify-content: center;
//`
const DirectorySection = styled.div`
  //padding-top: 10vh;
  //align-content: center;
  //justify-content: center;
  height: auto;
  min-height: 80vh;
  //margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 1024px){
    //padding-top: 15vh;
  }

  
    `

// const DirectoryGrid = styled.div`
//   display: flex;
//   //flex-grow: 4;
//   flex-flow: row wrap;
//   justify-content: center;
//   //align-items: auto;
//   //align-content: center;
//   //.item{
//   //  flex-basis: 10vw | auto;
//   //}
//
//   @media screen and (max-width: 900px){
//     flex-flow: column wrap;
//     justify-content: center;
//     align-content: center;
//   }
//
//   .item {
//     //flex-basis: auto;
//   }
// `
// const JoinButton=styled.div`
//   display: flex;
//   align-items: center;
//   align-content: center;
//   width: auto;
//   margin: auto;
//
//   @media screen and (max-width: 1096px){
//     display: flex;
//     justify-content: center;
//     align-content: center;
//   }
// `
// const SearchBar = styled.div`
//   width: 80vw;
//   height: 5vh;
//   padding: 1vw;
//   justify-content: center;
//   margin: auto;
// `
