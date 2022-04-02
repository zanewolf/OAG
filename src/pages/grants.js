import React from 'react'
import Layout from "../components/Layout";
import ocean from "../images/ocean3.jpg";
import styled from "styled-components";
import {FaWrench} from "react-icons/all";

export default function Grants() {
    return (
        <Layout>
            <GrantPage>
                <Background className="background">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Background>
                <UnderConstructionBox>
                    <UnderConstruction>Under Construction <FaWrench/></UnderConstruction>
                </UnderConstructionBox>

            </GrantPage>
        </Layout>
    )
}
const GrantPage = styled.div`
    //position: absolute;
    width: 100%;
    min-height: 96vh;
    ////min-height: 98vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;  
`

const UnderConstructionBox = styled.div`
  background: rgba(208, 208, 208, 0.25);
  box-shadow: 0 8px 32px 0 rgba(59, 59, 59, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  //background: rgba(241, 241, 241, 0.25);
  //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  //backdrop-filter: blur(4px);
  //-webkit-backdrop-filter: blur(4px);
  //border-radius: 10px;
  //border: 1px solid rgba(255, 255, 255, 0.18);
  width: 50vw;
  height: 20vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;

  @media only screen and (max-width: 1100px) {
    width: 95%;
  }
`

const UnderConstruction = styled.h1`
    margin: auto;
    color: white;
    font-weight: 500;
    font-size: 3em;

  @media only screen and (max-width: 550px) {
    font-size: 2em;
  }
  
`

const Background = styled.div`
  position: fixed;
  z-index: -100;
  width: 100vw;
  height: 96vh;
  top: 0;
  left: 0;
  background: #001b47;
  overflow: hidden;


  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }


  span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }


  span:nth-child(0) {
    color: #01778c;
    top: 15%;
    left: 67%;
    animation-duration: 24s;
    animation-delay: -9s;
    transform-origin: 11vw -21vh;
    box-shadow: 40vmin 0 5.26363347745118vmin currentColor;
  }
  span:nth-child(1) {
    color: #351431;
    top: 50%;
    left: 32%;
    animation-duration: 40s;
    animation-delay: -3s;
    transform-origin: 16vw 13vh;
    box-shadow: -40vmin 0 5.5077506962762754vmin currentColor;
  }
  span:nth-child(2) {
    color: #351431;
    top: 28%;
    left: 80%;
    animation-duration: 17s;
    animation-delay: -37s;
    transform-origin: -8vw -13vh;
    box-shadow: 40vmin 0 5.802134113572903vmin currentColor;
  }
  span:nth-child(3) {
    color: #01778c;
    top: 9%;
    left: 42%;
    animation-duration: 42s;
    animation-delay: -35s;
    transform-origin: -4vw -24vh;
    box-shadow: -40vmin 0 5.411587597081101vmin currentColor;
  }
  span:nth-child(4) {
    color: #52b69a;
    top: 4%;
    left: 6%;
    animation-duration: 20s;
    animation-delay: -43s;
    transform-origin: 15vw -16vh;
    box-shadow: -40vmin 0 5.497737600275261vmin currentColor;
  }
  span:nth-child(5) {
    color: #52b69a;
    top: 65%;
    left: 3%;
    animation-duration: 39s;
    animation-delay: -30s;
    transform-origin: 14vw 1vh;
    box-shadow: 40vmin 0 5.110261481455739vmin currentColor;
  }
  span:nth-child(6) {
    color: #f5a578;
    top: 14%;
    left: 21%;
    animation-duration: 45s;
    animation-delay: -18s;
    transform-origin: 12vw 21vh;
    box-shadow: -40vmin 0 5.24764626444193vmin currentColor;
  }
  span:nth-child(7) {
    color: #823c3a;
    top: 44%;
    left: 47%;
    animation-duration: 41s;
    animation-delay: -34s;
    transform-origin: 6vw 21vh;
    box-shadow: 40vmin 0 5.294628523630529vmin currentColor;
  }
  span:nth-child(8) {
    color: #351431;
    top: 70%;
    left: 38%;
    animation-duration: 13s;
    animation-delay: -3s;
    transform-origin: 16vw -3vh;
    box-shadow: -40vmin 0 5.033504805036087vmin currentColor;
  }
  span:nth-child(9) {
    color: #01778c;
    top: 52%;
    left: 85%;
    animation-duration: 18s;
    animation-delay: -48s;
    transform-origin: -22vw 22vh;
    box-shadow: 40vmin 0 5.298619112739592vmin currentColor;
  }
  span:nth-child(10) {
    color: #351431;
    top: 69%;
    left: 57%;
    animation-duration: 40s;
    animation-delay: -30s;
    transform-origin: -21vw -12vh;
    box-shadow: 40vmin 0 5.297811165429678vmin currentColor;
  }
  span:nth-child(11) {
    color: #823c3a;
    top: 10%;
    left: 2%;
    animation-duration: 20s;
    animation-delay: -12s;
    transform-origin: 20vw 10vh;
    box-shadow: -40vmin 0 5.055485161052747vmin currentColor;
  }
  span:nth-child(12) {
    color: #52b69a;
    top: 75%;
    left: 45%;
    animation-duration: 44s;
    animation-delay: -34s;
    transform-origin: -9vw 19vh;
    box-shadow: -40vmin 0 5.137346574755642vmin currentColor;
  }
  span:nth-child(13) {
    color: #52b69a;
    top: 8%;
    left: 95%;
    animation-duration: 43s;
    animation-delay: -20s;
    transform-origin: -17vw 4vh;
    box-shadow: 40vmin 0 5.575444715737861vmin currentColor;
  }
  span:nth-child(14) {
    color: #01778c;
    top: 51%;
    left: 23%;
    animation-duration: 25s;
    animation-delay: -10s;
    transform-origin: -2vw -23vh;
    box-shadow: -40vmin 0 5.976483643912841vmin currentColor;
  }
  span:nth-child(15) {
    color: #351431;
    top: 77%;
    left: 17%;
    animation-duration: 47s;
    animation-delay: -5s;
    transform-origin: -23vw 19vh;
    box-shadow: 40vmin 0 5.633792696480015vmin currentColor;
  }
  span:nth-child(16) {
    color: #f5a578;
    top: 69%;
    left: 88%;
    animation-duration: 47s;
    animation-delay: -41s;
    transform-origin: -16vw -12vh;
    box-shadow: -40vmin 0 5.844810104185714vmin currentColor;
  }
  span:nth-child(17) {
    color: #823c3a;
    top: 8%;
    left: 8%;
    animation-duration: 35s;
    animation-delay: -44s;
    transform-origin: 19vw 12vh;
    box-shadow: -40vmin 0 5.211850085396213vmin currentColor;
  }
  span:nth-child(18) {
    color: #52b69a;
    top: 75%;
    left: 57%;
    animation-duration: 43s;
    animation-delay: -27s;
    transform-origin: -19vw -10vh;
    box-shadow: -40vmin 0 5.15665215237425vmin currentColor;
  }
  span:nth-child(19) {
    color: #52b69a;
    top: 92%;
    left: 49%;
    animation-duration: 50s;
    animation-delay: -15s;
    transform-origin: 24vw -19vh;
    box-shadow: -40vmin 0 5.581582247677982vmin currentColor;
  }

`

