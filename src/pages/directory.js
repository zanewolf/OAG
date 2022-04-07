import * as React from 'react';
import {useState,useEffect} from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import PeopleDirectory from "../components/peopleDirectory";
import '../styles/directory.module.css'
import {useWindowSize} from "../components/useWindowSize";
import {AiOutlinePlus} from "react-icons/ai";
import {MultiSelect} from "react-multi-select-component";
import { GatsbyImage } from "gatsby-plugin-image";

let airTableForm = "https://airtable.com/shrZtj5uOH8Ncc9zC";
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


export default function Directory({data}){

    // console.log(data)

    const [dirData, setDirData] = useState( data['people'])
    const [q, setQ] = useState("");

    const [selected, setSelected] = useState(options);

    let size = useWindowSize()


    useEffect(()=>{
        let filteredData={}
        let filteredData2={}
        let primaryFields={}

        selected.forEach((d,i)=> {return primaryFields[d.value]=i})


        filteredData['nodes']= data.people.nodes.filter((node)=>{
            return Object.values(node.data).join(' ').toLowerCase().includes(q.toLowerCase());
        })

        filteredData2['nodes'] = filteredData.nodes.filter((node)=>{
            return node.data.Primary_Field in primaryFields
        })

        setDirData(filteredData2)
    },[q,selected,data])

    return (
        <Layout pageTitle="Directory">
            <DirectoryPage>
                <DirectoryMenu>
                    <SelectMenu>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            disableSearch={true}
                            labelledBy={"Select"}
                        />
                    </SelectMenu>
                    <JoinButton as={'a'} onClick={(e)=>{
                        e.preventDefault()
                        window.open(airTableForm);}}>
                        {size.width > 1200 ? <><AiOutlinePlus className={'add-button'}/> Profile</>:<AiOutlinePlus/>}
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

                </DirectoryMenu>
                <DirectorySection>
                        <PeopleDirectory data={dirData} />
                </DirectorySection>
                <div style={{marginBottom: '-10px'}}>
                    <svg width="100vw" height="auto" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg"
                         className="transition duration-300 ease-in-out delay-150">
                        <path
                            d="M 0,600 C 0,600 0,150 0,150 C 58.495202861018626,154.33108891355283 116.99040572203725,158.6621778271057 169,173 C 221.00959427796275,187.3378221728943 266.53357997286963,211.6823776051301 314,203 C 361.46642002713037,194.3176223948699 410.8752743864842,152.60831175237394 464,126 C 517.1247256135158,99.39168824762608 573.9653224811938,87.88437538537427 626,104 C 678.0346775188062,120.11562461462573 725.2634356887407,163.85418670612898 783,174 C 840.7365643112593,184.14581329387102 908.9809347638427,160.69887779010978 961,138 C 1013.0190652361573,115.30112220989022 1048.8128252558886,93.35030213343198 1103,98 C 1157.1871747441114,102.64969786656802 1229.7677642126032,133.89991367616227 1289,147 C 1348.2322357873968,160.10008632383773 1394.1161178936984,155.05004316191886 1440,150 C 1440,150 1440,600 1440,600 Z"
                            stroke="none" strokeWidth="0" fill="#01778c66"
                            className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                        <path
                            d="M 0,600 C 0,600 0,300 0,300 C 50.08597854236034,303.83746454556666 100.17195708472067,307.6749290911333 146,310 C 191.82804291527933,312.3250709088667 233.3981502034776,313.13774818103343 293,308 C 352.6018497965224,302.86225181896657 430.2354421013688,291.774078184733 488,276 C 545.7645578986312,260.225921815267 583.660081391047,239.7659390800345 637,260 C 690.339918608953,280.2340609199655 759.1242323344433,341.1621654951288 810,349 C 860.8757676655567,356.8378345048712 893.8429892711799,311.58539893945 936,295 C 978.1570107288201,278.41460106055 1029.5038105808362,290.4962387470712 1091,292 C 1152.4961894191638,293.5037612529288 1224.1417684054754,284.42964607226537 1284,284 C 1343.8582315945246,283.57035392773463 1391.9291157972623,291.78517696386734 1440,300 C 1440,300 1440,600 1440,600 Z"
                            stroke="none" strokeWidth="0" fill="#01778c88"
                            className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                        <path
                            d="M 0,600 C 0,600 0,450 0,450 C 65.49192255518561,460.7724256998397 130.98384511037122,471.5448513996794 188,468 C 245.01615488962878,464.4551486003206 293.5565421137008,446.5930201011222 341,451 C 388.4434578862992,455.4069798988778 434.78998643482544,482.08306819583174 490,488 C 545.2100135651746,493.91693180416826 609.2835121469973,479.0747071155506 654,463 C 698.7164878530027,446.9252928844494 724.0759649771858,429.61810334196576 773,418 C 821.9240350228142,406.38189665803424 894.4126279442594,400.4528795165865 962,421 C 1029.5873720557406,441.5471204834135 1092.2735232457765,488.5703785916883 1142,487 C 1191.7264767542235,485.4296214083117 1228.493279072635,435.2656061166605 1276,421 C 1323.506720927365,406.7343938833395 1381.7533604636824,428.36719694166976 1440,450 C 1440,450 1440,600 1440,600 Z"
                            stroke="none" strokeWidth="0" fill="#01778cff"
                            className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
                    </svg>
                </div>
            </DirectoryPage>
        </Layout>
    )
}

export const query = graphql`
   query DirectoryData {
    people: allAirtable(filter: {table: {eq: "People"}}, sort: {fields: data___Name}) {
        nodes {
          data {
              Name
              Research_Keywords
              Personal_Keywords
              Email
              Affiliations
              Image_File {
                url
                thumbnails {
                  large {
                    url
                  }
                }
              }
              Title
              Website
              Primary_Field
              Secondary_Fields
              About
              slug     
          }
          id
        }
    }
}
`

// styles
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
    
    .dropdown-content{
      width: 70vw;
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
  //padding-bottom: 5vw;
  //padding-bottom: 10vw;
  background-color: #e5e7eb;
  background-repeat: no-repeat;
  background-attachment: fixed;


  @media screen and (max-width: 1045px) {
      padding-top: var(--phone-nav-bar-height);
      //padding-top: 2vh;
    //margin-top: 13vh;
    //padding-top: 2vh;
  }
`
const DirectoryMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  width: 90vw;
  border-bottom: 3px solid grey;
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
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
const JoinButton = styled.button`
  font-size: 1.5em;
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
    font-size: 1.75em;
    padding: 0;
  }

`
const SearchContainer = styled.div`
  position: relative;
  //padding-top: 1vh;
  margin: auto;
  justify-content: center;
  align-content: center;
  border: 0;
  width: 60vw;
  height: auto;
  //padding-bottom: 1vh;


`
const SearchInput = styled.input`
  padding: 0.5vw;
  padding-left: 1vw;
  width: 100%;
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

const DirectorySection = styled.div`
  //padding-top: 10vh;
  align-content: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  margin: 3vh 5vw 0vh 5vw;
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
// const AddButton=styled.div`
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
